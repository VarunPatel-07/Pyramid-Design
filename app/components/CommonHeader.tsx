import { CommonHeaderInterface } from "../Interface/Interface";

function CommonHeader({ title, description, maxWidth }: CommonHeaderInterface) {
  return (
    <div className="w-full pt-7 md:pt-10 px-4">
      <div className="pyramid-design-container px-0! bg-(--section-title-bg) rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl overflow-hidden">
        <div className="w-full px-5 py-8 md:py-15 xl:py-25 md:px-10">
          <div
            className="w-full flex flex-col items-center justify-center gap-5 mx-auto"
            style={{ maxWidth: `${maxWidth}px` }}>
            <h1
              className="font-kaisei-decol text-2xl md:text-3xl xl:text-5xl leading-9 xl:leading-16 font-semibold text-(--color-text) capitalize text-start lg:text-center"
              dangerouslySetInnerHTML={{ __html: title }}></h1>
            <p
              className="font-quicksand text-sm text-start xl:text-xl font-medium text-(--color-text-secondary) lg:text-center"
              dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonHeader;
