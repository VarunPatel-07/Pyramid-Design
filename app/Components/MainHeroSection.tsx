"use client";
import Image from "next/image";
import HeroSectionImage from "@/app/assets/images/hero-section-image.webp";
import HeroVectorOne from "@/app/assets/images/svg/hero-vector-one.svg";
import Quote from "@/app/assets/images/svg/quote.svg";
import { motion, Variants } from "motion/react";
import { useEffect, useState } from "react";
import { noAnimation } from "../Helper/Helper";

function MainHeroSection() {
  const [isDesktopScreen, setIsDesktopScreen] = useState<boolean>(false);
  const [isReady, setIsReady] = useState(false);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeRight: Variants = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeLeft: Variants = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
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

  if (!isReady) return <div className="h-screen"></div>;
  return (
    <motion.div
      className="w-full h-full pt-10 xl:pt-[90px] relative overflow-hidden"
      variants={isDesktopScreen ? container : noAnimation}
      initial={isDesktopScreen ? "hidden" : undefined}
      animate={isDesktopScreen ? "show" : undefined}>
      <div className="w-full h-full pyramid-design-container relative z-20">
        <div className="w-full flex items-stretch justify-start">
          <motion.div className="w-[70%]" variants={isDesktopScreen ? fadeRight : noAnimation}>
            <div className="w-full h-full flex flex-col justify-end items-start gap-20 xl:gap-[100px]">
              <motion.div className="w-full" variants={isDesktopScreen ? fadeUp : noAnimation}>
                <div className="w-full max-w-[350px] relative">
                  <p className="font-quicksand font-semibold text-lg text-(--color-gold-dark)">
                    Founded in 2007, Sparch is specializing in providing innovative services such as websitFounded in
                    2007.
                  </p>
                  <Image
                    src={Quote}
                    width={80}
                    height={80}
                    alt="Quote"
                    aria-label="Quote"
                    className="absolute -bottom-1/2 right-10"
                    loading="eager"
                  />
                </div>
              </motion.div>
              <motion.div className="w-full relative" variants={isDesktopScreen ? fadeUp : noAnimation}>
                <Image
                  src={HeroSectionImage}
                  alt="Hero Section Image"
                  aria-label="Hero Section Image"
                  width={693}
                  height={493}
                  loading="lazy"
                />

                <motion.div
                  className="absolute -top-[40%] -right-[35%] max-w-[800px]"
                  variants={isDesktopScreen ? fadeLeft : noAnimation}>
                  <h1 className="font-kaisei-decol text-7xl leading-24 font-medium text-(--color-text)">
                    &quot;We shape our buildings,
                    <span className="text-(--color-gold-dark)">
                      thereafter <br />
                      they shape us.&quot;
                    </span>
                  </h1>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          <div className="w-[30%] grow">
            <div className="w-full h-full">
              <div className="w-full h-full flex flex-col items-start justify-end">
                {["Architect Design", "Interior Design", "3D Modeling"].map((item, i) => (
                  <motion.h2
                    key={i}
                    className="w-full flex items-center gap-10 py-7 font-kaisei-decol text-(--color-text) capitalize"
                    variants={isDesktopScreen ? fadeUp : noAnimation}>
                    <span className="text-[40px]">{String(i + 1).padStart(2, "0")}.</span>
                    <span className="text-2xl">{item}</span>
                  </motion.h2>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={HeroVectorOne}
        alt="Hero Section Vector"
        title="Hero Section Vector"
        loading="lazy"
        className="absolute top-0 -left-1/4"
        width={835}
        height={835}
      />
    </motion.div>
  );
}

export default MainHeroSection;
