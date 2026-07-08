import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import PhotoTile from "@/components/PhotoTile";
import Reveal from "@/components/Reveal";
import { BLOG_POSTS, formatBlogDate } from "@/lib/blog";
import { root, section, wrap } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Insights — DIPON Group",
  description:
    "Notes from across DIPON Group — construction, renewable energy, real estate, and supply chain, from the ground up.",
};

export default function BlogPage() {
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
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
              {BLOG_POSTS.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 110} className="aspect-[4/5] overflow-hidden rounded-[16px]">
                  <PhotoTile
                    href={`/blog/${post.slug}`}
                    image={post.heroImage}
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
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
