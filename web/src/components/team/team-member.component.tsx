import Image from "next/image";
import { ImageObject } from "@/lib/types";
import { getStrapiMedia } from "@/lib/utils";

export interface TeamMemberProps {
  image: ImageObject;
  name: string;
  jobTitle: string;
  description: string;
  delay?: number;
}

export default function TeamMember({
  image,
  name,
  jobTitle,
  description,
  delay = 100
}: TeamMemberProps) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="member" data-aos="zoom-in" data-aos-delay={delay}>
        <Image src={getStrapiMedia(image.url) ?? ""} className="img-fluid" alt={image.alternativeText ?? ""} width={400} height={400} />
        <div className="member-info">
          <div className="member-info-content">
            <h4>{name}</h4>
            <span>{jobTitle}</span>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 