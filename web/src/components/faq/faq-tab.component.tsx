interface FaqTabProps {
  id: string;
  icon: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function FaqTab({
  id,
  icon,
  label,
  isActive = false,
  onClick
}: FaqTabProps) {
  return (
    <li className="nav-item" role="presentation">
      <button 
        className={`nav-link ${isActive ? 'active' : ''}`} 
        id={`${id}-tab`} 
        data-bs-toggle="pill" 
        data-bs-target={`#faq-${id}`} 
        type="button" 
        role="tab" 
        aria-controls={id} 
        aria-selected={isActive}
        onClick={onClick}
      >
        <i className={`${icon} me-2`}></i>{label}
      </button>
    </li>
  );
} 