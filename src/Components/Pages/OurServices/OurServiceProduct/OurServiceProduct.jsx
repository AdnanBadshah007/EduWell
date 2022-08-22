import React from "react";
import { Product } from "./Products";

export let OurServiceProduct = () => {
  return (
    <>
      <section class="featured-product">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading">
                <h6>Featured Service</h6>
                <h4>
                  Best Of Our <em>Product</em>
                </h4>
              </div>
            </div>
            <div class="col-lg-3 align-self-center">
              <div class="left-info">
                <Product
                  Product_img="assets/images/featured-product.jpg"
                  Product_alt="service-icon-01.png"
                  Product_title="Best Strategy"
                  Product_text="Food & truck tumeric taxidermy hoodie chiasore bitters
                      retroed gentrify street portland."
                />
                <Product
                  Product_img="assets/images/featured-product.jpg"
                  Product_alt="service-icon-01.png"
                  Product_title="Best Strategy"
                  Product_text="Food & truck tumeric taxidermy hoodie chiasore bitters
                      retroed gentrify street portland."
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="product-image">
                <img src="assets/images/featured-product.jpg" alt="" />
              </div>
            </div>
            <div class="col-lg-3 align-self-center">
              <div class="right-info">
                <Product
                  Product_img="assets/images/featured-product.jpg"
                  Product_alt="service-icon-01.png"
                  Product_title="Best Strategy"
                  Product_text="Food & truck tumeric taxidermy hoodie chiasore bitters
                      retroed gentrify street portland."
                />
                <Product
                  Product_img="assets/images/featured-product.jpg"
                  Product_alt="service-icon-01.png"
                  Product_title="Best Strategy"
                  Product_text="Food & truck tumeric taxidermy hoodie chiasore bitters
                      retroed gentrify street portland."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
