import Image from "next/image";

interface GalleryItemProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function GalleryItem({
  src,
  alt = "",
  className = ""
}: GalleryItemProps) {
  return (
    <div className={`col-lg-3 col-md-4 ${className}`}>
      <div className="gallery-item">
        <a href={src} className="gallery-lightbox" data-gall="gallery-item">
          <Image 
            src={src} 
            alt={alt} 
            className="img-fluid"
            width={400}
            height={300}
            style={{ width: "25vw", height: "auto" }}
          />
        </a>
      </div>
    </div>
  );
} 