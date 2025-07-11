import Image from "next/image";
import ServiceOffer from "./service-offer.component";
import ClassCard from "./class-card.component";
import ImageGallery from "./image-gallery.component";

export default function AboutComponent() {
    return (
        <section id="aanbod" className="why-us">
      <div className="container">

        <div className="section-title">
          <h2>Aanbod</h2>
        </div>

        <ServiceOffer
          title="Personal Training"
          firstParagraph="Ben je op zoek naar een training aangepast aan jouw specifiek doel? Dan is een-op-een Personal Training de beste aanpak voor jou!"
          secondParagraph="Bij een-op-een Personal Training gaan we heel persoonlijk en doelgericht aan het werk. Op basis van jouw doel stellen we een doordacht en systematisch trainingsschema op. De trainingen gebeuren via gediplomeerde begeleiding, zijn op maat gemaakt en variëren van week tot week.\n\nHeb jij zin om je limieten op te zoeken en snel progressie te maken? Bekijk snel onze tarieven en vraag jouw gratis try-out training aan."
          imageSrc="/assets/img/FM-137.jpg"
          buttonText="TARIEVEN"
          buttonHref="pages/tarieven.html#personaltraining"
          reverse={true}
        />

        <div className="row">
          <div className="col-12">
            <h4 className="aanbod-title small-group-training">Small group personal training</h4>
          </div>
          <div className="col-lg-5 col-md-12 img-item mt-5">
            <Image src="/assets/img/FM-83 geknipt.jpg" alt="" className="img-fluid mt-4" width={500} height={500} />
          </div>
          <div className="col-md-12 col-lg-6">
            <p className="aanbod-first-p personal-training">
              Wil je samen met je vriend(inn)en sporten onder persoonlijke begeleiding? Of ben je op zoek naar een
              sportieve date met je partner? Dan is Small Group Personal Training de juiste formule voor jou!
              <br/>
              <br/>
            </p>
            <p className="aanbod-second-p">
              Bij Small Group Personal Training werken we nog steeds doelgericht, en op maat gemaakt. Het is dus perfect
              mogelijk dat jullie als sportgenoten verschillende doelstellingen vooropstellen. Onze personal trainer zal
              er dan ook voor zorgen dat jullie samen jullie bewegings- en levenskwaliteit naar een hoger niveau tillen.
              Minigames en challenges zullen bovendien jullie band nog sterker maken en plaatsmaken voor groepsuitdaging
              en plezier.
              <br/>
              <br/>
              Heb jij zin om het competitiebeest in jou naar boven te halen, veel te zweten en een flinke portie
              uitdaging aan te gaan? Stel een groepje samen en vraag jullie gratis try-out training aan.
              <br/>
              <br/>
              (maximaal 4 personen per groep)
            </p>
            <a className="price-btn" href="pages/tarieven.html#smallgroup">
              TARIEVEN
            </a>
          </div>
        </div>

        <div className="row justify-content-between">
          <div className="col-md-12 col-lg-6">
            <h4 className="aanbod-title groupclass">LESSENREEKSEN</h4>
            <p className="aanbod-first-p personal-training">
              Heb je wat moeite met het lang volhouden van sporten? Kom dan alles geven in onze groepslessen! Niets is
              motiverender dan like-minded sportievelingen die elkaar naar het hoogste niveau tillen in groepslessen.
              Wat mag je hiervan verwachten?
            </p>
            <ul>
              <li>
                Kwalitatieve begeleiding: onze personal trainer zal jou nog steeds door de training loodsen.
              </li>
              <li>Kleine groepen: er kunnen max. 4 personen deelnemen zodat kwalitatieve begeleiding gegarandeerd
                blijft. Bovendien is het bewezen dat sporten volhouden het best lukt als je het in groep doet.
              </li>
              <li>Afzien op een leuke manier: sporten in groep en onder begeleiding? Dat is dubbel zoveel plezier!
              </li>
              <li>10 weken, 10 trainingen, 1 training per week</li>
            </ul>
            <p className="aanbod-second-p">
              Onze groepslessen vinden plaats na de werkuren. Het ideale moment dus om je werkdag mee af te sluiten, en
              je avond of je weekend te starten met wat actieve ontspanning.
            </p>
            <a className="price-btn" href="pages/tarieven.html#groepslessen">
              TARIEVEN
            </a>
          </div>
          <div className="col-lg-5 col-md-12 img-item">
            <Image src="/assets/img/FM-96 geknipt.jpg" alt="" className="img-fluid" width={500} height={500} />
          </div>
          
          <div className="col-12 mt-5">
            <h4 className="aanbod-title text-center">SCHRIJF JE NU IN!</h4>
          </div>
          
          <div className="col-12 row">
            <ClassCard
              title="START 2 BOKS"
              schedule="MAANDAG (19u30 - 20u30)"
              description="Wil je de kneepjes van het boksen leren? In deze reeks krijg je een stevige basis van techniek, uithouding en ritme. Toegankelijk én uitdagend!"
            />

            <ClassCard
              title="FUNCTIONELE KRACHT"
              schedule="DINSDAG (20u30 - 21u30)"
              description="Een total body workout waarbij je aan de slag gaat met mobiliteit, kracht, core en cardio. Verwacht een stevige, maar functionele training voor het hele lichaam!"
            />

            <ClassCard
              title="COREFIT"
              schedule="ZATERDAG (10u30 - 11u30)"
              description="We starten met 30' intensieve corestability training in alle aspecten. Daarna volgt 30' afwisseling: van HITT tot circuit, van CrossFit tot Hyrox. Geen enkele week is dezelfde!"
            />
          </div>

          <ImageGallery
            images={[
              { src: "/assets/img/FM-62.jpg" },
              { src: "/assets/img/FM-126.jpg" },
              { src: "/assets/img/FM-243.jpg" }
            ]}
          />
        </div>

      </div>
    </section>
    )
}