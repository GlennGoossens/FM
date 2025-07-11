import GalleryItem from "./gallery-item.component";

export default function GalleryComponent() {
    const galleryImages = [
      "/assets/img/FM-51.jpg",
      "/assets/img/FM-36.jpg",
      "/assets/img/FM-6.jpg",
      "/assets/img/FM-65.jpg",
      "/assets/img/FM-75.jpg",
      "/assets/img/FM-103.jpg",
      "/assets/img/FM-23.jpg",
      "/assets/img/FM-412.jpg",
      "/assets/img/FM-125.jpg",
      "/assets/img/FM-57.jpg",
      "/assets/img/FM-139.jpg",
      "/assets/img/FM-62.jpg"
    ];

    return (
        <section id="gallery" className="gallery">

      <div className="container">
        <div className="section-title">
          <h2>Gallerij</h2>
          <p>Neem een kijkje in onze praktijk</p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row g-0">
          {galleryImages.map((imageSrc, index) => (
            <GalleryItem
              key={index}
              src={imageSrc}
              alt=""
            />
          ))}
        </div>
      </div>
    </section>
    )
}