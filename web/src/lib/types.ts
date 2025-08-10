import { ServiceOfferProps } from "@/components/about/service-offer.component";
import { ClassCardProps } from "@/components/about/class-card.component";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { FeatureBoxProps } from "@/components/about-us/feature-box.component";

type ComponentType =
    "blocks.hero" | 
    "blocks.about" | 
    "blocks.why-us" |
    "blocks.testimonials" |
    "blocks.book-a-session" |
    "blocks.gallery" |
    "blocks.faq" |
    "blocks.team" |
    "blocks.contact";

interface Base<T extends ComponentType, D extends object = object> {
    __component: T;
    id: string;
    createdAt: string;
    updatedAt: string;
    data: D;
}

export type Block = HeroBlock | 
AboutBlock | 
AboutUsBlock | 
TestimonialsBlock | 
BookASessionBlock | 
GalleryBlock | 
FaqBlock | 
TeamBlock | 
ContactBlock;

export type HeroBlock = Base<"blocks.hero", {
    title: string;
    description: string;
    image: ImageObject;
    button: ButtonObject;
}>;

export interface AboutBlock extends Base<"blocks.about"> {
    title: string;
    classCardsTitle: string;
    serviceOffers: ServiceOfferProps[];
    classCards: ClassCardProps[];
}
export interface AboutUsBlock extends Base<"blocks.why-us">  {
    title: string;
    content: BlocksContent;
    image: ImageObject;
    featureTitle: string;
    features: FeatureBoxProps[];
}
export interface TestimonialsBlock extends Base<"blocks.testimonials"> {
    title: string;
}
export interface BookASessionBlock extends Base<"blocks.book-a-session"> {
    title: string;
}
export interface GalleryBlock extends Base<"blocks.gallery"> {
    title: string;
}
export interface FaqBlock extends Base<"blocks.faq"> {
    title: string;
}
export interface TeamBlock extends Base<"blocks.team"> {
    title: string;
}
export interface ContactBlock extends Base<"blocks.contact"> {
    title: string;
}

export type ImageObject = {
    url: string;
    alternativeText: string;
    name: string;
    width: number;
    height: number;
}

export type ButtonObject = {
    text: string;
    url: string;
    style: "primary" | "secondary";
}

export type BannerObject = {
    quote: string;
    mail: string;
    links: SocialMediaLinkObject[];
}

export type SocialMediaLinkObject = {
    icon: string;
    url: string;
}