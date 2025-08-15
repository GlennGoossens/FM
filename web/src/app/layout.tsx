import type { Metadata } from "next";
import TopBarComponent from "@/components/topbar.component";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import HeaderWrapper from "@/components/header-wrapper.component";
import "./globals.css";
import FooterComponent from "@/components/footer.component";
import { loadGlobalData } from "@/content/global-loader";

export const metadata: Metadata = {
  title: "Functional Movementz",
  description: "Functional Movementz",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const globalData = await loadGlobalData();

  return (
    <html lang="nl">
      <body>
        <TopBarComponent banner={globalData.data.banner} />
        <HeaderWrapper logo={globalData.data.logo} cta={globalData.data.cta} />
        {children}
        <FooterComponent />
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </body>
    </html>
  );
}
