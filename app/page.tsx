import AboutUsSection from "./components/AboutUsSection";
import BlurEllipseBlue from "./components/BlurEllipseBlue";
import BookAnAppointment from "./components/BookAnAppointment";
import ClientTestimonial from "./components/ClientTestimonial";
import MainHeroSection from "./components/MainHeroSection";
import MarqueeSlider from "./components/MarqueSlider";
import OurImpactInNumber from "./components/OurImpactInNumber";
import OurProjects from "./components/OurProjects";
import OurTeamSection from "./components/OurTeamSection";
import PyramidDesignContactForm from "./components/PyramidDesignContactForm";

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
