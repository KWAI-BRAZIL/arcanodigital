import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, Kicker, Title } from "@/components/ui";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos curtos de neuromarketing para negócio local em Goiás — autoridade sem discurso de venda.",
};

export default function BlogPage() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-6xl px-5 py-24 md:py-36">
        <Kicker>Conteúdo</Kicker>
        <Title>
          Neuromarketing para quem <span className="gold-text">vende na cidade.</span>
        </Title>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="panel p-6 hover:border-gold/50">
              <p className="text-[11px] uppercase tracking-[0.18em] text-gold">
                {new Date(post.date).toLocaleDateString("pt-BR")}
              </p>
              <h2 className="mt-3 font-display text-2xl text-cream">{post.title}</h2>
              <p className="mt-3 text-sm text-muted">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
