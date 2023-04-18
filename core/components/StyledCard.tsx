import React from "react";
import Card from "./Card";

export default function StyledCard({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative grid">
      <Card className="z-10 transition hover:translate-x-0.5 hover:-translate-y-0.5">
        <div className="z-20 prose">{children}</div>
      </Card>
      <Card className="absolute inset-0 z-0 w-full h-full bg-black" />
    </div>
  );
}
