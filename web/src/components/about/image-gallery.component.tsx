import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt?: string;
  }>;
  className?: string;
}

export default function ImageGallery({ images, className = "" }: ImageGalleryProps) {
  const imageUrls = images.map(image => getStrapiMedia(image.src));
  return (
    <div className={`row ${className}`}>
      {imageUrls.map((imageUrl, index) => (
        <div key={index} className="col-lg-4 mt-4 mt-lg-0">
          <Image 
            src={imageUrl ?? ""} 
            alt={images[index].alt || ""} 
            className="img-fluid" 
            width={500} 
            height={500} 
          />
        </div>
      ))}
    </div>
  );
} 