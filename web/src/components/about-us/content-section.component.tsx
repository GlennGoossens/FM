import Image from "next/image";

interface ContentSectionProps {
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt?: string;
}

export default function ContentSection({
  title,
  paragraphs,
  imageSrc,
  imageAlt = ""
}: ContentSectionProps) {
  return (
    <div className="row">
      <div className="col-md-12 col-lg-6">
        <h4 className="text-center">{title}</h4>
        {paragraphs.map((paragraph, index) => (
          <div key={index}>
            <p className={index === 0 ? "aanbod-first-p personal-training" : " aanbod-second-p personal-training"}>
              {paragraph}
            </p>
            {index < paragraphs.length - 1 && <br />}
          </div>
        ))}
      </div>
      <div className="col-lg-5 col-md-12 img-item">
        <Image src={imageSrc} alt={imageAlt} className="img-fluid" width={500} height={500} />
      </div>
    </div>
  );
} 