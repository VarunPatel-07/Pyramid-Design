import { ourImpactInNumberArray } from "../constant/Constant";

function OurImpactInNumber() {
  return (
    <div className="w-full h-full">
      <div className="pyramid-design-container">
        <div className="w-full flex items-center justify-center">
          <h2 className="font-kaisei-decol text-2xl md:text-3xl xl:text-5xl leading-10 md:leading-16 text-(--color-text) md:flex items-stretch justify-center md:justify-start md:gap-4 capitalize font-semibold">
            <span className="block">We using top leading</span>
            <span className="bg-hero-bg px-10 rounded-[60px] text-(--color-bg) hidden md:block">design</span>
            <span className="block text-center md:hidden">design</span>
          </h2>
        </div>
        <div className="w-full flex flex-wrap items-center justify-center gap-x-4 gap-y-4 sm:gap-x-3.5 md:gap-y-7 xl:gap-10 pt-6 md:pt-12 xl:pt-20">
          {ourImpactInNumberArray?.map((item) => (
            <div
              key={item?.id}
              className="w-fit flex items-center justify-start px-6 xl:px-16 py-3.5 xl:py-5 bg-[#b7c3cd20] rounded-full xl:rounded-[60px] gap-5">
              <span className="font-kaisei-decol text-base lg:text-2xl slg:text-3xl xl:text-5xl font-bold text-black">
                {item?.title}
              </span>
              <p className="font-kaisei-decol text-[10px] sm:text-[15px] slg:text-xl lg:text-2xl xl:text-3xl font-normal text-black/70">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurImpactInNumber;
