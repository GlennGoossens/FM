import { PricingBlock } from "@/lib/types";
import Image from "next/image";

export const PricingComponent = (props: PricingBlock) => {
    const { title, subtitle, groups } = props;
    return (
        <section id="prijzen" className="pricing section-bg">
      <div className="container">

        <div className="section-title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        {groups.map((group, groupIdx) => (
          <div
            className={`row${group.className ? " " + group.className : ""}${group.id ? "" : ""}`}
            id={group.id || undefined}
            key={group.id || groupIdx}
          >
            {group.title && (
              <h4 className="text-center">{group.title}</h4>
            )}
            {group.description && (
              <div className="mt-4 text-center">
                <p className="text-center">{group.description}</p>
              </div>
            )}
            {group.items && group.items.map((item, itemIdx) => (
              <div className="col-lg-4" key={item.id || itemIdx}>
                <div className="row">
                  <div className="col-12">
                    <div className="pricing-item">
                      {item.title && <h3>{item.title}</h3>}
                      {item.price && (
                        <h4>
                          <sup>€</sup>
                          {item.price}
                          {item.priceSuffix && <span>{item.priceSuffix}</span>}
                        </h4>
                      )}
                      {item.description && <p>{item.description}</p>}
                      {item.button && (
                        <a
                          href={item.button.url}
                          className="buy-btn"
                          target={item.button.target || undefined}
                          rel={item.button.target === "_blank" ? "noopener noreferrer" : undefined}
                        >
                          {item.button.text}
                        </a>
                      )}
                    </div>
                  </div>
                  {item.image && (
                    <div className={`col-12 mt-2${item.hideImageOnMobile ? " display-none" : ""}`}>
                      <Image
                        src={item.image.url}
                        alt={item.image.alternativeText || ""}
                        className="img-fluid rounded"
                        width={item.image.width || 400}
                        height={item.image.height || 300}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}

      </div>
    </section>
    )
}