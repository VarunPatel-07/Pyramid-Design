import heroImage from "@/app/assets/images/hero-image.webp";
import Image from "next/image";
function OurStory() {
  return (
    <div className="w-full py-10 md:py-18.75 xl:py-37.5">
      <div className="pyramid-design-container">
        <div className="w-full flex flex-col-reverse slg:flex-row items-stretch justify-start gap-6 xl:gap-30">
          <div className="w-full slg:w-1/2">
            <div className="w-full h-full flex flex-col items-start justify-between gap-4  xl:gap-8">
              <h2 className="font-kaisei-decol text-xl md:text-2xl xl:text-4xl font-bold">Our Story</h2>
              <p className="text-justify font-quicksand text-sm md:text-base lg:text-lg font-medium text-(--color-text-secondary)">
                Founded in 2007, Sparchi began with a simple vision: to create architectural designs that seamlessly
                blend functionality with aesthetic beauty. What started as a small studio has grown into a full-service
                architecture and interior design firm, specializing in residential, commercial, and sustainable design
                projects.
              </p>
              <div className="bg-[#b7c3cd20] py-5 px-6 lg:px-16 w-full relative rounded-lg overflow-hidden">
                <span className="w-1.5 h-full absolute left-0 top-0 bg-(--color-gold-hover)"></span>
                <p className="font-kaisei-decol font-semibold text-black text-xs md:text-sm lg:text-lg">
                  &quot;We shape our buildings; thereafter they shape us.&quot;
                </p>
              </div>
              <p className="text-justify font-quicksand text-sm md:text-base lg:text-lg font-medium text-(--color-text-secondary)">
                Over the years, we&apos;ve delivered over 100 projects, each one reflecting our commitment to
                excellence, innovation, and attention to detail. Our holistic approach ensures that every space we
                design is purposeful, timeless, and tailored to the people who use them.
              </p>
              <p className="text-justify font-quicksand text-sm md:text-base lg:text-lg font-medium text-(--color-text-secondary)">
                Today, with a team of passionate architects, designers, and engineers, we continue to push boundaries
                and set new standards in the industry.
              </p>
            </div>
          </div>
          <div className="w-full slg:w-1/2">
            <div className="w-full h-full rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl overflow-hidden">
              <Image
                src={heroImage}
                alt="Hero Section Vector"
                title="Hero Section Vector"
                loading="lazy"
                className="w-full h-full aspect-video rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
