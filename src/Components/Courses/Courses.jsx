import React from "react";
import { CoursesList } from "./CoursesList";

export let Courses = () => {
  return (
    <>
      <section class="our-courses" id="courses">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="section-heading">
                <h6>OUR COURSES</h6>
                <h4>
                  What You Can <em>Learn</em>
                </h4>
                <p>
                  You just think about TemplateMo whenever you need free CSS
                  templates for your business website
                </p>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="naccs">
                <div class="tabs">
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="menu">
                        <div class="active gradient-border">
                          <span>Web Development</span>
                        </div>
                        <div class="gradient-border">
                          <span>Graphic Design</span>
                        </div>
                        <div class="gradient-border">
                          <span>Web Design</span>
                        </div>
                        <div class="gradient-border">
                          <span>WordPress</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <ul class="nacc">
                        <li class="active">
                          <CoursesList
                            Courses_Img="assets/images/courses-01.jpg"
                            Courses_alt="courses-01.jpg"
                            Courses_price="$128"
                            Courses_title="Web Development"
                            Courses_Text={[
                              ">Did you know that you can visit",
                              <a
                                rel="nofollow"
                                href="https://www.toocss.com/"
                                target="_blank"
                              >
                                TooCSS website
                              </a>,
                              "for latest listing of HTML templates and a variety of useful templates.",
                              <br />,
                              <br />,
                              "You just need to go and visit that website right now. IF you have any suggestion or comment about this template, you can feel free to go to contact page for our email address.",
                            ]}
                            Courses_Hours="36 Hours"
                            Courses_Weeks="4 Weeks"
                            Courses_Certificate="3 Certificates"
                          />
                        </li>
                        <li>
                          <CoursesList
                            Courses_Img="assets/images/courses-02.jpg"
                            Courses_alt="courses-02.jpg"
                            Courses_price="$156"
                            Courses_title="Creative Graphic Design"
                            Courses_Text={[
                              "You are not allowed to redistribute this template ZIP file on any other website without a permission from us.",
                              <br />,
                              <br />,
                              "There are some unethical people on this world copied and reposted our templates without any permission from us. Their Karma will hit them really hard. Yeah!",
                            ]}
                            Courses_Hours="48 Hours"
                            Courses_Weeks="6 Weeks"
                            Courses_Certificate="1 Certificates"
                          />
                        </li>
                        <li>
                          <CoursesList
                            Courses_Img="assets/images/courses-03.jpg"
                            Courses_alt="courses-03.jpg"
                            Courses_price="$184"
                            Courses_title="Web Design"
                            Courses_Text={[
                              "Quinoa roof party squid prism sustainable letterpress cray hammock tumeric man bun mixtape tofu subway tile cronut. Deep v ennui subway tile organic seitan.",
                              <br />,
                              <br />,
                              "Kogi VHS freegan bicycle rights try-hard green juice probably haven't heard of them cliche la croix af chillwave.",
                            ]}
                            Courses_Hours="28 Hours"
                            Courses_Weeks="4 Weeks"
                            Courses_Certificate="1 Certificates"
                          />
                        </li>
                        <li>
                          <CoursesList
                            Courses_Img="assets/images/courses-04.jpg"
                            Courses_alt="courses-04.jpg"
                            Courses_price="$76"
                            Courses_title="WordPress Introduction"
                            Courses_Text={[
                              "Quinoa roof party squid prism sustainable letterpress cray hammock tumeric man bun mixtape tofu subway tile cronut. Deep v ennui subway tile organic seitan.",
                              <br />,
                              <br />,
                              "Kogi VHS freegan bicycle rights try-hard green juice probably haven't heard of them cliche la croix af chillwave.",
                            ]}
                            Courses_Hours="48 Hours"
                            Courses_Weeks="4 Weeks"
                            Courses_Certificate="2 Certificates"
                          />
                        </li>
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
