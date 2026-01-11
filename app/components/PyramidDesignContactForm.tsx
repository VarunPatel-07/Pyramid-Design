/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import countryData from "@/app/data/country-info.json";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { countryObject, PyramidDesignContactFormDataInterface } from "../Interface/Interface";
import { NotificationContext, NotificationContextApiProps } from "../context/notification/NotificationContextApi";
import { formateAndVerifyPhoneNumber, isValidEmail, verifyPhoneNumberLength } from "../helper/Helper";
import EmbedMap from "./EmbedMap";
import Input from "./common/Input";
import SearchDrop from "./common/SearchDrop";
import TextArea from "./common/TextArea";

const BASE_URL = process.env.NEXT_PUBLIC_ORBIT_CONTACT_FORM_BASE_URL;
const ORBIT_API_KEY = process.env.NEXT_PUBLIC_ORBIT_API_KEY;
const ORBIT_API_SECRETE = process.env.NEXT_PUBLIC_ORBIT_API_SECRETE;
const ORBIT_SAY_HI_FORM_ID = process.env.NEXT_PUBLIC_ORBIT_SAY_HI_FORM_ID;

function PyramidDesignContactForm({ showTitle = true }: { showTitle?: boolean }) {
  const { handelNotification } = useContext(NotificationContext) as NotificationContextApiProps;

  const CountryDataRef = useRef(false);
  const [dropDownSelectedValue, setDropDownSelectedValue] = useState<string | number>("");
  const [countryOptionsDataArray, setCountryOptionsDataArray] = useState<Array<countryObject>>([]);
  const [showError, setShowError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<PyramidDesignContactFormDataInterface>({
    full_name: "",
    email: "",
    phone_number: "",
    service: "",
    your_message: "",
    country_info: {
      country_code: "",
      country_flag: "",
      country_name: "",
      country_number_code: "",
    },
  });

  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const is_phone_verified = verifyPhoneNumberLength(
      formData.phone_number?.trim(),
      dropDownSelectedValue ? JSON.parse(dropDownSelectedValue as string)?.country_code : "IN"
    );

    if (
      formData?.full_name?.trim() == "" &&
      !isValidEmail(formData?.email) &&
      !is_phone_verified &&
      formData?.service == ""
    ) {
      setShowError(true);
      return;
    } else {
      setLoading(true);

      const requestData: PyramidDesignContactFormDataInterface = {
        full_name: formData.full_name,
        email: formData.email,
        phone_number: formData.phone_number,
        your_message: formData.your_message,
        country_info: JSON.parse(dropDownSelectedValue as string),
        service: formData.service,
      };

      try {
        const response = await fetch(
          `${BASE_URL}?api_key=${ORBIT_API_KEY}&api_secret=${ORBIT_API_SECRETE}&form_id=${ORBIT_SAY_HI_FORM_ID}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data?.success) {
          window.location.href = "/thank-you?source=contact";
        } else {
          handelNotification(
            { success: data?.success || false, message: "Unable To Submit Your Response Right Now" },
            "center"
          );
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        handelNotification({ success: false, message: "Some Thing Went Wrong" }, "center");
      }
    }
  };

  const handleInputChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleClickOnInquiryFormId = (data: string | object) => {
    if (typeof data === "string") {
      setFormData((prev) => ({ ...prev, service: data }));
    }
  };

  const fetchAndFilterUserCountry = async () => {
    try {
      // Step 1: Get user country info from ipapi
      const response = await fetch("https://api.ipinfo.io/lite/me?token=13cd1dabec5b5b");
      if (!response.ok) throw new Error("Failed to fetch IP info");

      const data = await response.json();
      const countryCode = data?.country_code?.toUpperCase() || "IN";

      // Step 2: Filter from local data.json
      const matchedCountry =
        countryData.find((country) => country.country_code.toUpperCase() === countryCode) ||
        countryData.find((c) => c.country_code.toUpperCase() === "IN");

      // Step 3: Return both all countries and filtered one
      return {
        success: true,
        countryOptionsData: countryData,
        filteredCountry: matchedCountry,
      };
    } catch (error) {
      console.error("Error fetching country:", error);
      const fallback = countryData.find((c) => c.country_code.toUpperCase() === "IN");
      return {
        success: true,
        countryOptionsData: countryData,
        filteredCountry: fallback,
      };
    }
  };

  useEffect(() => {
    const loadCountryData = async () => {
      if (CountryDataRef.current) return;
      CountryDataRef.current = true;

      if (countryOptionsDataArray.length === 0) {
        const response = await fetchAndFilterUserCountry();
        if (response?.success) {
          setCountryOptionsDataArray(response.countryOptionsData);
          setDropDownSelectedValue(JSON.stringify(response.filteredCountry));
        }
      }
    };
    loadCountryData();
  }, [countryOptionsDataArray]);
  return (
    <div className="w-full h-full pb-15 md:pb-20 xl:pb-40">
      <div className="pyramid-design-container">
        {showTitle && (
          <div className="w-full flex flex-col items-center justify-center gap-5 pb-10 md:pb-15 xl:pb-25">
            <h2 className="font-kaisei-decol text-2xl md:text-3xl xl:text-5xl leading-10 xl:leading-16 text-(--color-text) flex items-stretch justify-start gap-4 capitalize font-semibold text-center">
              <span className="block">Have A Project In Mind?</span>
            </h2>
            <p className="font-quicksand md:max-w-[90%] lg:max-w-180 text-sm md:text-base lg:text-lg text-(--color-text-secondary)">
              <strong>Let’s bring your ideas to life.</strong> Whether you have a clear vision or just the spark of an
              idea, we’re here to help. Fill out the form,
              <strong> reach us by phone or email, or visit us at our location</strong> let’s start a conversation and
              build something meaningful together.
            </p>
          </div>
        )}
        <div className="flex flex-col slg:flex-row items-stretch justify-between gap-6 xl:gap-20">
          <div className="w-full slg:w-1/2">
            <div className="w-full h-full flex flex-col md:flex-row slg:flex-col! items-stretch justify-between gap-5 slg:gap-7 xl:gap-10">
              <div className="bg-(--theme-dark-color) rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl p-5 slg:p-10 slg:h-[50%]">
                <div className="w-full h-full flex flex-col text-start justify-start md:justify-center gap-6 lg:gap-10">
                  <div className="flex flex-col items-start justify-start gap-1.5">
                    <span className="font-quicksand text-white/50 font-medium text-sm md:text-lg slg:text-xl!">
                      Email Us:
                    </span>
                    <Link
                      href="mailto:contact.pyramiddesign.com"
                      className="text-(--color-bg) font-kaisei-decol font-bold text-base slg:text-2xl pl-1">
                      contact.pyramiddesign.com
                    </Link>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-1.5">
                    <span className="font-quicksand text-white/50 font-medium text-sm md:text-lg slg:text-xl!">
                      Call Us:
                    </span>
                    <Link
                      href="tel:93769 15625"
                      className="text-(--color-bg) font-kaisei-decol font-bold text-base slg:text-2xl pl-1">
                      +91-93769 15625
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full h-full grow">
                <EmbedMap />
              </div>
            </div>
          </div>
          <div className="w-full slg:w-1/2">
            <div className="bg-[#b7c3cd20] p-5 md:p-10 lg:p-10 rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl h-full">
              <form className="flex flex-col items-start w-full justify-between gap-5 h-full" onSubmit={handelSubmit}>
                <div className="w-full">
                  <Input
                    type="text"
                    label="Full Name"
                    className="border border-black/30 text-black rounded-lg bg-white"
                    placeHolder="Enter Your Full Name"
                    isRequiredField
                    value={formData.full_name}
                    onChange={(e) => handleInputChange("full_name", e.target.value)}
                    showError={showError && formData.full_name.trim() == ""}
                    errorMessage={showError && formData.full_name.trim() == "" ? "this field is required" : ""}
                    disabled={loading}
                  />
                </div>
                <div className="w-full">
                  <Input
                    type="email"
                    label="Email"
                    className="border border-black/30 text-black rounded-lg  bg-white"
                    placeHolder="Enter Your Email"
                    isRequiredField
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    showError={showError && !isValidEmail(formData.email)}
                    errorMessage={showError && !isValidEmail(formData.email) ? "this field is required" : ""}
                    disabled={loading}
                  />
                </div>
                <div className="w-full">
                  <Input
                    type="number"
                    className="border border-black/30 text-black rounded-lg rounded-l-none bg-white"
                    label="Phone Number"
                    placeHolder="Phone Number"
                    isRequiredField={true}
                    value={formateAndVerifyPhoneNumber(
                      formData?.phone_number,
                      dropDownSelectedValue ? JSON.parse(dropDownSelectedValue as string)?.country_code : "IN"
                    )}
                    onChange={(e) => handleInputChange("phone_number", e.target.value)}
                    countryDropDownPosition="bottom"
                    dropDownSelectedValue={
                      dropDownSelectedValue ? JSON.parse(dropDownSelectedValue as string)?.country_number_code : "+91"
                    }
                    setDropDownSelectedValue={setDropDownSelectedValue}
                    countryOptionsData={countryOptionsDataArray}
                    showError={
                      showError &&
                      !verifyPhoneNumberLength(
                        formData.phone_number?.trim(),
                        dropDownSelectedValue ? JSON.parse(dropDownSelectedValue as string)?.country_code : "IN"
                      )
                    }
                    errorMessage={
                      showError &&
                      !verifyPhoneNumberLength(
                        formData.phone_number?.trim(),
                        dropDownSelectedValue ? JSON.parse(dropDownSelectedValue as string)?.country_code : "IN"
                      )
                        ? "Please Enter valid Phone No"
                        : ""
                    }
                    disabled={loading}
                  />
                </div>

                <div className="w-full">
                  <SearchDrop
                    options={["Architectural Design", "Interior Design", "3D Modeling & Visualization"]}
                    emptyDataMessage="No Service Available"
                    position="bottom"
                    searchKey=""
                    className="border border-black/30 text-black rounded-lg bg-white"
                    label="Select A Service"
                    isRequiredField
                    onSelectValBtn={handleClickOnInquiryFormId}
                    showError={showError && formData.service == ""}
                    errorMessage={showError && formData.service == "" ? "this field is required" : ""}
                    disabled={loading}
                  />
                </div>
                <div className="w-full">
                  <TextArea
                    label="Message"
                    value={formData.your_message}
                    onChange={(e) => handleInputChange("your_message", e.target.value)}
                    showError={false}
                    disabled={loading}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-5 py-4font-quicksand text-base lg:text-lg text-(--color-text) items-center justify-center py-3 rounded-lg capitalize bg-(--color-gold-light) hover:bg-(--color-gold-hover) group transition-all font-semibold cursor-pointer disabled:opacity-60 md:max-w-[60%] slg:max-w-full! mx-auto"
                  disabled={loading}>
                  {loading ? "Sending...." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PyramidDesignContactForm;
