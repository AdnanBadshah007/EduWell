import React from "react";
import { Banner } from "../../Banner/Banner";
import { AboutUsHeading } from "./AboutUsHeading/AboutUsHeading";
import { AboutUsInfo } from "./AboutUsInfo/AboutUsInfo";
import { AboutUsOurTeam } from "./AboutUsTeam/AboutUsOurTeam";
import { Testimonials } from "../../Testimonials/Testmonials";
import { OurOffice } from "../OurOffice/OurOffice";

export let AboutUs = () => {
  return (
    <>
      <AboutUsHeading />
      <AboutUsInfo />
      <AboutUsOurTeam />
      <Banner />
      <Testimonials />
      <OurOffice />
    </>
  );
};
