import React from "react";
import { OurCoreValuesArrayInterface } from "../Interface/Interface";
import { RiPaintBrushFill, RiShieldCheckFill } from "react-icons/ri";
import { GoLightBulb, GoPeople, GoTrophy } from "react-icons/go";
import { FaCanadianMapleLeaf } from "react-icons/fa6";
const OurCoreValuesArray: OurCoreValuesArrayInterface[] = [
  {
    icon: <GoLightBulb />,
    title: "Innovation",
    description:
      "We embrace cutting-edge design thinking and technology to create spaces that are ahead of their time.",
  },
  {
    icon: <GoTrophy />,
    title: "Excellence",
    description:
      "Quality is non-negotiable. Every project receives our unwavering attention to detail and craftsmanship.",
  },
  {
    icon: <GoPeople />,
    title: "Collaboration",
    description:
      "We work closely with clients, understanding their vision and bringing it to life through partnership.",
  },
  {
    icon: <FaCanadianMapleLeaf />,
    title: "Sustainability",
    description: "We design with the environment in mind, creating eco-friendly spaces for a better tomorrow.",
  },
  {
    icon: <RiPaintBrushFill />,
    title: "Creativity",
    description: "We think outside the box, delivering unique solutions that challenge conventional design.",
  },
  {
    icon: <RiShieldCheckFill />,
    title: "Integrity",
    description: "Transparency, honesty, and ethical practices guide everything we do.",
  },
];
function OurCoreValues() {
  return (
    <div className="w-full pb-10 md:pb-18.75 xl:pb-37.5">
      <div className="pyramid-design-container">
        <div className="w-full pb-16">
          <h2 className="font-kaisei-decol text-2xl md:text-3xl xl:text-5xl leading-9 xl:leading-16 font-semibold text-(--color-text) gap-4 capitalize text-center">
            Our Core Values
          </h2>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10">
          {OurCoreValuesArray?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white shadow-[0_0_15px_1px_#00000010] hover:shadow-[0_0_15px_1px_#ffd54f5b] p-8 xl:p-14 rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl transition-all hover:-translate-y-2.5 cursor-pointer hover:bg-[#fffdfd] border border-black/5">
              <div className="bg-(--color-gold-light) p-4 text-2xl w-fit rounded-lg mb-4 lg:mb-8">{item?.icon}</div>
              <span className="font-kaisei-decol text-xl lg:text-2xl font-bold text-(--theme-dark-color)">{item?.title}</span>
              <p className="font-quicksand text-sm lg:text-base font-medium text-(--color-text-secondary) w-full text-center pt-4">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurCoreValues;
