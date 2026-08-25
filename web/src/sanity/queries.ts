import { groq } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "./client";

export type PostCard = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  mainImage: SanityImageSource | null;
};

export type Post = PostCard & {
  author: string | null;
  body: PortableTextBlock[];
  seoTitle: string | null;
  seoDescription: string | null;
};

const listQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
  _id, title, "slug": slug.current, excerpt, category, publishedAt, mainImage
}`;

const bySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, excerpt, category, publishedAt, mainImage,
  author, body, seoTitle, seoDescription
}`;

const slugsQuery = groq`*[_type == "post" && defined(slug.current)].slug.current`;

// Re-fetch published content at most once a minute, so new posts appear without
// a rebuild while pages stay static and fast.
const opts = { next: { revalidate: 60 } };

export async function getPosts(): Promise<PostCard[]> {
  try {
    return await client.fetch<PostCard[]>(listQuery, {}, opts);
  } catch {
    return [];
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    return await client.fetch<Post | null>(bySlugQuery, { slug }, opts);
  } catch {
    return null;
  }
}

export async function getPostSlugs(): Promise<string[]> {
  try {
    return await client.fetch<string[]>(slugsQuery, {}, opts);
  } catch {
    return [];
  }
}
