import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import PhotoTile from "@/components/PhotoTile";
import Reveal from "@/components/Reveal";
import { formatBlogDate } from "@/lib/blog";
import { urlForImage } from "@/sanity/image";
import { getPosts } from "@/sanity/queries";
import { root, section, wrap } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Insights — DIPON Group Limited",
  description:
    "Notes from across DIPON Group — construction, renewable energy, real estate, and supply chain, from the ground up.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className={root}>
      <Header />
      <main id="top">
        <PageHero
          eyebrow="Insights"
          title="Ideas, updates, and the work, from the ground up."
          intro="Notes from across DIPON Group — construction, power, and the projects in between."
          image="https://images.pexels.com/photos/4134179/pexels-photo-4134179.jpeg?auto=compress&cs=tinysrgb&w=1200"
          imageAlt="DIPON Group project planning"
        />

        <section className={section}>
          <div className={wrap}>
            {posts.length === 0 ? (
              <p className="max-w-[520px] font-body text-[16px] leading-[1.7] text-dipon-secondary">
                No insights published yet — check back soon.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
                {posts.map((post, i) => (
                  <Reveal key={post._id} delay={(i % 3) * 110} className="aspect-[4/5] overflow-hidden rounded-[16px]">
                    <PhotoTile
                      href={`/blog/${post.slug}`}
                      image={post.mainImage ? urlForImage(post.mainImage).width(800).height(1000).fit("crop").url() : ""}
                      imageAlt={post.title}
                      title={post.title}
                      desc={post.excerpt}
                      footerLeft={post.category}
                      footerRight={formatBlogDate(post.publishedAt)}
                      className="h-full w-full"
                    />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
