import { BannerObject } from "@/lib/types";

export type TopBarProps = {
  banner: BannerObject;
}

export default function TopBarComponent({ banner }: TopBarProps) {
  return (
    <div id="topbar" className="d-flex align-items-center fixed-top">
    <div className="container d-flex justify-content-center justify-content-md-between">

      <div className="contact-info d-flex align-items-center">
        <span>{banner.quote}</span>
        <a><i className="bi bi-envelope d-flex align-items-center ms-4"><span>
              {banner.mail}</span></i></a>
      </div>

      <div className="languages d-none d-md-flex align-items-center">
        {banner.links.map((link) => (
          <a href={link.url} key={link.url}>
            <i className={`bi bi-${link.icon} d-flex align-items-center pl-5`}></i>
          </a>
        ))}
      </div>
    </div>
  </div>
  );
}