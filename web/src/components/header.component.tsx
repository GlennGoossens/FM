import { getStrapiMedia } from "@/lib/utils";
import Image from "next/image";
import { ImageObject, ButtonObject } from "@/lib/types";

export type HeaderProps = {
  logo: ImageObject;
  cta: ButtonObject;
  currentPath?: string;
  navigation?: any[];
}

export default function HeaderComponent({ logo, cta, currentPath = "/", navigation = [] }: HeaderProps) {
  const logoUrl = getStrapiMedia(logo.url) ?? "";

  // Helper function to check if a navigation item is active
  const isActive = (uiRouterKey: string) => {
    if (uiRouterKey === 'home') {
      return currentPath === '/' || currentPath.includes(uiRouterKey);
    }
    return currentPath.includes(uiRouterKey);
  };

  return (
    <header id="header" className="fixed-top d-flex align-items-cente">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

      <a href="/" className="logo me-auto me-lg-0">
        {logoUrl && <Image src={logoUrl} alt="Functional Movementz Logo" width={60} height={57} />}
      </a>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          {navigation.map((item: any) => {
            const activeClass = isActive(item.uiRouterKey) ? ' active' : '';
            
            return (
            <li key={item.id}>
              <a className={`nav-link scrollto${activeClass}`} href={`/${item.uiRouterKey}`}>{item.title}</a>
            </li>
          )})}
          {/*
          <li><a className="nav-link scrollto active" href="/">HOME</a></li>
          <li><a className="nav-link scrollto" href="#aanbod">AANBOD</a></li>
          <li><a className="nav-link scrollto" href="pages/tarieven.html">TARIEVEN</a></li>
          <li><a className="nav-link scrollto" href="#overons">OVER ONS</a></li>
          <li><a className="nav-link scrollto" href="#contact">CONTACT</a></li>
          */}
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <a href={cta.url} className="book-a-table-btn scrollto d-none d-lg-flex">{cta.text}</a>

    </div>
  </header>
  );
}