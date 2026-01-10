import CommonHeader from "@/app/components/CommonHeader";
import OurTeamSection from "@/app/components/OurTeamSection";
import PyramidDesignContactForm from "@/app/components/PyramidDesignContactForm";

function MeetOurTeam() {
  return (
    <>
      {" "}
      <section className="w-full h-full">
        <CommonHeader
          maxWidth="768"
          title={`Meet the <span className="text-[#c79100]!">Visionaries</span> Behind the Design`}
          description="Our team is a collective of architects, designers, and creative thinkers united by a passion for crafting meaningful spaces. With decades of combined experience, we transform ideas into environments that inspire and endure."
        />
      </section>
      <section className="w-full h-full bg-(--color-bg) pt-13.75">
        <OurTeamSection showTitle={false} />
      </section>
      {/* <section className="w-full h-full bg-(--color-bg)">
        <ClientTestimonial />
      </section> */}
      <section className="w-full bg-(--color-bg)">
        <PyramidDesignContactForm />
      </section>
    </>
  );
}

export default MeetOurTeam;
