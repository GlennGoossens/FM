
import { getStrapiUrl } from "@/lib/utils";

export async function loadNavigationData() {
    // el970wu9vo501ej88s326ngd, slug: navigation
    const response = await fetch(`${getStrapiUrl()}/api/navigation/render/navigation?TYPE=TREE`);
    const data = await response.json();
    return data;
}