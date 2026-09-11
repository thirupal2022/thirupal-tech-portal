import React from "react";

type Props = {
  text?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
};

const AnnouncementBadge: React.FC<Props> = ({ text = "New Update", icon = "✨", onClick, className = "", ariaLabel }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold shadow-sm hover:bg-amber-200 cursor-pointer animate-pulse ${className}`}
      aria-label={ariaLabel || text}
    >
      <span className="text-lg">{icon}</span>
      <span>{text}</span>
    </button>
  );
};

export default AnnouncementBadge;
