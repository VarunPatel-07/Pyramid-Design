import Image from "next/image";
import demoImage from "@/app/assets/images/ares.png";

function OurTeamSection() {
  // const ourTeamIntroSection = {}
  return (
    <div className="w-full h-full pb-10 xl:pb-40">
      <div className="pyramid-design-container">
        <div className="w-full flex items-center justify-center">
          <h2 className="font-kaisei-decol text-5xl leading-16 text-(--color-text) flex items-stretch justify-start gap-4 capitalize font-semibold">
            <span className="block">Meet Our</span>
            <span className="block bg-meet-our-team px-10 rounded-[60px] text-(--color-bg)">Team</span>
          </h2>
        </div>
        <div className="pt-20 w-full">
          <div className="w-full flex items-stretch justify-start flex-wrap gap-10">
            {Array?.from({ length: 6 })?.map((_, index) => (
              <div
                className=" w-full lg:w-[48%] xl:w-[31%] overflow-hidden rounded-3xl hover:translate-y-2 transition-all duration-500 relative cursor-pointer group"
                key={index}>
                <Image
                  src={demoImage}
                  alt="Demo Image"
                  width={500}
                  height={500}
                  className="aspect-square object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-black/10 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute w-full bg-(--color-gray-light) bottom-0 left-0 py-5 px-5 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="font-kaisei-decol text-(--color-text) text-2xl font-bold">Lorem, ipsum dolor.</span>
                  <p className="font-quicksand text-base text-(--color-text-secondary)">Lorem ipsum, dolor sit</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeamSection;
