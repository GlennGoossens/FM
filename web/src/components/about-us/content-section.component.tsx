import { ImageObject } from "@/lib/types";
import { getStrapiMedia } from "@/lib/utils";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

interface ContentSectionProps {
  title: string;
  content: BlocksContent;
  image: ImageObject;
}

export default function ContentSection({
  title,
  content,
  image
}: ContentSectionProps) {
  return (
    <div className="row">
      <div className="col-md-12 col-lg-6">
        <h4 className="text-center">{title}</h4>
        <BlocksRenderer content={content} />
      </div>
      <div className="col-lg-5 col-md-12 img-item">
        <Image src={getStrapiMedia(image.url) ?? ""} alt={image.alternativeText} className="img-fluid" width={500} height={500} />
      </div>
    </div>
  );
} 