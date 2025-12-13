import OurCoreValues from "@/app/Components/OurCoreValues";
import OurImpactInNumber from "@/app/Components/OurImpactInNumber";
import OurStory from "@/app/Components/OurStory";
import OurTeamSection from "@/app/Components/OurTeamSection";
import PyramidDesignContactForm from "@/app/Components/PyramidDesignContactForm";

function page() {
  return (
    <>
      <section className="w-full h-full">
        <div className="w-full pt-4">
          <div className="pyramid-design-container bg-(--color-gray-light) rounded-xl overflow-hidden">
            <div className="w-full py-25 px-10">
              <div className="w-full flex flex-col items-center justify-center gap-5 max-w-3xl mx-auto">
                <h1 className="font-kaisei-decol text-5xl leading-16 font-semibold text-(--color-text) capitalize text-start lg:text-center">
                  Crafting Spaces That <span className="text-(--color-gold-dark)">Inspire</span>
                </h1>
                <p className="font-quicksand text-xl font-medium text-(--color-text-secondary) text-center">
                  Founded in 2007, Sparchi has been at the forefront of innovative architecture and interior design. We
                  believe that great design has the power to transform not just spaces, but lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <OurStory />
      </section>
      <section className="w-full">
        <OurCoreValues />
      </section>
      <section className="w-full">
        <OurImpactInNumber />
      </section>
      <section className="w-full h-full bg-(--color-bg) pt-10 xl:pt-37.5">
        <OurTeamSection />
      </section>
      <section className="w-full bg-(--color-bg)">
        <PyramidDesignContactForm />
      </section>
    </>
  );
}

export default page;
