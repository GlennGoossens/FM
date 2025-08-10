import { getPageBySlug } from "@/content/page-loader";
import { BlockRenderer } from "@/components/block-renderer";

export default async function Home() {
  const data = await getPageBySlug("home", "published");
  const blocks = data?.blocks;
  if(!blocks) return null;
  return <div>{blocks ? <BlockRenderer blocks={blocks} /> : null}</div>;
}
