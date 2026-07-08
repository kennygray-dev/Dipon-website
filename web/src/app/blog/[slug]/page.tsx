import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import Eyebrow from "@/components/Eyebrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import PageHero from "@/components/PageHero";
import PhotoTile from "@/components/PhotoTile";
import Reveal from "@/components/Reveal";
import { BLOG_POSTS, formatBlogDate, getBlogPost } from "@/lib/blog";
import { root, section, wrap, lead } from "@/lib/styles";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found — DIPON Group" };
  return {
    title: `${post.title} — DIPON Group`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className={root}>
      <Header />
      <main id="top">
        <PageHero
          eyebrow={post.category}
          title={post.title}
          intro={post.excerpt}
          image={post.heroImage}
          imageAlt={post.title}
        />

        <section className={section}>
          <div className={wrap}>
            <div className="mx-auto max-w-[720px]">
              <Reveal>
                <span className="font-label text-[12px] font-medium tracking-[0.8px] text-dipon-tertiary uppercase">
                  {post.author} · {formatBlogDate(post.publishedAt)} · {post.readTime}
                </span>
                <div className="mt-6 flex flex-col gap-[22px]">
                  {post.body.map((para) => (
                    <p className={lead} key={para.slice(0, 24)}>
                      {para}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-t border-[rgba(35,61,76,0.14)] bg-dipon-surface px-[clamp(20px,5vw,60px)] py-[clamp(72px,9vw,120px)]">
          <div className={wrap}>
            <Reveal className="mb-11 max-w-[620px]">
              <Eyebrow>More Insights</Eyebrow>
              <Heading>More from the blog, worth a read.</Heading>
            </Reveal>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {others.map((other, i) => (
                <Reveal key={other.slug} delay={(i % 3) * 110} className="aspect-[3/4] overflow-hidden rounded-[14px]">
                  <PhotoTile
                    href={`/blog/${other.slug}`}
                    image={other.heroImage}
                    imageAlt={other.title}
                    title={other.title}
                    desc={other.excerpt}
                    footerLeft={other.category}
                    className="h-full w-full"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBand className="-mt-16 max-[760px]:mt-0" />
      </main>
      <Footer />
    </div>
  );
}
