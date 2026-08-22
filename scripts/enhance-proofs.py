#!/usr/bin/env python3
"""Upscale and sharpen compressed chat photos for the proof gallery."""

from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter, ImageOps

SRC = Path("/Users/vitoriarubia/.cursor/projects/Users-vitoriarubia-Desktop-arcano/assets")
OUT = Path("/Users/vitoriarubia/Desktop/arcano/public/proofs")

JOBS = [
    ("image-75930f35-0465-4c7d-8e76-541c05e6b57f.png", "proof-whatsapp-saba.png", 2.2, True),
    ("image-d30a197f-7700-43c1-b016-407a894c3ea4.png", "proof-meta-116k.png", 2.0, True),
    ("image-fa7d8f77-7767-4051-9273-77b0fe17d881.png", "proof-meta-44k.png", 2.2, True),
    ("image-50dc355e-0289-4345-ab45-0f0fec349d8d.png", "proof-painel-232k.png", 2.4, False),
    ("image-199a10aa-3b81-43c0-aca3-515b82d4edc9.png", "proof-painel-64k.png", 2.4, False),
    ("image-8b11d2b2-9e30-4e87-a8c7-c446ebe1540d.png", "proof-painel-nara.png", 2.0, True),
    ("image-d0e0b475-4013-422e-8b58-3ff071ceddf7.png", "proof-ecommerce-19k.png", 2.2, True),
    ("image-1dfded3e-3b2f-4171-a117-d7ddaf7660bf.png", "proof-painel-euro.png", 2.2, True),
    ("image-5bb47e5f-83f1-45aa-a763-9ad87d0e1109.png", "proof-painel-748k.png", 2.2, True),
    ("image-d8b53300-e07e-4f39-a528-c0a8a988c1e3.png", "proof-tabela-roas.png", 2.2, False),
]


def enhance(src: Path, dest: Path, scale: float, denoise: bool) -> None:
    img = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
    w, h = img.size
    img = img.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
    if denoise:
        img = img.filter(ImageFilter.SMOOTH)
    img = img.filter(ImageFilter.UnsharpMask(radius=1.3, percent=150, threshold=1))
    img = ImageEnhance.Contrast(img).enhance(1.08)
    img = ImageEnhance.Sharpness(img).enhance(1.2)
    dest.parent.mkdir(parents=True, exist_ok=True)
    img.save(dest, format="PNG")
    print(f"{dest.name} {img.size[0]}x{img.size[1]}")


if __name__ == "__main__":
    for name, out, scale, denoise in JOBS:
        enhance(SRC / name, OUT / out, scale, denoise)
