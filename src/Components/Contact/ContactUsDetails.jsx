import React from "react";



export let ContactUsDetails = (props) => {
    return (
        <>
            <div className={props.ContactUsDetails_Class}>
                    <div className="contact-info">
                      <div className="icon">
                        <i className="fa fa-phone"></i>
                      </div>
                      <h4>{props.ContactUsDetails_title}</h4>
                      <span>{props.ContactUsDetails_Number}</span>
                    </div>
                  </div>
                
        </>
    )
}