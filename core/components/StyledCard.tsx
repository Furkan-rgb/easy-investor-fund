import React from "react";

export default function StyledCard({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative grid">
      <div className="z-10 p-4 transition bg-white border-2 rounded-sm hover:translate-x-1 hover:-translate-y-1 border-gray-950">
        <div className="z-20 prose">{children}</div>
      </div>
      <div className="absolute inset-0 z-0 w-full h-full bg-black rounded-sm" />
    </div>
  );
}
