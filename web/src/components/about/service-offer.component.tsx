import Image from "next/image";

interface ServiceOfferProps {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  imageSrc: string;
  imageAlt?: string;
  buttonText: string;
  buttonHref: string;
  reverse?: boolean;
  className?: string;
}

export default function ServiceOffer({
  title,
  firstParagraph,
  secondParagraph,
  imageSrc,
  imageAlt = "",
  buttonText,
  buttonHref,
  reverse = false,
  className = ""
}: ServiceOfferProps) {
  const contentSection = (
    <div className="col-md-12 col-lg-6">
      <h4 className={`aanbod-title ${className}`}>{title}</h4>
      <p className="aanbod-first-p personal-training">
        {firstParagraph}
        <br />
        <br />
      </p>
      <p className="aanbod-second-p">
        {secondParagraph}
      </p>
      <a className="price-btn" href={buttonHref}>
        {buttonText}
      </a>
    </div>
  );

  const imageSection = (
    <div className="col-lg-5 col-md-12 img-item">
      <Image src={imageSrc} alt={imageAlt} className="img-fluid" width={500} height={500} />
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