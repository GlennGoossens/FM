import ContactFormComponent from "../forms/contact-form.component";
import ContactInfoItem from "./contact-info-item.component";

export default function ContactComponent() {
    return (
        <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Contacteer ons</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <p className="text-center">De studio bevindt zich op een toplocatie in hartje Zottegem en is enkel op afspraak
            toegankelijk voor sporters.</p>
        </div>
      </div>

      <div>
        <iframe style={{border:0, width: "100%", height: "350px"}}
          src="https://www.google.com/maps/embed/v1/place?q=Functional+MovementZ,+Sint-Andriessteenweg,+Zottegem,+Belgium&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          frameBorder="0" allowFullScreen/>
      </div>

      <div className="container">

        <div className="row mt-5">

          <div className="col-lg-4 col-12">
            <div className="info">
              <ContactInfoItem
                icon="bi bi-geo-alt"
                title="Locatie"
                className="address"
              >
                <p>Functional MovementZ bevindt zich in de zaal van LevelZ. Rij de parking van Aldi Zottegem op, en rij door naar de zijkant. Dan kom je uit op de ingang.</p>
                <br/>
                <p>Vandendriesschestraat 7, 9620 Zottegem</p>
              </ContactInfoItem>

              <ContactInfoItem
                icon="bi bi-clock"
                title="Openingsuren"
                className="open-hours"
              >
                <p>
                  Maandag – Donderdag: 06:00 – 23:00<br/>
                  Vrijdag: 08:00 – 18:00 <br/>
                  Zaterdag: 09:00 – 14:00
                </p>
              </ContactInfoItem>

              <ContactInfoItem
                icon="bi bi-envelope"
                title="Email"
                className="email"
              >
                <p><a href="mailto:info@functionalmovementz.be">info@functionalmovementz.be</a></p>
              </ContactInfoItem>

              <ContactInfoItem
                icon="bi bi-phone"
                title="WhatsApp"
                className="phone"
              >
                <p><a href="tel:0472245175">+32 472 24 51 75</a></p>
              </ContactInfoItem>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

            <ContactFormComponent />

          </div>

        </div>

      </div>
    </section>
    )
}