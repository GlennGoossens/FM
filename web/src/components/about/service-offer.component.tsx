import Image from "next/image";
import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";
import { ImageObject } from "@/lib/types";
import { ButtonObject } from "@/lib/types";
import { getStrapiMedia } from "@/lib/utils";

export interface ServiceOfferProps {
  title: string;
  content: BlocksContent;
  image: ImageObject;
  button: ButtonObject;
  reverse?: boolean;
}

export default function ServiceOffer({
  title,
  content,
  image,
  button,
  reverse = false
}: ServiceOfferProps) {
  const imageUrl = getStrapiMedia(image.url) ?? "";
  const contentSection = (
    <div className="col-md-12 col-lg-6">
      <h4 className={`aanbod-title`}>{title}</h4>
      <p className="aanbod-content">
        <BlocksRenderer content={content} />
      </p>
      <a className="price-btn" href={button.url}>
        {button.text}
      </a>
    </div>
  );

  const imageSection = (
    <div className="col-lg-5 col-md-12 img-item">
      <Image src={imageUrl} alt={image.alternativeText} className="img-fluid" width={image.width} height={image.height} />
    </div>
  );

  return (
    <div className={`row ${reverse ? 'reverse' : ''}`}>
      {reverse ? (
        <>
          {contentSection}
          {imageSection}
        </>
      ) : (
        <>
          {imageSection}
          {contentSection}
        </>
      )}
    </div>
  );
} 