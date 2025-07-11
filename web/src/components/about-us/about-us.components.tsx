import FeatureBox from "./feature-box.component";
import ContentSection from "./content-section.component";

export default function AboutUsComponent() {
    return (
        <section id="overons" className="why-us">
      <div className="container">

        <div className="section-title">
          <h2>Over ons</h2>
        </div>

        <div className="container">
          <ContentSection
            title="Over Ons"
            paragraphs={[
              "Bij Functional MovementZ ligt de focus voornamelijk op Personal Training en Small Group Personal Training, met een beperkt aanbod van groepslessen.",
              "We stellen realistische doelstellingen op die we bereiken aan de hand van persoonlijke begeleiding en een op maat uitgewerkt schema. Dit is ook meteen wat ons onderscheidt van grote fitnesscentra.",
              "Verder focussen we ons op kwaliteit en efficiëntie. Het stereotype beeld van uitbundig zweten en zware gewichten heffen staat niet centraal.",
              "Aangezien het lichaam complex in elkaar zit, focust Functional MovementZ zich echt wel op het aanleren van de juiste techniek en sturen we iedere training bij. Verder zijn core stabiliteit en lichaamsmobiliteit de basis van elke training."
            ]}
            imageSrc="/assets/img/FM-76-geknipt.jpg"
          />

          <div className="row justify-content-around">
            <div className="col-12">
              <p className="text-center my-4 more-pt">MEER DAN PERSONAL TRAINING</p>
            </div>
            
            <FeatureBox
              number="01"
              title="Kwaliteit staat op nummer 1"
              description="Al onze trainingen worden gegeven door een gediplomeerde trainer die samen met jou een realistisch doel zal nastreven."
            />

            <FeatureBox
              number="02"
              title="Persoonlijke begeleiding"
              description="Onze personal trainer zal je iedere training opnieuw aanmoedigen en bijsturen waar nodig zodat je een juiste sporttechniek aangeleerd krijgt."
              className="mt-5 mt-lg-0"
            />

            <FeatureBox
              number="03"
              title="We put the fun in FUNctional MovementZ"
              description="Bij ons wordt plezier gekoppeld aan progressie."
              className="mt-5 mt-lg-0"
            />
          </div>
          
          <div className="row mt-5">
            <FeatureBox
              number="04"
              title="Uitdaging op ieders niveau"
              description="De grens is voor iedere sporter anders. Onze trainer zal er daarom elke training voor zorgen dat de juiste grens wordt opgezocht."
            />

            <FeatureBox
              number="05"
              title="Leer pijnvrij bewegen"
              description="Iedere training opnieuw wordt er gestreefd naar pijnloos bewegen door het aanleren van de juiste techniek."
              className="mt-5 mt-lg-0"
            />

            <FeatureBox
              number="06"
              title="Train in alle rust en privé"
              description="Onze studio is enkel op afspraak toegankelijk voor sporters. Overvolle fitnesscentra kom je bij ons dus niet tegen. Wie alleen wenst te sporten zal namelijk de volledige zaal ter beschikking hebben."
              className="mt-5 mt-lg-0"
            />
          </div>
        </div>

      </div>
    </section>
    )
}