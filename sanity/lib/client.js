
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03', // Use current date in YYYY-MM-DD format
  useCdn: process.env.NODE_ENV === 'production', // Enable CDN in production
  token: process.env.SANITY_API_TOKEN, // Only if you need write access
});