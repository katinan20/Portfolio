import React from "react";

interface AtlSocialButtonProps {
  label: string;
  icon: React.ReactNode;
  color: string;
  hoverColor?: string;
  onClick?: () => void;
}

export default function AtlSocialButton({
                                          label,
                                          icon,
                                          color,
                                          hoverColor,
                                          onClick,
                                        }: AtlSocialButtonProps) {
  return (
      <button
          onClick={onClick}
          className={`
        flex items-center gap-2
        px-5 py-2
        rounded-full text-white font-medium
        shadow-md transition-all duration-200
        ${color} ${hoverColor || ""}
        hover:scale-105 active:scale-95
      `}
      >
        <span className="w-5 h-5">{icon}</span>
        {label}
      </button>
  );
}
