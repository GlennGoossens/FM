import { getStrapiMedia } from "@/lib/utils";
import { ImageObject, LinkObject } from "@/lib/types";
import Image from "next/image";

export interface PricingGroupProps {
  title: string;
  subtitle: string;
  items: PricingItemProps[];
  id?: string;
}

export interface PricingItemProps {
    title: string;
    price: number;
    link: LinkObject;
    image: ImageObject;
    priceGroup: string;
    description: string;
}

export default function PricingGroupComponent(props: PricingGroupProps) {
  const { title, subtitle, items } = props;

  return (
    <div className="row" id={`${title.toLowerCase().replace(/ /g, "-")}`}>
          <h4 className="text-center">{title}</h4>
          <div className="mt-4 text-center">
            <p className="text-center">
              <b>{subtitle}</b>
            </p>
          </div>
          {items.map((item, itemIdx) => (
          <div className="col-lg-4" key={itemIdx}>
            <div className="row">
              <div className="col-12">
                <div className="pricing-item">
                  <h3>{item.title}</h3>
                  <h4><sup>€</sup>{item.price}<span> {item.priceGroup}</span></h4>
                  <p>{item.description}</p>
                  <a href={item.link.url} className="buy-btn">{item.link.text}</a>
                </div>
              </div>
              <div className="col-12 mt-2 display-none">
                <Image src={getStrapiMedia(item.image.url) ?? ""} alt={title + " " + item.title} className="img-fluid rounded" width={item.image.width} height={item.image.height}  />
              </div>
            </div>

          </div>
        ))}
        </div>
  );
};