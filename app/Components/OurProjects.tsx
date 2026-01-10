"use client";

import { motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { OurProjectInfoArray } from "../constant/Project";
import { classNames, IsOdd, noAnimation } from "../helper/Helper";

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
    <div className="w-full h-full py-15 md:py-20 xl:py-40">
      <div className="pyramid-design-parent-container relative overflow-hidden">
        <div className="pyramid-design-container h-full relative z-10">
          {showTitle && (
            <div className="w-full pb-8 md:pb-12 xl:pb-16">
              <h2 className="font-kaisei-decol text-2xl md:text-3xl xl:text-5xl leading-10 xl:leading-16 font-semibold text-(--color-text) gap-4 capitalize text-center">
                Our Projects
              </h2>
            </div>
          )}

          <div className="w-full">
            <div className="flex flex-col sm:flex-wrap sm:flex-row md:justify-between items-start justify-start gap-5 sm:gap-3 sm:gap-y-6 md:gap-5 lg:gap-12">
              {filteredProjects?.map((item, index) => (
                <motion.div
                  key={item?.id}
                  className="w-full grow sm:w-[47%] md:w-[48%] lg:w-full"
                  variants={isDesktopScreen ? itemVariants : noAnimation}
                  initial={isDesktopScreen ? "hidden" : ""}
                  animate={isDesktopScreen ? "visible" : ""}
                  transition={isDesktopScreen ? { delay: (index % limit) * 0.15 } : { delay: 0 }}
                  layout>
                  <div
                    className={classNames(
                      "w-full flex items-stretch justify-start gap-4 lg:gap-8 xl:gap-12 bg-(--theme-dark-color) lg:bg-transparent p-2.5 lg:p-0 rounded-lg md:rounded-xl lg:rounded-none",
                      {
                        "flex-col-reverse lg:flex-row-reverse": IsOdd(item?.id),
                        "flex-col-reverse lg:flex-row": !IsOdd(item?.id),
                      }
                    )}>
                    <div className="w-full lg:w-[40%] bg-(--theme-dark-color) rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl overflow-hidden">
                      <div className="w-full h-full p-0 py-2.5 md:py-5 lg:p-10 flex flex-col items-start justify-between gap-4 md:gap-5">
                        <div className="flex flex-col items-start justify-start gap-2.5 md:gap-5">
                          <h3 className="font-kaisei-decol text-(--color-bg) text-lg md:text-xl lg:text-2xl xl:text-3xl">
                            {item?.title}
                          </h3>
                          <p className="font-quicksand text-white/40 text-sm md:text-base">{item?.description}</p>
                        </div>
                        <Link
                          href={item?.link}
                          title={item?.title}
                          aria-label={item?.title}
                          className={classNames(
                            "font-quicksand text-sm lg:text-base text-white/40 items-center justify-center pt-2.5 pb-3 px-4 lg:px-6 rounded-lg capitalize group transition-all  font-semibold border border-white/20 hover:shadow-[0_0_15px_1px_#ffffff50] hover:bg-(--color-bg) hover:text-(--theme-dark-color)",
                            {}
                          )}>
                          <span className="flex items-center justify-start gap-3">
                            <span>See Project</span>
                            <IoArrowForward className="text-base lg:text-2xl -rotate-45 group-hover:rotate-0 transition-all" />
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full lg:w-[60%] overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl object-cover">
                      <Image
                        src={item?.image}
                        alt="About Us"
                        aria-label="About Us"
                        width={771}
                        height={347.73}
                        className="w-full object-cover transition-all aspect-video lg:aspect-auto duration-500  hover:scale-105 h-full rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl"
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
                    "font-quicksand text-sm md:text-base lg:text-lg text-(--color-text) items-center justify-center pt-2.5 pb-3 px-6 rounded-lg capitalize bg-transparent border border-(--color-text)  group transition-all font-semibold hover:bg-(--theme-dark-color) hover:text-(--color-bg) cursor-pointer",
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
      </div>
    </div>
  );
}

export default OurProjects;
