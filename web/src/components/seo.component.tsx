import { Metadata } from "next";
import { getStrapiMedia } from "@/lib/utils";

export interface SeoProps {
    metaTitle: string;
    metaDescription: string;
    metaImage?: {
        url: string;
        alternativeText?: string;
    };
    keywords?: string;
    metaRobots?: string;
    metaViewport?: string;
    canonicalURL?: string;
    structuredData?: any;
    openGraph?: {
        ogTitle?: string;
        ogDescription?: string;
        ogImage?: {
            url: string;
            alternativeText?: string;
        };
        ogUrl?: string;
        ogType?: string;
    };
}

export function generateMetadata(seo: SeoProps, ): Metadata {
    const title = seo?.metaTitle || "Functional Movementz";
    const description = seo?.metaDescription || "Functional Movementz - Together to the next level";
    const image = seo?.metaImage ? getStrapiMedia(seo.metaImage.url) : undefined;
    const canonicalUrl = seo?.canonicalURL || process.env.NEXT_PUBLIC_SITE_URL;
    
    const metadata: Metadata = {
        title,
        description,
        keywords: seo?.keywords,
        robots: seo?.metaRobots ? {
            index: !seo.metaRobots.includes('noindex'),
            follow: !seo.metaRobots.includes('nofollow'),
        } : undefined,
        openGraph: {
            title: seo?.openGraph?.ogTitle || title,
            description: seo?.openGraph?.ogDescription || description,
            url: seo?.openGraph?.ogUrl || canonicalUrl,
            siteName: "Functional Movementz",
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: seo?.openGraph?.ogTitle || title,
            description: seo?.openGraph?.ogDescription || description,
        },
        alternates: {
            canonical: canonicalUrl,
        },
    };

    // Add images if available
    if (seo?.openGraph?.ogImage) {
        const ogImageUrl = getStrapiMedia(seo.openGraph.ogImage.url);
        if (ogImageUrl) {
            metadata.openGraph!.images = [{
                url: ogImageUrl,
                alt: seo.openGraph.ogImage.alternativeText || title,
            }];
            metadata.twitter!.images = [ogImageUrl];
        }
    } else if (image) {
        metadata.openGraph!.images = [{
            url: image,
            alt: seo?.metaImage?.alternativeText || title,
        }];
        metadata.twitter!.images = [image];
    }

    return metadata;
}