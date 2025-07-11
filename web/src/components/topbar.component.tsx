export default function TopBarComponent() {
  return (
    <div id="topbar" className="d-flex align-items-center fixed-top">
    <div className="container d-flex justify-content-center justify-content-md-between">

      <div className="contact-info d-flex align-items-center">
        <span>Together to the next level!</span>
        <a><i className="bi bi-envelope d-flex align-items-center ms-4"><span>
              info@functionalmovementz.be</span></i></a>
      </div>

      <div className="languages d-none d-md-flex align-items-center">
        <a href="https://www.facebook.com/functionalmovementzottegem"><i
            className="bi bi-facebook d-flex align-items-center"></i></a>
        <a href="https://www.instagram.com/functional_movementz"><i
            className="bi bi-instagram d-flex align-items-center ms-4"></i></a>
      </div>
    </div>
  </div>
  );
}