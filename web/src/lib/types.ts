import { ServiceOfferProps } from "@/components/about/service-offer.component";
import { ClassCardProps } from "@/components/about/class-card.component";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { FeatureBoxProps } from "@/components/about-us/feature-box.component";
import { TestimonialItemProps } from "@/components/testimonials/testimonial-item.component";
import { TeamMemberProps } from "@/components/team/team-member.component";
import { FaqItemProps } from "@/components/faq/faq-item.component";

type ComponentType =
    "blocks.hero" | 
    "blocks.about" | 
    "blocks.why-us" |
    "blocks.testimonial" |
    "blocks.book-a-session" |
    "blocks.gallery" |
    "blocks.faq" |
    "blocks.team" |
    "blocks.contact" |
    "blocks.training-form" |
    "blocks.pricing";

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
ContactBlock |
TrainingFormBlock |
PricingBlock;

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
export interface TestimonialsBlock extends Base<"blocks.testimonial"> {
    title: string;
    items: TestimonialItemProps[];
}
export interface BookASessionBlock extends Base<"blocks.book-a-session"> {
    title: string;
}
export interface GalleryBlock extends Base<"blocks.gallery"> {
    title: string;
}
export interface FaqBlock extends Base<"blocks.faq"> {
    title: string;
    subtitle: string;
    contactText: string;
    contactButton: ButtonObject;
    items: FaqItemProps[];
}
export interface TeamBlock extends Base<"blocks.team"> {
    title: string;
    subtitle: string;
    teamMembers: TeamMemberProps[];
}
export interface ContactBlock extends Base<"blocks.contact"> {
    title: string;
}
export interface TrainingFormBlock extends Base<"blocks.training-form"> {
    title: string;
    subtitle: string;
}
export interface PricingBlock extends Base<"blocks.pricing"> {
    title: string;
    subtitle: string;
    groups: PricingGroupProps[];
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