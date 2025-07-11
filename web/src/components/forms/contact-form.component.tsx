export default function ContactFormComponent() {
    return (
        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Naam" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Onderwerp" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows={8} placeholder="Bericht" required/>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="privacy" id="privacy" required/>
                <label className="form-check-label" htmlFor="privacy">
                  Jouw gegevens worden uitsluitend gebruikt voor het beantwoorden van uw aanvraag.
                </label>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Verzend</button></div>
            </form>
    )
}