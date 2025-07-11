"use client";

import TestimonialItem from "./testimonial-item.component";
import { useEffect } from "react";

export default function TestimonialsComponent() {
    const testimonials = [
      {
        text: "Sam weet heel goed waarmee hij bezig is! Hij kijkt naar wat je kan en waar je je grenzen kan verleggen. De personal trainingen zijn steeds gevarieerd en op maat afgesteld. Ik merkte week na week vooruitgang bij mezelf!",
        name: "Barbara",
        date: "Apr, 2023",
        rating: 5
      },
      {
        text: "In Corona tijd was het niet evident om af te spreken. Het was dan ook in buitenlucht, wat toch aangenaam was.",
        name: "Gina",
        date: "Mar, 2023",
        rating: 4
      },
      {
        text: "Ik heb Sam leren kennen tijdens de COVID periode, ik ben/was geen sporter en wist niet goed hoe eraan te beginnen. Sam heeft een plan uitgewerkt en we zijn gestart, ondertussen train ik al 2 jaar bij Sam zowel groepslessen als personal training sessies. De trainingen zitten goed in elkaar, oefeningen die niet haalbaar zijn worden aangepast, geen 2 keer dezelfde training en uiteindelijk bepaal je zelf hoe zwaar je het wil maken, ik ben zeer positief over de aanpak en de trainingen zijn zeker een aanrader!",
        name: "Elsie",
        date: "Mar, 2023",
        rating: 5
      },
      {
        text: "Sam is een vriendelijk, vlotte en zeer competente trainer. Hij weet iemand te motiveren en helpt je om vol te houden. Ik ging er omdat ik rugklachten had en sindsdien ben ik ervan verlost. Merci.",
        name: "Jurgen",
        date: "Mar, 2023",
        rating: 5
      },
      {
        text: "Mijn dochter vond het fijn om met Sam te trainen. Afwisselende trainingen met de nodige aandacht voor ieders kunnen. Met zijn deskundigheid loodst hij je moeiteloos door een training heen. Een aanrader dus!",
        name: "Tom",
        date: "Mar, 2023",
        rating: 5
      },
      {
        text: "Sam is een fantastische PT. Hij houdt rekening met wat je kan en niet kan. Voorziet ook andere oefeningen indien er zich een blessure voordoet. Ik heb zowel individuele trainingen als groepstrainingen gevolgd en ik kan ze beide zeker en vast aanraden! Het zijn erg leuke trainingen met veel variatie en goede opbouw. Ook wordt er goed gefocust op core-stability. Ik vond het een aangename ervaring en zou zeker en vast terug gaan naar \"Functional MovementZ\"!",
        name: "Louise",
        date: "Mar, 2023",
        rating: 5
      },
      {
        text: "Aanrader! Elke training is een verrassing. Sam zorgt voor veel variatie en heeft een zeer motiverende aanpak. Ik ben fan!!",
        name: "Nancy",
        date: "Mar, 2023",
        rating: 5
      },
      {
        text: "Ik heb een lessenreeks core stability in kleine groep gevolgd bij Sam. Heel fijne trainer, voldoende variatie in de oefeningen, voldoende feedback en aangepaste oefeningen voor verschillende niveaus.",
        name: "Sara",
        date: "Mar, 2023",
        rating: 5
      }
    ];

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
            {testimonials.map((testimonial, index) => (
              <TestimonialItem
                key={index}
                text={testimonial.text}
                name={testimonial.name}
                date={testimonial.date}
                rating={testimonial.rating}
              />
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section>
    )
}