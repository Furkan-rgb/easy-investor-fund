import Button from "@/core/components/Button/Button";
import StyledCard from "@/core/components/Card/StyledCard";
import { Chivo_Mono, Chivo } from "next/font/google";
import React, { useEffect, useRef } from "react";
const chivo_mono = Chivo_Mono({ subsets: ["latin"] });
const chivo = Chivo({ subsets: ["latin"] });
import { useInView } from "framer-motion";

export default function PackageCards({
  investmentPackage,
}: {
  investmentPackage: any;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all", margin: "0px" });
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <div className="flex flex-col justify-center w-full gap-10 p-4 text-center sm:flex-row">
      <StyledCard inView={isInView} key={investmentPackage.id}>
        <div
          ref={ref}
          className="flex flex-col items-stretch justify-between gap-5"
        >
          {/* Title */}
          <h1 className={`${chivo_mono.className} text-xl font-bold`}>
            {investmentPackage.name}
          </h1>
          {/* Subtitle */}
          <h2 className={`${chivo_mono.className} text-base font-light`}>
            {investmentPackage.riskLevel}
          </h2>
          {/* Description */}
          <p className={`${chivo.className} text-left mt-3 font-light`}>
            {investmentPackage.description}
          </p>
          {/* Key Features */}
          <ul className="mt-3 text-left">
            {investmentPackage.keyFeatures.map((feature: any) => (
              <li key={feature} className={`${chivo_mono.className}`}>
                • {feature}
              </li>
            ))}
          </ul>
          <Button className="mt-3">Learn More</Button>
        </div>
      </StyledCard>
    </div>
  );
}
