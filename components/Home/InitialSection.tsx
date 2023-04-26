import StyledButton from "@/core/components/Button/StyledButton";
import { Chivo_Mono } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Typewriter from "typewriter-effect";
const chivo_mono = Chivo_Mono({ subsets: ["latin"] });

export default function InitialSection() {
  const [isTyping, setIsTyping] = React.useState(true);
  const router = useRouter();

  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1
            className={`${chivo_mono.className} text-4xl font-extrabold tracking-tight text-gray-900 sm:text-7xl`}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Coinvest")
                  .pauseFor(300)
                  .start()
                  .callFunction(() => {
                    setIsTyping(false);
                  });
              }}
              options={
                {
                  // cursor: isTyping ? "|" : "",
                }
              }
            />
          </h1>
          <h2
            className={`${chivo_mono.className} text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl`}
          >
            Elevate Your Crypto Journey.
            <br />
            Join Our Investment Platform Today.
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-600">
            Embark on a rewarding and secure journey into the world of
            cryptocurrencies with our expertly curated investment packages
            tailored to diverse risk preferences and financial goals.
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <StyledButton
              onClick={() => {
                router.push("/investmentPackages/overview");
              }}
            >
              Get Started
            </StyledButton>
            <Link
              href="/investmentPackages/overview"
              className="text-sm font-semibold leading-6 text-gray-900 hover:underline group"
            >
              Explore packages{" "}
              <span
                className="inline-block transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
