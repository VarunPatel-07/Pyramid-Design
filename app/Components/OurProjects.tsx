"use client";

import { useEffect, useState } from "react";
import { OurProjectInfoArray } from "../Constant/Project";
import Image from "next/image";
import { classNames, IsOdd, noAnimation } from "../Helper/Helper";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { motion, Variants } from "motion/react";
import VectorOne from "@/app/assets/images/svg/project-svg-one.svg";
import VectorTwo from "@/app/assets/images/svg/project-svg-two.svg";
function OurProjects({ FilterLimit, showTitle = true }: { FilterLimit?: number; showTitle?: boolean }) {
  const [page, setPage] = useState<number>(1);
  const [isDesktopScreen, setIsDesktopScreen] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);
  const limit = FilterLimit || 4;

  const filteredProjects = OurProjectInfoArray?.slice(0, page * limit);

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktopScreen(window.innerWidth >= 1200);
      setIsReady(true);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!isReady) return null;

  return (
    <div className="w-full h-full py-10 xl:py-37.5">
      <div className="pyramid-design-parent-container relative overflow-hidden">
        <Image src={VectorOne} width={880} height={880} alt={"VectorOne"} className="absolute -top-1/12 -left-1/4" />
        <div className="pyramid-design-container h-full relative z-10">
          {showTitle && (
            <div className="w-full pb-16">
              <h2 className="font-kaisei-decol text-5xl leading-16 font-semibold text-(--color-text) gap-4 capitalize text-center">
                Our Projects
              </h2>
            </div>
          )}

          <div className="w-full">
            <div className="flex flex-col md:flex-wrap md:flex-row md:gap-4 md:justify-between items-start justify-start gap-12 lg:gap-7">
              {filteredProjects?.map((item, index) => (
                <motion.div
                  key={item?.id}
                  className="w-full md:w-[48%] lg:w-full"
                  variants={isDesktopScreen ? itemVariants : noAnimation}
                  initial={isDesktopScreen ? "hidden" : ""}
                  animate={isDesktopScreen ? "visible" : ""}
                  transition={isDesktopScreen ? { delay: (index % limit) * 0.15 } : { delay: 0 }}
                  layout>
                  <div
                    className={classNames(
                      "w-full flex items-stretch justify-start gap-4 lg:gap-8 xl:gap-12 bg-(--theme-dark-color) lg:bg-transparent rounded-xl lg:rounded-none p-5 lg:p-0",
                      {
                        "flex-col-reverse lg:flex-row-reverse": IsOdd(item?.id),
                        "flex-col-reverse lg:flex-row": !IsOdd(item?.id),
                      }
                    )}>
                    <div className="w-full lg:w-[40%] bg-(--theme-dark-color) rounded-xl lg:rounded-2xl xl:rounded-3xl overflow-hidden">
                      <div className="w-full h-full p-0 py-5 lg:p-10 flex flex-col items-start justify-between gap-5">
                        <div className="flex flex-col items-start justify-start gap-5">
                          <h3 className="font-kaisei-decol text-(--color-bg) text-3xl">{item?.title}</h3>
                          <p className="font-quicksand text-(--color-gray-light)">{item?.description}</p>
                        </div>
                        <Link
                          href={item?.link}
                          title={item?.title}
                          aria-label={item?.title}
                          className={classNames(
                            "font-quicksand text-base text-(--color-bg) items-center justify-center pt-2.5 pb-3 px-6 rounded-lg capitalize group transition-all hidden md:flex font-semibold border border-(--color-bg) hover:shadow-[0_0_15px_1px_#ffffff50] hover:bg-(--color-bg) hover:text-(--theme-dark-color)",
                            {}
                          )}>
                          <span className="flex items-center justify-start gap-3">
                            <span>See Project</span>
                            <IoArrowForward className="text-2xl -rotate-45 group-hover:rotate-0 transition-all" />
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full lg:w-[60%] overflow-hidden rounded-xl lg:rounded-2xl xl:rounded-3xl object-cover">
                      <Image
                        src={item?.image}
                        alt="About Us"
                        aria-label="About Us"
                        width={771}
                        height={347.73}
                        className="w-full object-cover transition-all duration-500  hover:scale-105 h-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProjects.length != OurProjectInfoArray.length && (
              <div className="w-full flex items-center justify-center pt-14">
                <button
                  title="See All Projects"
                  aria-label="See All Projects"
                  onClick={() => setPage((perv) => perv + 1)}
                  className={classNames(
                    "font-quicksand text-lg text-(--color-text) items-center justify-center pt-2.5 pb-3 px-6 rounded-lg capitalize bg-transparent border border-(--color-text)  group transition-all font-semibold hover:bg-(--theme-dark-color) hover:text-(--color-bg) cursor-pointer",
                    {}
                  )}>
                  <span className="flex items-center justify-start gap-3">
                    <span>Load More Projects</span>
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
        <Image src={VectorTwo} width={880} height={880} alt={"VectorOne"} className="absolute -bottom-0 -right-1/4" />
      </div>
    </div>
  );
}

export default OurProjects;
