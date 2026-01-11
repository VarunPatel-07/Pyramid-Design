"use client"
import { classNames } from "@/app/Helper/Helper";
import Link from "next/link";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Navbar() {
  const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false);
  return (
    <nav className="w-full border-b border-b-black/10 fixed top-0 left-0 bg-white z-50">
      <div className="think-arq-container">
        <div className="w-full flex items-center justify-between py-4">
          <Link href={"/"} title="ThinkArq Logo" aria-label="ThinkArq Logo" className="w-fit h-fit -ml-1">
            {/* <Image src={ThinkArqLogo} alt="ThinkArq Logo" title="ThinkArq Logo" width={140} height={50} /> */}
          </Link>
          <div
            className={classNames("w-fit h-fit flex gap-5 text-lg font-medium navbar-custom-css ", {
              active: showMobileNavbar,
            })}>
            <div className="w-fit h-fit flex gap-5 text-lg font-medium navbar-inner-wrapper">
              <div className="w-full flex items-center justify-between md:hidden">
                <div className="w-fit h-fit">
                  {/* <Image title="ThinkArq Logo" src={ThinkArqLogo} alt="ThinkArq Logo" width={140} height={50} /> */}
                </div>
                <button className="mt-1 cursor-pointer" onClick={() => setShowMobileNavbar(false)}>
                  <IoIosCloseCircleOutline className="min-w-7 min-h-7" />
                </button>
              </div>
              {Array?.from({ length: 5 })?.map((_, index) => (
                <Link
                  key={index}
                  href={"/test"}
                  title={"/test"}
                  aria-label={"/test"}
                  className={classNames(
                    "font-space-grotesk font-medium text-lg hover:text-orange-500 flex items-center justify-center px-2.5 py-0.5 pb-1 rounded-md",
                    {}
                  )}>
                  test
                </Link>
              ))}
            </div>
          </div>
          <button className="mt-1 cursor-pointer md:hidden" onClick={() => setShowMobileNavbar(true)}>
            <GiHamburgerMenu className="min-w-7 min-h-7" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
