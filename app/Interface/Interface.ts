import { StaticImageData } from "next/image";

export interface NavbarNavLinkArrayInterface {
  label: string;
  href: string;
  val: string;
}

export interface MarqueeItem {
  id: number;
  content: string;
}

export interface ourImpactInNumberArrayInterface {
  title: string;
  description: string;
  id: number;
}

export interface OurProjectInfoArrayInterface {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
}
