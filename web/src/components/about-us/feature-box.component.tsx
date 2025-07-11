interface FeatureBoxProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureBox({
  number,
  title,
  description,
  className = ""
}: FeatureBoxProps) {
  return (
    <div className={`col-lg-4 ${className}`}>
      <div className="box">
        <span>{number}</span>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
} 