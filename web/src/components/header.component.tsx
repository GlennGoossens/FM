import Image from "next/image";

export default function HeaderComponent() {
  return (
    <header id="header" className="fixed-top d-flex align-items-cente">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

      <a href="index.html" className="logo me-auto me-lg-0">
        <Image src="/assets/img/FM_logo_nobg.png" alt="Functional Movementz Logo" width={60} height={57} />
      </a>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">HOME</a></li>
          <li><a className="nav-link scrollto" href="#aanbod">AANBOD</a></li>
          <li><a className="nav-link scrollto" href="pages/tarieven.html">TARIEVEN</a></li>
          <li><a className="nav-link scrollto" href="#overons">OVER ONS</a></li>
          <li><a className="nav-link scrollto" href="#contact">CONTACT</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <a href="#book-a-session" className="book-a-table-btn scrollto d-none d-lg-flex">Gratis Try-out training</a>

    </div>
  </header>
  );
}