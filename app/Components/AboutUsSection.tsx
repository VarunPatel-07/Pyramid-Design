"use client";

import Image from "next/image";
import AboutUsSectionImage from "@/app/assets/images/about-us-section.png";
import { classNames, IsOdd } from "../Helper/Helper";
import { HiArrowRight } from "react-icons/hi";

function AboutUsSection() {
  return (
    <div className="w-full h-full my-10 xl:my-[100px]">
      <div className="pyramid-design-container flex items-stretch justify-start ">
        <div className="w-1/2">
          <div className="w-full max-w-[530px]">
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
                <HiArrowRight className="min-w-[50px] min-h-[50px] -rotate-45" />
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
