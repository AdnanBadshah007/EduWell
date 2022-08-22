import React from "react";

export let AboutUsMemberDetails = (props) => {
  return (
    <>
      <li className={props.MemberDetails_className}>
        <div>
          <div className="left-content">
            <h4>{props.MemberDetails_title}</h4>
            <p>{props.MemberDetails_text}</p>
            <span>
              <a href="#">Facebook</a>
            </span>
            <span>
              <a href="#">Twitter</a>
            </span>
            <span className="last-span">
              <a href="#">Linkedin</a>
            </span>
            <div className="text-button">
              <a href="contact-us.html">Contact Member</a>
            </div>
          </div>
          <div className="right-image">
            <img
              src={process.env.PUBLIC_URL + `${props.MemberDetails_img}`}
              alt={props.MemberDetails_alt}
            />
          </div>
        </div>
      </li>
    </>
  );
};
