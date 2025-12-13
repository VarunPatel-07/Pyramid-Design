"use client";
import Link from "next/link";
import { classNames } from "../Helper/Helper";
import { IoArrowForward } from "react-icons/io5";

function BookAnAppointment() {
  return (
    <div className="w-full h-full">
      <div className="pyramid-design-container">
        <div className="py-14 px-14 rounded-3xl backdrop-blur-sm bg-(--color-gray-light)">
          <div className="flex flex-col items-start justify-start gap-10">
            <h2 className="font-kaisei-decol text-[50px] leading-16 font-medium text-(--color-text)">
              We provide the best architecture
              <span className="block">
                design that is
                <span className="text-(--color-gold-dark) pl-2">out of the box!</span>
              </span>
            </h2>
            <div className="flex items-end justify-between w-full">
              <div className="max-w-[460px]">
                <p className="text-base text-(--color-text-secondary)">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                  enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="grow flex items-center justify-end">
                <Link
                  href="/contact"
                  title="contact"
                  aria-label="contact"
                  className={classNames(
                    "font-quicksand text-lg text-(--color-text) items-center justify-center pt-2.5 pb-3 px-6 rounded-lg capitalize bg-transparent border border-(--color-text)  group transition-all hidden md:flex font-semibold hover:bg-(--color-bg) hover:border-(--color-bg) hover:shadow-[0_0_15px_1px_#ffd54f5b]",
                    {}
                  )}>
                  <span className="flex items-center justify-start gap-3">
                    <span>book an appointment</span>
                    <IoArrowForward className="text-2xl -rotate-45 group-hover:rotate-0 transition-all" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookAnAppointment;
