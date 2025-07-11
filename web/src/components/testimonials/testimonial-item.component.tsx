interface TestimonialItemProps {
  text: string;
  name: string;
  date: string;
  rating: number; // 1-5 stars
}

export default function TestimonialItem({
  text,
  name,
  date,
  rating
}: TestimonialItemProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={`bi bi-star${i <= rating ? '-fill' : ''}`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="swiper-slide">
      <div className="testimonial-item">
        <div>
          <div className="testimonial-star-container">
            {renderStars(rating)}
          </div>
          <p className="testimonial-text">
            {text}
          </p>
          <h3 className="testimonial-name">{name}</h3>
          <p className="testimonial-date">{date}</p>
        </div>
      </div>
    </div>
  );
} 