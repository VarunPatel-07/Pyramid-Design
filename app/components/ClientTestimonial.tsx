"use client";
import ClientPicture from "@/app/assets/images/client-picture.png";
import TestimonialVector from "@/app/assets/images/svg/testimonial-vector.svg";
import Image from "next/image";
import { useRef } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
function ClientTestimonial() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  return (
    <div className="w-full h-full pb-10 xl:pb-40 relative pyramid-design-parent-container">
      <div className="pyramid-design-container relative z-20">
        <div className="w-full flex items-center justify-center">
          <h2 className="font-kaisei-decol text-2xl xl:text-5xl leading-10 xl:leading-16 text-(--color-text) flex items-stretch justify-start gap-4 capitalize font-semibold">
            Testimonials
          </h2>
        </div>
        <div className="w-full pt-8 lg:pt-12 xl:pt-20">
          <div className="bg-(--theme-dark-color) rounded-xl lg:rounded-2xl xl:rounded-3xl px-5 lg:px-10 py-10 relative">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              pagination={{
                el: ".custom-pagination",
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              speed={1500}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  if (
                    prevRef.current &&
                    nextRef.current &&
                    swiper.params.navigation &&
                    typeof swiper.params.navigation !== "boolean"
                  ) {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }
                });
              }}>
              {Array.from({ length: 10 })?.map((_, key) => (
                <SwiperSlide key={key}>
                  <div className="w-ful lg:max-w-[90%]">
                    <span className="text-(--color-gray-light) font-kaisei-decol text-base md:text-lg lg:text-xl xl:text-[32px] leading-8 xl:leading-12 font-bold">
                      “I really enjoyed working with you guys, you guys are very communicative and quick to do the job.
                      I really can’t wait to work with you again”
                    </span>
                    <div className="flex items-center justify-start gap-3 pt-10 xl:pt-20">
                      <Image
                        src={ClientPicture}
                        alt="Client Picture"
                        width={56}
                        height={56}
                        loading="lazy"
                        className="max-w-9 max-h-9"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <span className="font-kaisei-decol text-(--color-gray-light) font-medium  text-xs md:text-sm lg:text-base">
                          Nazra Ahamed
                        </span>
                        <p className="font-quicksand text-white/50 font-medium text-[10px] md:text-xs lg:text-sm">
                          CEO of open ecom
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex items-center justify-end gap-3 absolute right-5 bottom-11 z-10">
              <button
                ref={prevRef}
                aria-label="Arrow Left"
                className="p-1.5 md:min-w-9 md:min-h-9 rounded-lg bg-(--color-gold-light) text-(--color-text) hover:bg-(--color-gold-hover) cursor-pointer   flex items-center justify-center transition-colors duration-300 disabled:opacity-50 disabled:hover:bg-(--color-gold-light) disabled:hover:text-[#191A23]  disabled:cursor-not-allowed">
                <HiOutlineArrowLeft className="min-w-2 min-h-2 md:min-w-5 md:min-h-5" aria-hidden="true" />
              </button>

              <button
                ref={nextRef}
                aria-label="Arrow Right"
                className="p-1.5 md:min-w-9 md:min-h-9 rounded-lg bg-(--color-gold-light) text-(--color-text) hover:bg-(--color-gold-hover) cursor-pointer   flex items-center justify-center transition-colors duration-300 disabled:opacity-50 disabled:hover:bg-(--color-gold-light) disabled:hover:text-[#191A23]  disabled:cursor-not-allowed">
                <HiOutlineArrowRight className="min-w-2 min-h-2 md:min-w-5 md:min-h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={TestimonialVector}
        alt="Testimonial Vector"
        title="Testimonial Vector"
        loading="lazy"
        className="absolute -top-1/6 -left-1/12 pointer-events-none hidden lg:block"
        width={850}
        height={850}
      />
    </div>
  );
}

export default ClientTestimonial;
