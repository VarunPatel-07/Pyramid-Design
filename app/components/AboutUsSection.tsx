"use client";

import AboutUsSectionImage from "@/app/assets/images/about-us-section.png";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { classNames, IsOdd } from "../helper/Helper";

function AboutUsSection() {
  return (
    <div className="w-full h-full py-10 xl:py-37.5">
      <div className="pyramid-design-container gap-10 md:gap-0 flex flex-col md:flex-row items-stretch justify-start ">
        <div className="w-full md:w-1/2">
          <div className="w-full md:max-w-132.5">
            {[
              "Strategy-led design in every detail!",
              "Thought out to the smallest detail",
              "We using top leading design",
            ].map((item, i) => (
              <h2
                key={i}
                className={classNames(
                  "w-full flex items-center xl:gap-10 py-3 gap-4 xl:py-7 font-kaisei-decol capitalize group",
                  {
                    "text-(--color-gold-dark)": IsOdd(i),
                    "text-(--color-text)": !IsOdd(i),
                  }
                )}>
                <HiArrowRight className="min-w-5 min-h-5 lg:min-w-10 lg:min-h-10 xl:min-w-12.5 xl:min-h-12.5 -rotate-45" />
                <span className="text-base md:text-xl lg:text-2xl xl:text-4xl xl:leading-14">{item}</span>
              </h2>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
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
