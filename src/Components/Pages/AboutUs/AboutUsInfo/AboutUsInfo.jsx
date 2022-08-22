import React from "react";
import { AboutUsInfoItems } from "./AboutUsInfoItems";

export let AboutUsInfo = () => {
  return (
    <>
      <section className="get-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "assets/images/about-left-image.png"
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h6>Get info</h6>
                <h4>
                  Read More <em>About Us</em>
                </h4>
                <p>
                  You are allowed 100% to download and use our templates from
                  TemplateMo for your commercial or business websites. You are{" "}
                  <strong>not allowed</strong> to redistribute this template ZIP
                  file on any other website without a permission from us.
                  <br />
                  <br />
                  There are some unethical people on this planet earth who
                  copied our templates so easily without any permission from us
                  and then reposted on their websites. Their Karma will hit them
                  really hard. Yeah, that is right.
                </p>
              </div>
              <div className="row">
                <AboutUsInfoItems
                  AboutUsItems_img="assets/images/service-icon-01.png"
                  AboutUsItems_alt="service-icon-01.png"
                  AboutUsItems_title="Best Strategy"
                  AboutUsItems_text=" Food & truck tumeric taxidermy hoodie chiasore bitters retroed
                gentrify street portland."
                />

                <AboutUsInfoItems
                  AboutUsItems_img="assets/images/service-icon-02.png"
                  AboutUsItems_alt="service-icon-02.png"
                  AboutUsItems_title="Creative Ideas"
                  AboutUsItems_text=" Food & truck tumeric taxidermy hoodie chiasore bitters retroed
                gentrify street portland."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
