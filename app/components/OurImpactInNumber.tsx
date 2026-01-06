import { ourImpactInNumberArray } from "../constant/Constant";

function OurImpactInNumber() {
  return (
    <div className="w-full h-full">
      <div className="pyramid-design-container">
        <div className="w-full flex items-center justify-center">
          <h2 className="font-kaisei-decol text-2xl xl:text-5xl leading-10 md:leading-16 text-(--color-text) md:flex items-stretch justify-start md:gap-4 capitalize font-semibold">
            <span className="block">We using top leading</span>
            <span className="bg-hero-bg px-10 rounded-[60px] text-(--color-bg) hidden md:block">design</span>
            <span className="block md:hidden">design</span>
          </h2>
        </div>
        <div className="w-full flex flex-wrap items-center justify-center gap-4 xl:gap-10 pt-6 xl:pt-20">
          {ourImpactInNumberArray?.map((item) => (
            <div
              key={item?.id}
              className="w-fit flex items-center justify-start px-8 xl:px-16 py-3.5 xl:py-5 bg-[#b7c3cd20] rounded-full xl:rounded-[60px] gap-5">
              <span className="font-kaisei-decol text-base xl:text-5xl">{item?.title}</span>
              <p className="font-kaisei-decol text-sm xl:text-3xl">{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurImpactInNumber;
