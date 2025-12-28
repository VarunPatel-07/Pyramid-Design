"use client"
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function LottieAnimation({ path, width, height }: { path: string; width?: number; height?: number }) {
  return (
    <DotLottieReact
      src={path}
      loop
      autoplay
      className="w-full h-full"
      width={width || 210}
      height={height || 210}
    />
  );
}

export default LottieAnimation;
