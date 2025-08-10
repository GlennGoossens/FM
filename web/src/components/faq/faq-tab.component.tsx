interface FaqTabProps {
  id: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function FaqTab({
  id,
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
        {label}
      </button>
    </li>
  );
} 