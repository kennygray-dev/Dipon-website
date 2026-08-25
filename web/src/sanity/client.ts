import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

// Optional read token — only needed if the dataset is private. For a public
// blog dataset, leave it unset and the fast, cached CDN is used.
const token = process.env.SANITY_API_READ_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: !token,
  token,
  perspective: "published",
});
