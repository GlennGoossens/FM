"use client";

import TestimonialItem from "./testimonial-item.component";
import { useEffect } from "react";
import { TestimonialsBlock } from "@/lib/types";

export default function TestimonialsComponent(props: Readonly<TestimonialsBlock>) {

    useEffect(() => {
      // Initialize Swiper when component mounts
      const initSwiper = async () => {
        const { default: Swiper } = await import('swiper');
        const { Pagination, Autoplay } = await import('swiper/modules');
        
        new Swiper('.testimonials-slider', {
          modules: [Pagination, Autoplay],
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            }
          }
        });
      };

      initSwiper();
    }, []);

    return (
        <section id="testimonials" className="testimonials section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Testimonials</h2>
          <p>Wat zeggen onze sportievelingen?</p>
        </div>

        <div className="testimonials-slider swiper">
          <div className="swiper-wrapper">
            {props.items.map((testimonial, index) => (
              <TestimonialItem
                key={index}
                text={testimonial.text}
                name={testimonial.name}
                date={testimonial.date}
                stars={testimonial.stars}
              />
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section>
    )
}