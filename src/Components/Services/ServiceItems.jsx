import React from "react";

export let ServiceItems = (props) => {
  return (
    <>
      <div className="item">
        <div className="service-item">
          <div className="icon">
            <img
              src={process.env.PUBLIC_URL + `${props.Service_Icons}`}
              alt={props.Service_alt}
            />
          </div>
          <h4>{props.Service_Title}</h4>
          <p>{props.Service_Text}</p>
        </div>
      </div>
    </>
  );
};
