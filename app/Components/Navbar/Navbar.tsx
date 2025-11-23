"use client";
import { NavbarNavLinksArray } from "@/app/Constant/Constant";
import { classNames } from "@/app/Helper/Helper";
import Link from "next/link";
import PyramidDesignLogo from "@/app/assets/images/logo/pyramid-design-logo-transperent.png";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import { motion, useScroll, useTransform } from "motion/react";

function Navbar() {
  const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isDesktopScreen, setIsDesktopScreen] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktopScreen(window.innerWidth >= 1200);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]);
  return (
    <motion.nav
      className="w-full sticky top-0 left-0 bg-transparent z-50 mx-auto border-b border-b-gray-100 md:border-b-0 max-w-[1560px]"
      initial={{ y: 0 }}
      style={isDesktopScreen ? { width: "100% !important" } : { backgroundColor: "var(--color-bg)" }}
      animate={
        isDesktopScreen
          ? {
              y: 0,
              paddingTop: isScrolled ? "16px" : "0px",
              width: isScrolled ? "95%" : "100%",
            }
          : {}
      }
      transition={{ duration: 0.8, ease: "easeInOut" }}>
      <motion.div
        className="pyramid-design-container py-1"
        style={isDesktopScreen ? { backgroundColor } : {}}
        initial={{ y: 0 }}
        animate={
          isDesktopScreen
            ? {
                y: 0,
                backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
                boxShadow: isScrolled ? "0 0 15px 1px #ffd54f5b" : "none",
                borderRadius: isScrolled ? "16px" : "0px",
              }
            : {}
        }
        transition={{ duration: 0.2, ease: "easeInOut" }}>
        <motion.div
          className="w-full flex items-center justify-between"
          initial={{ y: 0 }}
          animate={
            isDesktopScreen
              ? {
                  y: 0,
                  paddingLeft: isScrolled ? "24px" : "0px",
                  paddingRight: isScrolled ? "24px" : "0px",
                }
              : {}
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}>
          <Link href={"/"} title="ThinkArq Logo" aria-label="ThinkArq Logo" className="w-fit h-fit -ml-1">
            <Image src={PyramidDesignLogo} alt="ThinkArq Logo" title="ThinkArq Logo" width={140} height={45} />
          </Link>
          <div
            className={classNames("w-fit h-fit flex gap-5 text-lg font-medium navbar-custom-css ", {
              active: showMobileNavbar,
            })}>
            <div className="w-fit h-fit flex gap-5 text-lg font-medium navbar-inner-wrapper">
              <div className="w-full flex items-center justify-between md:hidden">
                <div className="w-fit h-fit">
                  <Image title="ThinkArq Logo" src={PyramidDesignLogo} alt="ThinkArq Logo" width={140} height={50} />
                </div>
                <button className="mt-1 cursor-pointer" onClick={() => setShowMobileNavbar(false)}>
                  <IoIosCloseCircleOutline className="min-w-7 min-h-7" />
                </button>
              </div>
              {NavbarNavLinksArray.map((link) => {
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    title={link.label}
                    aria-label={link.label}
                    className={classNames(
                      "font-quicksand font-semibold text-lg flex items-center justify-center px-2.5 py-0.5 pb-1 rounded-md capitalize text-(--color-text)",
                      {}
                    )}>
                    {link.val}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                title="contact"
                aria-label="contact"
                className={classNames(
                  "font-quicksand text-lg text-(--color-text) flex items-center justify-center pt-2.5 pb-3 px-6 rounded-lg capitalize bg-(--color-gold-light) hover:bg-(--color-gold-hover) group transition-all md:hidden font-semibold",
                  {}
                )}>
                <span className="flex items-center justify-start gap-3">
                  <span>Contact Us</span>
                  <IoArrowForward className="text-2xl -rotate-45 group-hover:rotate-0 transition-all" />
                </span>
              </Link>
            </div>
          </div>
          <Link
            href="/contact"
            title="contact"
            aria-label="contact"
            className={classNames(
              "font-quicksand text-lg text-(--color-text) items-center justify-center pt-2.5 pb-3 px-6 rounded-lg capitalize bg-(--color-gold-light) hover:bg-(--color-gold-hover) group transition-all hidden md:flex font-semibold",
              {}
            )}>
            <span className="flex items-center justify-start gap-3">
              <span>Contact Us</span>
              <IoArrowForward className="text-2xl -rotate-45 group-hover:rotate-0 transition-all" />
            </span>
          </Link>
          <button className="mt-1 cursor-pointer md:hidden" onClick={() => setShowMobileNavbar(true)}>
            <GiHamburgerMenu className="min-w-7 min-h-7" />
          </button>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;
