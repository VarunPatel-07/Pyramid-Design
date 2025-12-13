import AboutUsSection from "./Components/AboutUsSection";
import BlurEllipseBlue from "./Components/BlurEllipseBlue";
import BookAnAppointment from "./Components/BookAnAppointment";
import ClientTestimonial from "./Components/ClientTestimonial";
import MainHeroSection from "./Components/MainHeroSection";
import MarqueeSlider from "./Components/MarqueSlider";
import OurImpactInNumber from "./Components/OurImpactInNumber";
import OurProjects from "./Components/OurProjects";
import OurTeamSection from "./Components/OurTeamSection";
import PyramidDesignContactForm from "./Components/PyramidDesignContactForm";

function page() {
  return (
    <>
      <section className="w-full h-full overflow-hidden bg-(--color-bg)">
        <MainHeroSection />
      </section>
      <section className="w-full h-full relative bg-(--color-bg)">
        <div className="w-full h-full relative z-10">
          <MarqueeSlider />
        </div>
        <div className="w-full h-full relative z-10">
          <BookAnAppointment />
        </div>
        <BlurEllipseBlue />
      </section>
      <section className="w-full h-full bg-(--color-bg)">
        <AboutUsSection />
      </section>
      <section className="w-full h-full bg-(--color-bg)">
        <OurImpactInNumber />
      </section>
      <section className="w-full h-full bg-(--color-bg)">
        <OurProjects />
      </section>
      <section className="w-full h-full bg-(--color-bg)">
        <OurTeamSection />
      </section>
      <section className="w-full h-full bg-(--color-bg)">
        <ClientTestimonial />
      </section>
      <section className="w-full bg-(--color-bg)">
        <PyramidDesignContactForm />
      </section>
    </>
  );
}

export default page;
