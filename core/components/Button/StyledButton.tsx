import React from "react";

export default function Button({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-white bg-gray-900 rounded-md p-2 hover:text-gray-900 hover:bg-white hover:border-gray-900 border-2 border-transparent transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
