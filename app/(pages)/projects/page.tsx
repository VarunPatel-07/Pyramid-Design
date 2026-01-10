import ClientTestimonial from "@/app/components/ClientTestimonial";
import CommonHeader from "@/app/components/CommonHeader";
import OurProjects from "@/app/components/OurProjects";
import PyramidDesignContactForm from "@/app/components/PyramidDesignContactForm";

function page() {
  return (
    <>
      <section className="w-full h-full">
        <CommonHeader
          maxWidth="1200"
          title={`Expertise Across Architecture & Interior Design`}
          description={`Our work spans architecture and interior design, delivering cohesive spaces from concept to completion. We approach every project with a holistic design philosophy—carefully integrating structure, functionality, and aesthetics. From initial planning and spatial development to detailed interior execution, we focus on creating environments that are purposeful, timeless, and tailored to the people who use them. Every space we design reflects a balance of creativity, precision, and thoughtful craftsmanship.`}
        />
      </section>
      <section className="w-full h-full">
        <OurProjects showTitle={false} />
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
