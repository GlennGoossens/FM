import HeroComponent from "@/components/hero.component";
import AboutComponent from "@/components/about/about.component";
import AboutUsComponent from "@/components/about-us/about-us.components";
import TestimonialsComponent from "@/components/testimonials/testimonials.component";
import BookASessionComponent from "@/components/forms/book-a-session.component";
import GalleryComponent from "@/components/gallery/gallery.component";
import ContactComponent from "@/components/contact/contact.component";
import FaqComponent from "@/components/faq/faq.component";
import TeamComponent from "@/components/team/team.component";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <AboutComponent />
      <AboutUsComponent />
      <TestimonialsComponent />
      <BookASessionComponent />
      <GalleryComponent />
      <FaqComponent />
      <TeamComponent />
      <ContactComponent />
    </div>
  );
}
