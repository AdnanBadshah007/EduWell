import React from "react";
import { Home } from "./Components/Home/Home";
import { NavBar } from "./Components/NavBar";
import { Services } from "./Components/Services/Services";
import { Courses } from "./Components/Courses/Courses";
import { Testimonials } from "./Components/Testimonials/Testmonials";
import { AboutUs } from "./Components/Pages/AboutUs/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContactUs } from "./Components/Contact/ContactUs";
import { Contact } from "./Components/Pages/Contact/Contact";
import { OurServices } from "./Components/Pages/OurServices/OurServices";
import { Banner } from "./Components/Banner/Banner";

export let App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Home />
        <Services />
        <Courses />
        <Banner />
        <Testimonials />
        <ContactUs />
        <Routes>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/ourservices" element={<OurServices />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );
};
