import React from "react";
import { TestimonialCarousel } from "./TestimonialCarousel";

export let Testimonials = () => {
  return (
    <>
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h6>Testimonials</h6>
                <h4>
                  What They <em>Think</em>
                </h4>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="owl-testimonials owl-carousel"
                style={{ position: "relative", zIndex: 5 }}
              >
                <TestimonialCarousel
                  Testimonials_text="“just think about TemplateMo if you need free CSS templates for your website”"
                  Testimonials_title="Catherine Walk"
                  Testimonials_Founder="CEO &amp; Founder"
                  Testimonials_img="assets/images/quote.png"
                  Testimonials_alt="quote.png"
                />

                <TestimonialCarousel
                  Testimonials_text="“think about our website first when you need free HTML templates for your website”"
                  Testimonials_title="CDavid Martin"
                  Testimonials_Founder="CTO of Tech Company"
                  Testimonials_img="assets/images/quote.png"
                  Testimonials_alt="quote.png"
                />

                <TestimonialCarousel
                  Testimonials_text="“just think about our website wherever you need free templates for your website”"
                  Testimonials_title="Sophia Whity"
                  Testimonials_Founder="CEO and Co-Founder"
                  Testimonials_img="assets/images/quote.png"
                  Testimonials_alt="quote.png"
                />

                <TestimonialCarousel
                  Testimonials_text="“Praesent accumsan condimentum arcu, id porttitor est semper nec. Nunc diam lorem.”"
                  Testimonials_title="Helen Shiny"
                  Testimonials_Founder="Tech Officer"
                  Testimonials_img="assets/images/quote.png"
                  Testimonials_alt="quote.png"
                />

                <TestimonialCarousel
                  Testimonials_text="“Praesent accumsan condimentum arcu, id porttitor est semper nec. Nunc diam lorem.”"
                  Testimonials_title="George Soft"
                  Testimonials_Founder="Gadget Reviewer"
                  Testimonials_img="assets/images/quote.png"
                  Testimonials_alt="quote.png"
                />

                <TestimonialCarousel
                  Testimonials_text="“Praesent accumsan condimentum arcu, id porttitor est semper nec. Nunc diam lorem.”"
                  Testimonials_title="Andrew Hall"
                  Testimonials_Founder="Marketing Manager"
                  Testimonials_img="assets/images/quote.png"
                  Testimonials_alt="quote.png"
                />

                <TestimonialCarousel
                  Testimonials_text="“Praesent accumsan condimentum arcu, id porttitor est semper nec. Nunc diam lorem.”"
                  Testimonials_title="Maxi Power"
                  Testimonials_Founder="Fashion Designer"
                  Testimonials_img="assets/images/quote.png"
                  Testimonials_alt="quote.png"
                />

                <TestimonialCarousel
                  Testimonials_text="“just think about TemplateMo if you need free CSS templates for your website”"
                  Testimonials_title="Olivia Too"
                  Testimonials_Founder="Creative Designer"
                  Testimonials_img="assets/images/quote.png"
                  Testimonials_alt="quote.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
