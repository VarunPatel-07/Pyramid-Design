import CommonHeader from "@/app/components/CommonHeader";
import PyramidDesignContactForm from "@/app/components/PyramidDesignContactForm";

function ContactUsPage() {
  return (
    <>
      <section className="w-full h-full">
        <CommonHeader
          maxWidth="768"
          title={`Have A <span className="text-[#c79100]!">Project</span> In Mind?`}
          description="We collaborate, design, and bring your vision to life by understanding your ideas, refining every detail, and crafting spaces that reflect purpose, creativity, and functionality. Let’s start a meaningful conversation and transform your concept into an inspiring, enduring experience."
        />
      </section>
      <section className="w-full bg-(--color-bg) pt-15 md:pt-20 xl:pt-40">
        <PyramidDesignContactForm showTitle={false} />
      </section>
    </>
  );
}

export default ContactUsPage;
