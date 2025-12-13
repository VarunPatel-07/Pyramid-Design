import ClientTestimonial from "@/app/Components/ClientTestimonial";
import OurProjects from "@/app/Components/OurProjects";
import PyramidDesignContactForm from "@/app/Components/PyramidDesignContactForm";

function page() {
  return (
    <>
      <section className="w-full h-full">
        <div className="w-full pt-4">
          <div className="pyramid-design-container bg-(--color-gray-light) rounded-xl overflow-hidden">
            <div className="w-full py-25 px-10">
              <div className="w-full flex flex-col items-center justify-center gap-5 max-w-282 mx-auto">
                <h1 className="font-kaisei-decol text-5xl leading-16 font-semibold text-(--color-text) capitalize text-start lg:text-center">
                  Expertise Across Architecture & Interior Design
                </h1>
                <p className="font-quicksand text-xl font-medium text-(--color-text-secondary) text-justify">
                  Our work spans architecture and interior design, delivering cohesive spaces from concept to
                  completion. We approach every project with a holistic design philosophy—carefully integrating
                  structure, functionality, and aesthetics. From initial planning and spatial development to detailed
                  interior execution, we focus on creating environments that are purposeful, timeless, and tailored to
                  the people who use them. Every space we design reflects a balance of creativity, precision, and
                  thoughtful craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
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
