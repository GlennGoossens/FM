import ServiceOffer, { ServiceOfferProps } from "./service-offer.component";
import ClassCard, { ClassCardProps } from "./class-card.component";
import ImageGallery from "./image-gallery.component";

export interface AboutComponentProps {
  title: string;
  classCardsTitle: string;
  serviceOffers: ServiceOfferProps[];
  classCards: ClassCardProps[];
}

export default function AboutComponent({ title, classCardsTitle, serviceOffers, classCards }: AboutComponentProps) {
    return (
        <section id="aanbod" className="why-us">
      <div className="container">

        <div className="section-title">
          <h2>{title}</h2>
        </div>

        {serviceOffers.map(serviceOffer => (
          <ServiceOffer
            key={serviceOffer.title + "id"}
            title={serviceOffer.title}
            content={serviceOffer.content}
            image={serviceOffer.image}
            button={serviceOffer.button}
            reverse={serviceOffer.reverse}
          />
        ))}       

        <div className="row">
        <div className="col-12 mt-5">
            <h4 className="aanbod-title text-center">{classCardsTitle}</h4>
          </div>
          
          <div className="col-12 row">
            {classCards.map(card => (
              <ClassCard
                key={card.title}
                title={card.title}
                schedule={card.schedule}
                description={card.description}
                button={card.button}
                image={card.image}
            />
            ))}
          </div>
        </div>
        <ImageGallery
            images={classCards.map(card => ({
              src: card.image.url,
              alt: card.image.alternativeText
            }))}
          />
      </div>
    </section>
    )
}