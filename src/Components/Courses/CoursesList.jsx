import React from "react";

export let CoursesList = (props) => {
  return (
    <>
      <div>
        <div class="left-image">
          <img
            src={process.env.PUBLIC_URL + `${props.Courses_Img}`}
            alt={props.Courses_alt}
          />
          <div class="price">
            <h6>{props.Courses_price}</h6>
          </div>
        </div>
        <div class="right-content">
          <h4>{props.Courses_title}</h4>
          <p>{props.Courses_Text}</p>
          <span>{props.Courses_Hours}</span>
          <span>{props.Courses_Weeks}</span>
          <span class="last-span">{props.Courses_Certificate}</span>
          <div class="text-button">
            <a href="contact-us.html">Subscribe Course</a>
          </div>
        </div>
      </div>
    </>
  );
};

// Did you know that you can visit <a rel="nofollow" href="https://www.toocss.com/" target="_blank">TooCSS website</a> for latest listing of HTML templates and a variety of useful templates.
//                 <br/><br/>You just need to go and visit that website right now. IF you have any suggestion or comment about this template, you can feel free to go to contact page for our email address.
