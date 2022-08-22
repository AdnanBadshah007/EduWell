import React from "react";

export let Product = (props) => {
  return (
    <>
      <div class="col-lg-12">
        <div class="info-item">
          <div class="icon">
            <img
              src={process.env.PUBLIC_URL + `${props.Product_img}`}
              alt={props.Product_alt}
            />
          </div>
          <h4>{props.Product_title}</h4>
          <p>{props.Product_text}</p>
        </div>
      </div>
    </>
  );
};
