import Image from "next/image";
import { MarqueeItem } from "../Interface/Interface";
import Union from "@/app/assets/images/svg/union.svg";

function MarqueeSlider() {
  const items: MarqueeItem[] = [
    { id: 1, content: "Innovation" },
    { id: 2, content: "Technology" },
    { id: 3, content: "Design" },
    { id: 4, content: "Development" },
    { id: 5, content: "Creativity" },
    { id: 6, content: "Excellence" },
  ];

  return (
    <div className="w-full overflow-hidden my-10 xl:my-20">
      <div className="min-h-[150px] flex items-center justify-center">
        <div className="w-full bg-(--theme-dark-color)">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array?.from({ length: 10 })?.map(() => {
              return items.map((item) => (
                <div
                  key={`first-${item.id}`}
                  className="inline-flex items-center mx-8 px-8 py-4  transition-transform duration-300">
                  <Image
                    src={Union}
                    alt="Union"
                    aria-label="Union"
                    width={40}
                    height={40}
                    loading="lazy"
                    className="mr-4"
                  />
                  <span className="text-3xl font-kaisei-decol font-semibold text-white">{item.content}</span>
                </div>
              ));
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarqueeSlider;
