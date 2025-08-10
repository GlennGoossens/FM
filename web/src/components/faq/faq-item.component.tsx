import { useState } from "react";

export interface FaqItemProps {
  number: number;
  question: string;
  answer: string | string[];
  category: string;
  delay?: number;
}

export default function FaqItem({
  number,
  question,
  answer,
  category,
  delay = 200 
}: FaqItemProps) {
  const [open, setOpen] = useState(false);

  const renderAnswer = () => {
    if (Array.isArray(answer)) {
      return answer.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ));
    }
    return <p>{answer}</p>;
  };

  return (
    <div className="faq-item" data-aos="fade-up" data-aos-delay={delay}>
      <h3 onClick={() => setOpen((prev) => !prev)} style={{ cursor: "pointer" }}>
        <span className="num">{number}</span>
        <span className="question">{question}</span>
        <i className={`bi faq-toggle ${open ? "bi-dash-lg" : "bi-plus-lg"}`}></i>
      </h3>
      <div className="faq-content" style={{ display: open ? "block" : "none" }}>
        {renderAnswer()}
      </div>
    </div>
  );
} 