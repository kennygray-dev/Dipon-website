import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import Eyebrow from "@/components/Eyebrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import PageHero from "@/components/PageHero";
import PhotoTile from "@/components/PhotoTile";
import PortableTextBody from "@/components/PortableTextBody";
import Reveal from "@/components/Reveal";
import { formatBlogDate, readingTime } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";
import { urlForImage } from "@/sanity/image";
import { getPost, getPostSlugs, getPosts } from "@/sanity/queries";
import { root, section, wrap } from "@/lib/styles";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post Not Found — DIPON Group Limited" };

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;
  const ogImage = post.mainImage
    ? urlForImage(post.mainImage).width(1200).height(630).fit("crop").url()
    : undefined;

  return {
    title: `${title} — DIPON Group Limited`,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const heroImage = post.mainImage ? urlForImage(post.mainImage).width(1600).fit("max").url() : "";
  const others = (await getPosts()).filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    ...(heroImage ? { image: heroImage } : {}),
    datePublished: post.publishedAt,
    author: { "@type": post.author ? "Person" : "Organization", name: post.author || "DIPON Group" },
    publisher: {
      "@type": "Organization",
      name: "DIPON Group Limited",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/assets/dipon-logo-dark.svg` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <div className={root}>
      <Header />
      <main id="top">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PageHero
          eyebrow={post.category}
          title={post.title}
          intro={post.excerpt}
          image={heroImage}
          imageAlt={post.title}
        />

        <section className={section}>
          <div className={wrap}>
            <div className="mx-auto max-w-[720px]">
              <Reveal>
                <span className="font-label text-[12px] font-medium tracking-[0.8px] text-dipon-tertiary uppercase">
                  {[post.author, formatBlogDate(post.publishedAt), readingTime(post.body)].filter(Boolean).join(" · ")}
                </span>
                <div className="mt-6">
                  <PortableTextBody value={post.body} />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {others.length > 0 && (
          <section className="border-t border-[rgba(35,61,76,0.14)] bg-dipon-surface px-[clamp(20px,5vw,60px)] py-[clamp(72px,9vw,120px)]">
            <div className={wrap}>
              <Reveal className="mb-11 max-w-[620px]">
                <Eyebrow>More Blogs</Eyebrow>
                <Heading>More from the blog, worth a read.</Heading>
              </Reveal>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {others.map((other, i) => (
                  <Reveal key={other._id} delay={(i % 3) * 110} className="aspect-[3/4] overflow-hidden rounded-[14px]">
                    <PhotoTile
                      href={`/blog/${other.slug}`}
                      image={other.mainImage ? urlForImage(other.mainImage).width(600).height(800).fit("crop").url() : ""}
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
        )}

        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
