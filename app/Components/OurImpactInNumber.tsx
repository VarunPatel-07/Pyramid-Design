import { ourImpactInNumberArray } from "../Constant/Constant";

function OurImpactInNumber() {
  return (
    <div className="w-full h-full pt-12">
      <div className="pyramid-design-container">
        <div className="w-full flex items-center justify-center">
          <h2 className="font-kaisei-decol text-5xl leading-16 text-(--color-text) flex items-stretch justify-start gap-4 capitalize font-semibold">
            <span className="block">We using top leading</span>
            <span className="block bg-hero-bg px-10 rounded-[60px] text-(--color-bg)">design</span>
          </h2>
        </div>
        <div className="w-full flex flex-wrap items-center justify-center gap-10 pt-20">
          {ourImpactInNumberArray?.map((item) => (
            <div
              key={item?.id}
              className="w-fit flex items-center justify-start px-16 py-5 bg-[#b7c3cd20] rounded-[60px] gap-5">
              <span className="font-kaisei-decol text-5xl">{item?.title}</span>
              <p className="font-kaisei-decol text-3xl">{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurImpactInNumber;
