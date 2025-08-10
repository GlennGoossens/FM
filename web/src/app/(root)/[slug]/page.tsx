import { draftMode } from "next/headers";
import { getPageBySlug } from "@/content/page-loader";
import { BlockRenderer } from "@/components/block-renderer";


interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function PageBySlugRoute({ params }: PageProps) {
  const resolveParams = await params;
  const slug = await resolveParams?.slug;

  const data = await getPageBySlug(slug, "published");
  console.log(data);
  const blocks = data?.blocks;
  if(!blocks) return null;
  return <div>{blocks ? <BlockRenderer blocks={blocks} /> : null}</div>;
}