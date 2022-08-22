import React from "react";
import { ContactUs } from "../../Contact/ContactUs";
import { ContactHeading } from "./ContactHeading/ContactHeading";
import { ContactMoreInfo } from "./ContactMoreInfo/ContactMoreInfo";

export let Contact = () => {
  return (
    <>
      <ContactHeading />
      <ContactMoreInfo />
      <ContactUs />
    </>
  );
};
