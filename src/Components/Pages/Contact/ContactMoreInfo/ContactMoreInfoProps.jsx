import React from "react";

export let ContactMoreInfoProps = (props) => {
  return (
    <>
      <div className="col-6">
        <div className="count-area-content">
          <div className="count-digit">{props.Count_digit}</div>
          <div className="count-title">{props.Count_title}</div>
        </div>
      </div>
    </>
  );
};
