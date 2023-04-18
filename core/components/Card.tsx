import React from "react";

export default function Card({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`p-4 bg-white border-2 border-gray-900 rounded-sm ${className}`}>
      {children}
    </div>
  );
}
