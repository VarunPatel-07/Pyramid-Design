import Link from "next/link";
import LottieAnimation from "./LottieAnimation";
import { IoArrowForward } from "react-icons/io5";

function NotFoundCompetent() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 py-25 bg-gray-50 text-center">
      <div className="max-w-100 max-h-100">
        <LottieAnimation path="/lottie/404-animation.lottie" width={300} height={300} />
      </div>
      <p className="text-lg font-space-grotesk text-gray-600 mt-4 mb-8">The page you’re looking for doesn’t exist.</p>

      <Link
        href="/"
        title="Home"
        aria-label="Home"
        className="font-quicksand text-sm lg:text-lg text-(--color-text) flex items-center justify-center pt-2.5 pb-3 px-6 rounded-lg capitalize bg-(--color-gold-light) hover:bg-(--color-gold-hover) group transition-all font-semibold">
        <span className="flex items-center justify-start gap-3">
          <span>Go back home</span>
          <IoArrowForward className="text-base lg:text-2xl -rotate-45 group-hover:rotate-0 transition-all" />
        </span>
      </Link>
    </div>
  );
}

export default NotFoundCompetent;
