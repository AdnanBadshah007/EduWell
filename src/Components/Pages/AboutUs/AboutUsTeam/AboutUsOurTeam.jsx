import React from "react";
import { AboutUsMemberDetails } from "./AboutUsMemberDetails";
import { AboutUsOurTeamMenu } from "./AboutUsOurTeamMenu";

export let AboutUsOurTeam = () => {
  return (
    <>
      <section className="our-team">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h6>Our Team</h6>
                <h4>
                  Our Team <em>Members</em>
                </h4>
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1">
              <div className="naccs">
                <div className="tabs">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="menu">
                        <AboutUsOurTeamMenu
                          OurTeam_className="active"
                          OurTeam_img={"assets/images/team-member-thumb-01.jpg"}
                          OurTeam_alt="team-member-thumb-01.jpg"
                          OurTeam_title="Ruby Foster"
                          OurTeam_text="CEO-FOUNDER"
                        />
                        <AboutUsOurTeamMenu
                          OurTeam_className=""
                          OurTeam_img={"assets/images/team-member-03.jpg"}
                          OurTeam_alt="team-member-thumb-03.jpg"
                          OurTeam_title="Luis Oconnell"
                          OurTeam_text="CEO-FOUNDER"
                        />
                        <AboutUsOurTeamMenu
                          OurTeam_className=""
                          OurTeam_img={"assets/images/team-member-02.jpg"}
                          OurTeam_alt="team-member-thumb-02.jpg"
                          OurTeam_title="Jackie Riggs"
                          OurTeam_text="CEO-FOUNDER"
                        />
                        <AboutUsOurTeamMenu
                          OurTeam_className=""
                          OurTeam_img={"assets/images/team-member-04.jpg"}
                          OurTeam_alt="team-member-thumb-04.jpg"
                          OurTeam_title="Alfred Small"
                          OurTeam_text="CEO-FOUNDER"
                        />
                        <AboutUsOurTeamMenu
                          OurTeam_className=""
                          OurTeam_img={"assets/images/team-member-05.jpg"}
                          OurTeam_alt="team-member-thumb-05.jpg"
                          OurTeam_title="Denis Mitchel"
                          OurTeam_text="CEO-FOUNDER"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <ul className="nacc">
                        <AboutUsMemberDetails
                          MemberDetails_className="active"
                          MemberDetails_title="Ruby Foster"
                          MemberDetails_text="Quinoa roof party squid prism sustainable letterpress cray hammock
                          tumeric man bun mixtape tofu subway tile cronut. Deep v ennui
                          subway tile organic seitan kogi freegan bicycle rights try-hard
                          green juice probably."
                          MemberDetails_img="assets/images/team-member-01.jpg"
                          MemberDetails_alt="team-member-01.jpg"
                        />
                        <AboutUsMemberDetails
                          MemberDetails_className=""
                          MemberDetails_title="Luis Oconnell"
                          MemberDetails_text="Quinoa roof party squid prism sustainable letterpress cray hammock
                          tumeric man bun mixtape tofu subway tile cronut. Deep v ennui
                          subway tile organic seitan kogi freegan bicycle rights try-hard
                          green juice probably."
                          MemberDetails_img="assets/images/team-member-03.jpg"
                          MemberDetails_alt="team-member-03.jpg"
                        />
                        <AboutUsMemberDetails
                          MemberDetails_className=""
                          MemberDetails_title="Jackie Riggs"
                          MemberDetails_text="Quinoa roof party squid prism sustainable letterpress cray hammock
                          tumeric man bun mixtape tofu subway tile cronut. Deep v ennui
                          subway tile organic seitan kogi freegan bicycle rights try-hard
                          green juice probably."
                          MemberDetails_img="assets/images/team-member-02.jpg"
                          MemberDetails_alt="team-member-02.jpg"
                        />
                        <AboutUsMemberDetails
                          MemberDetails_className=""
                          MemberDetails_title="Alfred Small"
                          MemberDetails_text="Quinoa roof party squid prism sustainable letterpress cray hammock
                          tumeric man bun mixtape tofu subway tile cronut. Deep v ennui
                          subway tile organic seitan kogi freegan bicycle rights try-hard
                          green juice probably."
                          MemberDetails_img="assets/images/team-member-04.jpg"
                          MemberDetails_alt="team-member-04.jpg"
                        />
                        <AboutUsMemberDetails
                          MemberDetails_className=""
                          MemberDetails_title="Dennis Mitchel"
                          MemberDetails_text="Quinoa roof party squid prism sustainable letterpress cray hammock
                          tumeric man bun mixtape tofu subway tile cronut. Deep v ennui
                          subway tile organic seitan kogi freegan bicycle rights try-hard
                          green juice probably."
                          MemberDetails_img="assets/images/team-member-05.jpg"
                          MemberDetails_alt="team-member-05.jpg"
                        />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
