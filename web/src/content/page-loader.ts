import sdk from "@/lib/sdk";

export async function getAllPagesSlugs() {
    const pages = await sdk.collection("pages").find({
      fields: ["slug"],
    });
    return pages;
  }
  
  export async function getPageBySlug(slug: string, status: string) {
    const page = await sdk.collection("pages").find(
        {
            filters: {
                slug: { $eq: slug}
            },
            status: status as "draft" | "published" | undefined
        }
    );
    return page.data[0];
  }