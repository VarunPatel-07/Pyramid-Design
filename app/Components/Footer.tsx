"use client";
import PyramidDesignLogo from "@/app/assets/images/logo/pyramid-design-logo-transperent.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { NavbarNavLinksArray } from "../constant/Constant";
import { classNames } from "../helper/Helper";
import { SocialMediaLinksArrayInterface } from "../Interface/Interface";
const SocialMediaLinksArray: SocialMediaLinksArrayInterface[] = [
  {
    link: "https://www.facebook.com/",
    icon: <FaFacebook />,
    target: "_blank",
    name: "FaceBook",
  },
  {
    link: "https://www.instagram.com/",
    icon: <FaInstagram />,
    target: "_blank",
    name: "Instagram",
  },
  {
    link: "https://www.linkedin.com/",
    icon: <FaLinkedin />,
    target: "_blank",
    name: "Linked In",
  },
  {
    link: "https://twitter.com/",
    icon: <FaTwitter />,
    target: "_blank",
    name: "Twitter",
  },
];
function Footer() {
  return (
    <footer className="w-full pt-5 xl:pt-17.5">
      <div className="pyramid-design-container">
        <div className="w-full flex flex-wrap flex-row md:grid md:grid-cols-3 pb-10">
          <div className="w-full flex flex-col items-start justify-start gap-4 md:gap-8">
            <Link href={"/"} title="ThinkArq Logo" aria-label="ThinkArq Logo" className="w-fit h-fit -ml-1">
              <Image src={PyramidDesignLogo} alt="ThinkArq Logo" title="ThinkArq Logo" width={140} height={45} className="max-w-25" />
            </Link>
            <p>
              Founded in 2007, Sparch is specializing in providing innovative services such as websitFounded in 2007.
            </p>
            <div className="flex items-center justify-start gap-5 md:gap-10 pb-12 pt-6 md:pt-4">
              {SocialMediaLinksArray?.map((item, index) => (
                <Link href={item?.link} className="w-fit h-fit -ml-1 text-2xl" key={index}>
                  {item?.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-1/2 md:w-full flex flex-col items-start justify-start gap-2 md:gap-5 xl:px-30 xl:pl-40">
            {NavbarNavLinksArray.map((link) => {
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  title={link.label}
                  aria-label={link.label}
                  className={classNames(
                    "font-quicksand font-semibold text-sm md:text-base lg:text-lg flex items-center justify-center px-2.5 py-0.5 pb-1 rounded-md capitalize text-(--color-text)",
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
                "font-quicksand font-semibold text-sm md:text-base lg:text-lg flex items-center justify-center px-2.5 py-0.5 pb-1 rounded-md capitalize text-(--color-text)",
                {}
              )}>
              Contact Us
            </Link>
          </div>
          <div className="w-1/2 md:w-full flex flex-col items-start justify-start gap-2 md:gap-5 xl:px-30">
            <Link
              href="/faq"
              title="faq"
              aria-label="faq"
              className={classNames(
                "font-quicksand font-semibold text-sm md:text-base lg:text-lg flex items-center justify-center px-2.5 py-0.5 pb-1 rounded-md capitalize text-(--color-text)",
                {}
              )}>
              FAQs
            </Link>
            <Link
              href="/privacy-policy"
              title="Privacy Policies"
              aria-label="Privacy Policies"
              className={classNames(
                "font-quicksand font-semibold text-sm md:text-base lg:text-lg flex items-center justify-center px-2.5 py-0.5 pb-1 rounded-md capitalize text-(--color-text)",
                {}
              )}>
              Privacy Policies
            </Link>
          </div>
        </div>
        <div className="border-t border-t-black/15 py-5 md:py-10 flex items-center justify-center">
          <Link
            href={"/"}
            title="ThinkArq Logo"
            aria-label="ThinkArq Logo"
            className="w-fit h-fit -ml-1 font-kaisei-decol text-xs md:text-sm text-center">
            Copyright {new Date().getFullYear()} © All Right Reserved
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
