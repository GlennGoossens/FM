import Image from "next/image";

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt?: string;
  }>;
  className?: string;
}

export default function ImageGallery({ images, className = "" }: ImageGalleryProps) {
  return (
    <div className={`row ${className}`}>
      {images.map((image, index) => (
        <div key={index} className="col-lg-4 mt-4 mt-lg-0">
          <Image 
            src={image.src} 
            alt={image.alt || ""} 
            className="img-fluid" 
            width={500} 
            height={500} 
          />
        </div>
      ))}
    </div>
  );
} 