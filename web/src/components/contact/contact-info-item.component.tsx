interface ContactInfoItemProps {
  icon: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function ContactInfoItem({
  icon,
  title,
  children,
  className = ""
}: ContactInfoItemProps) {
  return (
    <div className={className}>
      <i className={icon}></i>
      <h4>{title}</h4>
      {children}
    </div>
  );
} 