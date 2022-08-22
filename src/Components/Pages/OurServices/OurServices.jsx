import React from "react";
import { Services } from "../../Services/Services";
import { Banner } from "../../Banner/Banner";
import { OurServiceHeader } from "./OurServiceHeader/OurServiceHeader";
import { OurOffice } from "../OurOffice/OurOffice";
import { OurServiceProduct } from "./OurServiceProduct/OurServiceProduct";

export let OurServices = () => {
  return (
    <>
      <OurServiceHeader />
      <Services />
      <Banner />
      <OurServiceProduct />
      <OurOffice />
    </>
  );
};
