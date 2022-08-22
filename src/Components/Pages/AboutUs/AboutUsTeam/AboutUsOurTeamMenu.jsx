import React from "react";

export let AboutUsOurTeamMenu = (props) => {
  return (
    <>
      <div className={props.OurTeam_class}>
        <img
          src={process.env.PUBLIC_URL + `${props.OurTeam_img}`}
          alt={props.OurTeam_alt}
        />
        <h4>{props.OurTeam_title}</h4>
        <span>{props.OurTeam_text}</span>
      </div>
    </>
  );
};
