import { CommonHeaderInterface } from "../Interface/Interface";

function CommonHeader({ title, description, maxWidth }: CommonHeaderInterface) {
  return (
    <div className="w-full pt-10">
      <div className="pyramid-design-container bg-(--section-title-bg) rounded-xl overflow-hidden">
        <div className="w-full py-25 px-10">
          <div
            className="w-full flex flex-col items-center justify-center gap-5 mx-auto"
            style={{ maxWidth: `${maxWidth}px` }}>
            <h1
              className="font-kaisei-decol text-5xl leading-16 font-semibold text-(--color-text) capitalize text-start lg:text-center"
              dangerouslySetInnerHTML={{ __html: title }}></h1>
            <p
              className="font-quicksand text-xl font-medium text-(--color-text-secondary) text-center"
              dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonHeader;
