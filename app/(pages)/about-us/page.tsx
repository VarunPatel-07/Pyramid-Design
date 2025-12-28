import CommonHeader from "@/app/components/CommonHeader";
import OurCoreValues from "@/app/components/OurCoreValues";
import OurImpactInNumber from "@/app/components/OurImpactInNumber";
import OurStory from "@/app/components/OurStory";
import OurTeamSection from "@/app/components/OurTeamSection";
import PyramidDesignContactForm from "@/app/components/PyramidDesignContactForm";

function page() {
  return (
    <>
      <section className="w-full h-full">
        <CommonHeader
          maxWidth="768"
          title={`Crafting Spaces That <span className="text-[#c79100]!">Inspire</span>`}
          description="Founded in 2007, Sparchi has been at the forefront of innovative architecture and interior design. We believe that great design has the power to transform not just spaces, but lives."
        />
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
