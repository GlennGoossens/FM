import type { Metadata } from "next";
import TopBarComponent from "@/components/topbar.component";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import HeaderComponent from "@/components/header.component";
import "./globals.css";
import FooterComponent from "@/components/footer.component";

export const metadata: Metadata = {
  title: "Functional Movementz",
  description: "Functional Movementz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>
        <TopBarComponent />
        <HeaderComponent />
        {children}
        <FooterComponent />
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </body>
    </html>
  );
}
