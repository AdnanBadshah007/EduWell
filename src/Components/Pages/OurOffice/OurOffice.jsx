import React from "react";

export let OurOffice = () => {
  return (
    <>
      <section class="contact-us our-office">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="left-info">
                <div class="section-heading">
                  <h6>Our Office</h6>
                  <h4>
                    Get closer to <em>EduWell</em>
                  </h4>
                </div>
                <p>
                  Trust fund nocore broklyn humblebrag mustache pork kitsch,
                  bicycle rights hexagon schlitz keytar palo is santo drinking
                  vinegar fam ramps. <br />
                  <br />
                  Four dollar toast and edison bulb vinyl, listicle hashtag pug
                  scenester typewrit er yuccie street artboard or whatever to
                  fill place.
                </p>
                <ul>
                  <li>- Selfies you probably haven't heard of them.</li>
                  <li>- Tousled cold-pressed chicharrones yuccie.</li>
                  <li>- Pabst iPhone chartreuse shabby chic tumeric.</li>
                  <li>- Scenester normcore mumblecore snackwave.</li>
                </ul>
                <div class="main-button-gradient">
                  <a href="our-services.html">Our Services</a>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div id="video">
                <div class="thumb">
                  <img
                    src={
                      process.env.PUBLIC_URL + "assets/images/video-thumb.jpg"
                    }
                    alt=""
                  />
                  <div class="play-button">
                    <a
                      rel="nofollow"
                      href="https://www.youtube.com/templatemo"
                      target="_blank"
                    >
                      <i class="fa fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <ul class="social-icons">
                <li>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-rss"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-12">
              <p class="copyright">
                Copyright © 2022 EduWell Co., Ltd. All Rights Reserved.
                <br />
                Design:{" "}
                <a
                  rel="sponsored"
                  href="https://templatemo.com"
                  target="_blank"
                >
                  TemplateMo
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
