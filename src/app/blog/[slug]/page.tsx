import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GhostLink, Kicker, Title } from "@/components/ui";
import { posts } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <main className="pt-28">
      <article className="mx-auto max-w-3xl px-5 py-16">
        <Kicker>{new Date(post.date).toLocaleDateString("pt-BR")}</Kicker>
        <Title>{post.title}</Title>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
          {post.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mt-10">
          <GhostLink href="/blog">Voltar ao blog</GhostLink>
        </div>
      </article>
    </main>
  );
}
