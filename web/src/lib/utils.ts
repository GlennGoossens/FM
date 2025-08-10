export function getStrapiUrl() {
    return process.env.STRAPI_BASE_URL ?? "http://localhost:1338";
}

export function getStrapiMedia(url: string | null) {
    if( url == null ) return null;
    if(url.startsWith("data:")) return url;
    if(url.startsWith("http") || url.startsWith("//")) return url;
    return `${getStrapiUrl()}${url}`;
}