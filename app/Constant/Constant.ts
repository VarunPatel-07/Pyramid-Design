import { NavbarNavLinkArrayInterface, ourImpactInNumberArrayInterface } from "../Interface/Interface";

export const NavbarNavLinksArray: NavbarNavLinkArrayInterface[] = [
  {
    label: "about us",
    href: "/about-us",
    val: "About Us",
  },
  {
    label: "projects",
    href: "/projects",
    val: "Projects",
  },
  {
    label: "team",
    href: "/team",
    val: "Team",
  },
];

export const ourImpactInNumberArray: ourImpactInNumberArrayInterface[] = [
  {
    id: 1,
    title: "6+",
    description: "Years of experience",
  },
  {
    id: 2,
    title: "100+",
    description: "Project Delivered",
  },
  {
    id: 3,
    title: "200+",
    description: "Happy Customer",
  },
];

export const getEnterAnimationClass = {
  "top-right": "animate-enter-top-right",
  "top-left": "animate-enter-top-left",
  "bottom-right": "animate-enter-bottom-right",
  "bottom-left": "animate-enter-bottom-left",
  center: "animate-enter-center",
};
export const getExitAnimationClass = {
  "top-right": "animate-exit-top-right",
  "top-left": "animate-exit-top-left",
  "bottom-right": "animate-exit-bottom-right",
  "bottom-left": "animate-exit-bottom-left",
  center: "animate-exit-center",
};
