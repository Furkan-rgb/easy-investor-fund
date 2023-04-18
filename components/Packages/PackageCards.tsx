import StyledCard from "@/core/components/StyledCard";
import { Chivo_Mono } from "next/font/google";
import React from "react";
const chivo = Chivo_Mono({ subsets: ["latin"] });

export default function PackageCards() {
  return (
    <div className="flex flex-row justify-center w-full gap-10 p-4">
      <StyledCard>
        <h1 className={chivo.className}>Chivo test lorem ipsum</h1>
      </StyledCard>
      <StyledCard>
        <div className="w-full h-full text-center ">
          <h1 className={`${chivo.className} text-xl`}>Chivo test lorem ipsum</h1>
          <p className={`${chivo.className}`}>Chivo test lorem ipsum dolor bla bla</p>
        </div>
      </StyledCard>
      <StyledCard>
        <h1 className={chivo.className}>Chivo test lorem ipsum</h1>
      </StyledCard>
    </div>
  );
}
