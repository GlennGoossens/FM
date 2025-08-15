import { getPageBySlug } from "@/content/page-loader";
import { BlockRenderer } from "@/components/block-renderer";
import { generateMetadata as generateSeoMetadata } from "@/components/seo.component";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPageBySlug("home", "published");
  const seo = data?.SEO;
  
  return generateSeoMetadata(seo);
}

export default async function Home() {
  const data = await getPageBySlug("home", "published");
  const blocks = data?.blocks;
  if(!blocks) return null;
  return <div>{blocks ? <BlockRenderer blocks={blocks} /> : null}</div>;
}
