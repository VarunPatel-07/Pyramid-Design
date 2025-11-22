import MainHeroSection from "./Components/MainHeroSection";
import MarqueeSlider from "./Components/MarqueSlider";

function page() {
  return (
    <>
      <section className="w-full h-full overflow-hidden'">
        <MainHeroSection />
      </section>
      <section className="w-full h-full overflow-hidden">
        <MarqueeSlider />
      </section>
    </>
  );
}

export default page;
