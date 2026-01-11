"use client";
import HeroMobileImage from "@/app/assets/images/hero-mobile.png";
import HeroSectionImage from "@/app/assets/images/hero-section-image.webp";
import HeroVectorOne from "@/app/assets/images/svg/hero-vector-one.svg";
import Quote from "@/app/assets/images/svg/quote.svg";
import StarIcon from "@/app/assets/images/svg/star.svg";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { noAnimation } from "../helperFiles/Helper";

function MainHeroSection() {
  const [isDesktopScreen, setIsDesktopScreen] = useState<boolean>(false);
  const [isReady, setIsReady] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);

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

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth <= 1024);
      setIsReady(true);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!isReady) return <div className="h-screen"></div>;

  if (!isMobileScreen) {
    return (
      <motion.div
        layout="position"
        className="w-full h-full pt-10 xl:pt-22.5 relative overflow-hidden hidden lg:block"
        variants={isDesktopScreen ? container : noAnimation}
        initial={isDesktopScreen ? "hidden" : undefined}
        animate={isDesktopScreen ? "show" : undefined}>
        <div className="w-full h-full pyramid-design-container relative z-20">
          <div className="w-full flex items-stretch justify-start">
            <motion.div layout="position" className="w-[70%]" variants={isDesktopScreen ? fadeRight : noAnimation}>
              <div className="w-full h-full flex flex-col justify-end items-start gap-20 xl:gap-25">
                <motion.div layout="position" className="w-full" variants={isDesktopScreen ? fadeUp : noAnimation}>
                  <div className="w-full max-w-87.5 relative">
                    <p className="font-quicksand font-medium text-lg text-(--color-gold-dark)">
                      Founded in 2007, Sparch is specializing in providing innovative services such as websitFounded in
                      2007.
                    </p>
                    <Image
                      src={Quote}
                      width={80}
                      height={80}
                      alt="Quote"
                      aria-label="Quote"
                      className="absolute -bottom-1/2 right-10 pointer-events-none"
                      loading="eager"
                    />
                  </div>
                </motion.div>
                <motion.div
                  layout="position"
                  className="w-full relative"
                  variants={isDesktopScreen ? fadeUp : noAnimation}>
                  <Image
                    src={HeroSectionImage}
                    alt="Hero Section Image"
                    aria-label="Hero Section Image"
                    width={693}
                    height={493}
                    loading="lazy"
                  />

                  <motion.div
                    layout="position"
                    className="absolute -top-[40%] -right-[35%] max-w-200"
                    variants={isDesktopScreen ? fadeLeft : noAnimation}>
                    <h1 className="font-kaisei-decol text-[68px] leading-24 font-medium text-(--color-text)">
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
                      layout="position"
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
          <Image
            src={StarIcon}
            alt="Star Icon Vector"
            title="Star Icon Vector"
            loading="lazy"
            className="absolute -top-[2%] right-0 hidden xl:block"
            width={85}
            height={85}
          />
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
  } else {
    return (
      <div className="w-full h-full pt-10 relative overflow-hidden">
        <div className="w-full h-full pyramid-design-container relative z-20">
          <div className="w-full flex flex-col md:flex-row md:gap-10 items-stretch justify-start">
            <div className="w-full">
              <div className="w-full h-full flex flex-col justify-end items-start gap-5">
                <div className="w-full block md:hidden">
                  <h1 className="font-kaisei-decol text-3xl leading-12 font-semibold text-(--color-text)">
                    &quot;We shape our buildings,
                    <span className="text-(--color-gold-dark) w-full">thereafter they shape us.&quot;</span>
                  </h1>
                </div>
                <div className="w-full relative">
                  <p className="font-quicksand font-medium text-sm text-(--color-gold-dark)">
                    Founded in 2007, Sparch is specializing in providing innovative services such as websitFounded in
                    2007.
                  </p>
                </div>
                <div className="w-full relative pt-4 md:grow md:pt-0 md:flex md:items-center md:justify-center">
                  <Image
                    src={HeroMobileImage}
                    alt="Hero Section Image"
                    aria-label="Hero Section Image"
                    width={693}
                    height={493}
                    loading="lazy"
                    className="rounded-lg overflow-hidden"
                  />
                </div>
              </div>
            </div>
            <div className="w-full grow">
              <div className="w-full h-full">
                <div className="w-full hidden md:block">
                  <h1 className="font-kaisei-decol text-3xl leading-12 font-semibold text-(--color-text)">
                    &quot;We shape our buildings,
                    <span className="text-(--color-gold-dark) w-full">thereafter they shape us.&quot;</span>
                  </h1>
                </div>
                <div className="w-full h-full flex flex-wrap md:flex-col items-center justify-center md:justify-start md:items-start gap-y-5 gap-x-4 sm:gap-x-10 md:gap-10 pt-10 md:pt-7">
                  {["Architect Design", "Interior Design", "3D Modeling"].map((item, i) => (
                    <h2
                      key={i}
                      className="flex items-center gap-1 py-0 font-kaisei-decol text-(--color-text) capitalize">
                      <span className="text-lg sm:text-2xl md:text-2xl">{String(i + 1).padStart(2, "0")}.</span>
                      <span className="text-sm sm:text-lg md:text-lg">{item}</span>
                    </h2>
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
          className="absolute top-0 -left-1/4  md:-left-1/2 md:-top-1/2"
          width={835}
          height={835}
        />
      </div>
    );
  }
}

export default MainHeroSection;
