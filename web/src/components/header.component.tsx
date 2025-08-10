import { getStrapiMedia } from "@/lib/utils";
import Image from "next/image";
import { ImageObject, ButtonObject } from "@/lib/types";

export type HeaderProps = {
  logo: ImageObject;
  cta: ButtonObject;
}

export default function HeaderComponent({ logo, cta }: HeaderProps) {
  const logoUrl = getStrapiMedia(logo.url) ?? "";

  return (
    <header id="header" className="fixed-top d-flex align-items-cente">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

      <a href="index.html" className="logo me-auto me-lg-0">
        {logoUrl && <Image src={logoUrl} alt="Functional Movementz Logo" width={60} height={57} />}
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
      <a href={cta.url} className="book-a-table-btn scrollto d-none d-lg-flex">{cta.text}</a>

    </div>
  </header>
  );
}