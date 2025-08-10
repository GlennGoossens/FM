export interface FeatureBoxProps {
  number: number;
  title: string;
  text: string;
}

export default function FeatureBox({
  number,
  title,
  text
}: FeatureBoxProps) {
  const className = number > 3 ? "mt-5" : "";
  return (
    <div className={`col-lg-4 ${className}`}>
      <div className="box">
        <span>{number.toString().padStart(2, "0")}</span>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
} 