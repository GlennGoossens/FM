interface ClassCardProps {
  title: string;
  schedule: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function ClassCard({
  title,
  schedule,
  description,
  buttonText = "Schrijf je nu in voor deze groepsles!",
  buttonHref = "#contact"
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
        <a className="classes-btn" href={buttonHref}>{buttonText}</a>
      </div>
    </div>
  );
} 