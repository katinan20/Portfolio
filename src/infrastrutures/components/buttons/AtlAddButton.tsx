interface AtlAddButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export default function AtlAddButton({label, onClick, className}: AtlAddButtonProps) {
  return (
      <button
          onClick={onClick}
          className={`
        flex items-center gap-2
        px-4 py-2
        bg-blue-600 hover:bg-blue-700
        text-white font-medium
        rounded-xl shadow-md
        transition-all duration-200 ease-in-out
        hover:shadow-lg active:scale-95
        ${className || ""}
      `}
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
        </svg>
        {label}
      </button>
  );
}
