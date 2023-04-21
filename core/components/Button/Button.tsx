import React from "react";

export default function Button({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`text-white bg-gray-900 rounded-md p-3 hover:text-gray-900 hover:bg-white hover:border-gray-900 border-2 ${className}`}
    >
      {children}
    </button>
  );
}
