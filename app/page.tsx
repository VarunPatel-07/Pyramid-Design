import AboutUsSection from "./Components/AboutUsSection";
import BlurEllipseBlue from "./Components/BlurEllipseBlue";
import BookAnAppointment from "./Components/BookAnAppointment";
import MainHeroSection from "./Components/MainHeroSection";
import MarqueeSlider from "./Components/MarqueSlider";
import OurImpactInNumber from "./Components/OurImpactInNumber";
import OurProjects from "./Components/OurProjects";
import OurTeamSection from "./Components/OurTeamSection";

function page() {
  return (
    <>
      <section className="w-full h-full overflow-hidden'">
        <MainHeroSection />
      </section>
      <section className="w-full h-full relative">
        <div className="w-full h-full relative z-10">
          <MarqueeSlider />
        </div>
        <div className="w-full h-full relative z-10">
          <BookAnAppointment />
        </div>
        <BlurEllipseBlue />
      </section>
      <section className="w-full h-full">
        <AboutUsSection />
      </section>
      <section className="w-full h-full">
        <OurImpactInNumber />
      </section>
      <section className="w-full h-full">
        <OurProjects />
      </section>
      <section className="w-full h-full">
        <OurTeamSection />
      </section>
    </>
  );
}

export default page;
