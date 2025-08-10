import { Block } from "@/lib/types";
import HeroComponent from "@/components/hero.component";
import AboutComponent from "@/components/about/about.component";
import AboutUsComponent from "@/components/about-us/about-us.components";
import TestimonialsComponent from "@/components/testimonials/testimonials.component";
import BookASessionComponent from "@/components/forms/book-a-session.component";
import GalleryComponent from "@/components/gallery/gallery.component";
import ContactComponent from "@/components/contact/contact.component";
import FaqComponent from "@/components/faq/faq.component";
import TeamComponent from "@/components/team/team.component";

function blockRenderer(block: Block, index: number) {
    switch (block.__component) {
        case "blocks.hero":
            return <HeroComponent key={index} {...block} />;
        case "blocks.about":
            return <AboutComponent key={index} {...block} />;
        case "blocks.why-us":
            return <AboutUsComponent key={index} {...block} />;
        case "blocks.testimonials":
            return <TestimonialsComponent key={index} {...block} />;
        case "blocks.book-a-session":
            return <BookASessionComponent key={index} {...block} />;
        case "blocks.gallery":
            return <GalleryComponent key={index} {...block} />;
        case "blocks.faq":
            return <FaqComponent key={index} {...block} />;
        case "blocks.team":
            return <TeamComponent key={index} {...block} />;
        case "blocks.contact":
            return <ContactComponent key={index} {...block} />;
        default:
            return null;
    }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
    return blocks.map((block, index) => blockRenderer(block, index));
}