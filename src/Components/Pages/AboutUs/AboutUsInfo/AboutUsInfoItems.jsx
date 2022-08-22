import React from "react";

export let AboutUsInfoItems = (props) => {
  return (
    <>
      <div className="col-lg-6">
        <div className="info-item">
          <div className="icon">
            <img
              src={process.env.PUBLIC_URL + `${props.AboutUsItems_img}`}
              alt={props.AboutUsItems_alt}
            />
          </div>
          <h4>{props.AboutUsItems_title}</h4>
          <p>{props.AboutUsItems_text}</p>
        </div>
      </div>
    </>
  );
};
