import React from "react";

export let TestimonialCarousel = (props) => {
  return (
    <>
      <div className="item">
        <p>{props.Testimonials_text}</p>
        <h4>{props.Testimonials_title}</h4>
        <span>{props.Testimonials_Founder}</span>
        <img
          src={process.env.PUBLIC_URL + `${props.Testimonials_img}`}
          alt={props.Testimonials_alt}
        />
      </div>
    </>
  );
};
