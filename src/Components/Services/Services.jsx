import React from "react";
import { ServiceItems } from "./ServiceItems";

export let Services = () => {
  return (
    <>
      {/* Services Area Start  */}
      <section className="services" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h6>Our Services</h6>
                <h4>
                  Provided <em>Services</em>
                </h4>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="owl-service-item owl-carousel">
                <ServiceItems
                  Service_Icons="assets/images/service-icon-01.png"
                  Service_alt="service-icon-01.png"
                  Service_Title="Useful Tricks"
                  Service_Text="EduWell is the professional HTML5 template for your school or university websites."
                />
                <ServiceItems
                  Service_Icons="assets/images/service-icon-02.png"
                  Service_alt="service-icon-02.png"
                  Service_Title="Creative Ideas"
                  Service_Text="You can download and use this EduWell Template for your teaching and learning stuffs."
                />
                <ServiceItems
                  Service_Icons="assets/images/service-icon-03.png"
                  Service_alt="service-icon-03.png"
                  Service_Title="Ready Target"
                  Service_Text="Please tell your friends about the best CSS template website that is TemplateMo."
                />
                <ServiceItems
                  Service_Icons="assets/images/service-icon-04.png"
                  Service_alt="service-icon-04.png"
                  Service_Title="Technology"
                  Service_Text="Aenean bibendum consectetur ex eu porttitor. Pellentesque id ultrices metus."
                />
                <ServiceItems
                  Service_Icons="assets/images/service-icon-01.png"
                  Service_alt="service-icon-01.png"
                  Service_Title="Useful Tricks"
                  Service_Text="EduWell is the professional HTML5 template for your school or university websites."
                />
                <ServiceItems
                  Service_Icons="assets/images/service-icon-02.png"
                  Service_alt="service-icon-02.png"
                  Service_Title="Creative Ideas"
                  Service_Text="You can download and use this EduWell Template for your teaching and learning stuffs."
                />
                <ServiceItems
                  Service_Icons="assets/images/service-icon-03.png"
                  Service_alt="service-icon-03.png"
                  Service_Title="Ready Target"
                  Service_Text="Please tell your friends about the best CSS template website that is TemplateMo."
                />
                <ServiceItems
                  Service_Icons="assets/images/service-icon-04.png"
                  Service_alt="service-icon-04.png"
                  Service_Title="Technology"
                  Service_Text="Aenean bibendum consectetur ex eu porttitor. Pellentesque id ultrices metus."
                />
                <ServiceItems
                  Service_Icons="assets/images/service-icon-01.png"
                  Service_alt="service-icon-01.png"
                  Service_Title="Useful Tricks"
                  Service_Text="EduWell is the professional HTML5 template for your school or university websites."
                />
                <ServiceItems
                  Service_Icons="assets/images/service-icon-02.png"
                  Service_alt="service-icon-02.png"
                  Service_Title="Creative Ideas"
                  Service_Text="You can download and use this EduWell Template for your teaching and learning stuffs."
                />
                <ServiceItems
                  Service_Icons="assets/images/service-icon-03.png"
                  Service_alt="service-icon-03.png"
                  Service_Title="Ready Target"
                  Service_Text="Please tell your friends about the best CSS template website that is TemplateMo."
                />
                <ServiceItems
                  Service_Icons="assets/images/service-icon-04.png"
                  Service_alt="service-icon-04.png"
                  Service_Title="Technology"
                  Service_Text="Aenean bibendum consectetur ex eu porttitor. Pellentesque id ultrices metus."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Area End  */}
    </>
  );
};
