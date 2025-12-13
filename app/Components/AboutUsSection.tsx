"use client";

import Image from "next/image";
import AboutUsSectionImage from "@/app/assets/images/about-us-section.png";
import { classNames, IsOdd } from "../Helper/Helper";
import { HiArrowRight } from "react-icons/hi";

function AboutUsSection() {
  return (
    <div className="w-full h-full py-10 xl:py-37.5">
      <div className="pyramid-design-container flex items-stretch justify-start ">
        <div className="w-1/2">
          <div className="w-full max-w-132.5">
            {[
              "Strategy-led design in every detail!",
              "Thought out to the smallest detail",
              "We using top leading design",
            ].map((item, i) => (
              <h2
                key={i}
                className={classNames("w-full flex items-center gap-10 py-7 font-kaisei-decol capitalize group", {
                  "text-(--color-gold-dark)": IsOdd(i),
                  "text-(--color-text)": !IsOdd(i),
                })}>
                <HiArrowRight className="min-w-12.5 min-h-12.5 -rotate-45" />
                <span className="text-4xl leading-14">{item}</span>
              </h2>
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src={AboutUsSectionImage}
            alt="About Us"
            aria-label="About Us"
            width={592}
            height={549.91}
            className="ml-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
