import { ButtonObject, ImageObject } from "@/lib/types";

export interface ClassCardProps {
  title: string;
  schedule: string;
  description: string;
  button: ButtonObject;
  image: ImageObject;
}

export default function ClassCard({
  title,
  schedule,
  description,
  button
}: ClassCardProps) {
  return (
    <div className="col-lg-4">
      <div className="box">
        <h4 className="text-center">{title}</h4>
        <p className="text-center">
          <span className="emoji-calendar" role="img" aria-label="calendar">&#128197;</span>
          {schedule}
          <br />
          <br />
          {description}
        </p>
        <a className="classes-btn" href={button.url}>{button.text}</a>
      </div>
    </div>
  );
} 