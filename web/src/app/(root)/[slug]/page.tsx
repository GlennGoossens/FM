import { getPageBySlug } from "@/content/page-loader";
import { BlockRenderer } from "@/components/block-renderer";
import { BreadcrumbComponent } from "@/components/breadcrumb.component";


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