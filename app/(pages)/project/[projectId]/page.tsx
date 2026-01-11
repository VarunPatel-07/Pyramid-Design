import MasonryGrid from "@/app/components/MasonryGrid";
import NotFoundCompetent from "@/app/components/NotFoundCompetent";
import PyramidDesignContactForm from "@/app/components/PyramidDesignContactForm";
import { OurProjectInfoArray } from "@/app/constant/Project";
import Image from "next/image";

export async function generateStaticParams() {
  return OurProjectInfoArray.map((item) => ({
    projectId: item.id, // must match your dynamic folder name
  }));
}
export default async function Page({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId: projectIdSlug } = await params;
  const project = OurProjectInfoArray?.find((item) => item?.link === `/project/${projectIdSlug}`);

  if (!project) {
    return (
      <div className="w-full h-screen">
        <NotFoundCompetent />
      </div>
    );
  } else {
    return (
      <>
        <section className="w-full h-[calc(100vh-90px)] overflow-hidden relative">
          <div className="w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1764009971892-6bf11e43f210?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={1600}
              height={900}
              alt={project?.title}
              className="w-full h-full xl:h-auto object-cover"
            />
            <div className="absolute top-0 left-0 bg-black/30 backdrop-blur-[1px] w-full h-full p-4">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <h1 className="font-kaisei-decol text-2xl md:text-3xl xl:text-6xl leading-9 xl:leading-16 font-semibold text-white capitalize text-start lg:text-center">
                  {project?.title}
                </h1>
                <p className="font-quicksand not-italic text-base md:text-lg xl:text-xl text-gray-200 text-start lg:text-center leading-relaxed font-medium pt-8">
                  123 Business Street
                  <br />
                  Andheri East, Mumbai
                  <br />
                  Maharashtra, India
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-full bg-(--color-bg) py-15 md:py-20 xl:py-40">
          <div className="pyramid-design-container">
            <MasonryGrid />
          </div>
        </section>
        <section className="w-full bg-(--color-bg)">
          <PyramidDesignContactForm />
        </section>
      </>
    );
  }
}
