import { getPageBySlug } from "@/content/page-loader";
import { BlockRenderer } from "@/components/block-renderer";
import BreadcrumbComponent from "@/components/breadcrumb.component";
import { generateMetadata as generateSeoMetadata } from "@/components/seo.component";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug;
  if (!slug) {
    return generateSeoMetadata({
      metaTitle: "Page Not Found",
      metaDescription: "The requested page could not be found"
    });
  }
  
  const data = await getPageBySlug(slug, "published");
  const seo = data?.SEO;
  
  return generateSeoMetadata(seo);
}

export default async function PageBySlugRoute({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  if(!slug) return null;
  // TODO check if slug is a pageslug
  const data = await getPageBySlug(slug, "published");
  const blocks = data?.blocks;
  if(!blocks) return null;
  return <div>
    <BreadcrumbComponent path={slug} />
    {blocks ? <BlockRenderer blocks={blocks} /> : null}
  </div>;
}