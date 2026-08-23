import type { Metadata } from "next";
import Link from "next/link";
import { ServiceIcon } from "@/components/ServiceIcon";
import { CtaBand, Kicker, PageTitle } from "@/components/ui";
import { posts } from "@/lib/content";

function postIcon(slug: string) {
  if (slug.includes("trafego")) return "trafego-pago";
  if (slug.includes("whatsapp")) return "automacao";
  if (slug.includes("ecommerce") || slug.includes("checkout")) return "vendas-online";
  if (slug.includes("roas")) return "trafego-pago";
  return "neuromarketing";
}

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos curtos de neuromarketing para negócio local em Goiás — autoridade sem discurso de venda.",
};

export default function BlogPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 pt-28 pb-16 md:pt-32 md:pb-24">
        <Kicker>Conteúdo</Kicker>
        <PageTitle>
          Neuromarketing para quem <span className="gold-text">vende na cidade.</span>
        </PageTitle>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="panel p-6 hover:border-gold/50">
              <ServiceIcon slug={postIcon(post.slug)} />
              <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-gold">
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
