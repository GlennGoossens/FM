import Image from "next/image";

interface TeamMemberProps {
  src: string;
  alt?: string;
  name: string;
  role: string;
  description: string;
  delay?: number;
}

export default function TeamMember({
  src,
  alt = "",
  name,
  role,
  description,
  delay = 100
}: TeamMemberProps) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="member" data-aos="zoom-in" data-aos-delay={delay}>
        <Image src={src} className="img-fluid" alt={alt} width={400} height={400} />
        <div className="member-info">
          <div className="member-info-content">
            <h4>{name}</h4>
            <span>{role}</span>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 