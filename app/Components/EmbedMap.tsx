import React from "react";

function EmbedMap() {
  return (
    <div className="w-full h-full aspect-video overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.9829242344213!2d72.1301095!3d23.854740099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c87e585171741%3A0xfbc89ae09b2c6a34!2sPyramid%20designs!5e0!3m2!1sen!2sin!4v1765541864622!5m2!1sen!2sin"
        className="aspect-video h-full w-full"
        style={{ border: "0" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}

export default EmbedMap;
