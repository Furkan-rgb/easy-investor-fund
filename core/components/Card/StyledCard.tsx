import React from "react";

export default function StyledCard({
  children,
  inView,
}: {
  children?: React.ReactNode;
  inView?: boolean;
}) {
  return (
    <div className="relative grid">
      <div
        className={`${
          inView ? "-translate-y-1 translate-x-1" : ""
        } z-10 p-4 transition bg-white border-2 rounded-sm sm:transform-none sm:hover:translate-x-1 sm:hover:-translate-y-1 border-gray-950`}
      >
        <div className="z-20 prose">{children}</div>
      </div>
      <div className="absolute inset-0 z-0 w-full h-full bg-gray-800 rounded-sm" />
    </div>
  );
}
