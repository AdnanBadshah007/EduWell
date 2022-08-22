import React from "react";
import { ContactMoreInfoProps } from "./ContactMoreInfoProps";

export let ContactMoreInfo = () => {
  return (
    <>
      <section className="more-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-heading">
                <h6>More Info</h6>
                <h4>
                  Read More <em>About Us</em>
                </h4>
              </div>
              <p>
                Trust fund nocore broklyn humblebrag mustache pork kitsch,
                bicycle rights hexagon schlitz keytar palo is santo drinking
                vinegar fam ramps. <br />
                <br />
                Four dollar toast and edison bulb vinyl, listicle hashtag pug
                scenester typewrit er yuccie street artboard or whatever to fill
                place.
              </p>
              <ul>
                <li>- Selfies you probably haven't heard of them.</li>
                <li>- Tousled cold-pressed chicharrones yuccie.</li>
                <li>- Pabst iPhone chartreuse shabby chic tumeric.</li>
                <li>- Scenester normcore mumblecore snackwave.</li>
              </ul>
            </div>
            <div className="col-lg-6 offset-lg-1 align-self-center">
              <div className="row">
                <ContactMoreInfoProps
                  Count_digit="125"
                  Count_title="Finished Projects"
                />
                <ContactMoreInfoProps
                  Count_digit="11"
                  Count_title="Years Experience"
                />
                <ContactMoreInfoProps
                  Count_digit="87"
                  Count_title="Happy Clients"
                />
                <ContactMoreInfoProps
                  Count_digit="24"
                  Count_title="Awwards Won"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
