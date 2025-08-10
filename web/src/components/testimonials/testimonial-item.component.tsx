export interface TestimonialItemProps {
  text: string;
  name: string;
  date: string;
  stars: number; // 1-5 stars
}

export default function TestimonialItem({
  text,
  name,
  date,
  stars
}: TestimonialItemProps) {
  const renderStars = (stars: number) => {
    const starElements = [];
    for (let i = 1; i <= 5; i++) {
      starElements.push(
        <i 
          key={i} 
          className={`bi bi-star${i <= stars ? '-fill' : ''}`}
        ></i>
      );
    }
    return starElements;
  };

  const dateObject = new Date(date);
  const month = dateObject.toLocaleString('nl-NL', { month: 'long' });
  const year = dateObject.getFullYear();

  return (
    <div className="swiper-slide">
      <div className="testimonial-item">
        <div>
          <div className="testimonial-star-container">
            {renderStars(stars)}
          </div>
          <p className="testimonial-text">
            {text}
          </p>
          <h3 className="testimonial-name">{name}</h3>
          <p className="testimonial-date">{month}, {year}</p>
        </div>
      </div>
    </div>
  );
} 