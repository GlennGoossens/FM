export default function HeroComponent() {
  return (
    <section id="hero" className="d-flex align-items-center">
    <div className="container position-relative text-center text-lg-start">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="hero-header">Personal Training<br/><br/> Small Group Personal Training<br/><br/> LESSENREEKSEN<br/><br/></h1>
          <h2 className="hero-subheader">Together to the next level!</h2>

          <div className="btns row flex-column">
            <div className="col-auto">
              <a href="#book-a-session" className="book-a-table-btn animated fadeInUp scrollto">BOEK NU JOUW GRATIS TRY-OUT
                TRAINING</a>
            </div>
            <div className="col-auto mt-3">
              <a href="#aanbod" className="btn-aanbod animated fadeInUp scrollto">Bekijk ons aanbod<i
                  className="bi bi-chevron-down mx-1"></i></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  );
}