import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`px-4 py-2 bg-accent max-w-max rounded-full font-medium ${className}`}
    >
      {children}
    </div >
  )
}

export default Badge;
