import { StaticImageData } from "next/image";
import React, { ReactElement, SetStateAction } from "react";

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

export interface countryObject {
  country_flag: string;
  country_name: string;
  country_code: string;
  country_number_code: string;
}
export interface SearchDropProps {
  name?: string;
  className?: string;
  label?: string;
  isRequiredField?: boolean;
  selectedValue?: string | string[];
  setSelectedValue?: React.Dispatch<SetStateAction<string>>;
  onSelectValBtn?: (data: string | object, index?: number) => void;
  placeHolderName?: string;
  options: Array<string | object>;
  searchKey: string;
  position: "bottom" | "top";
  emptyDataMessage: string;
  loading?: boolean;
  showSearchBar?: boolean;
  showError?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  type?: "select" | "multi-select";
}

export interface PyramidDesignContactFormDataInterface {
  full_name: string;
  email: string;
  phone_number: string;
  service: string;
  your_message: string;
  country_info: countryObject;
}

export interface SocialMediaLinksArrayInterface {
  link: string;
  icon: ReactElement;
  target: "_blank" | "_self";
  name: string;
}

export interface OurCoreValuesArrayInterface {
  icon: ReactElement;
  title: string;
  description: string;
}

export interface CommonHeaderInterface {
  title: string;
  description: string;
  maxWidth: string;
}
