import React from "react";
import plates from "../Components/Images/plates.jpeg";
import colorfulplates from "../Components/Images/colorful plates.jpeg";
import down from "../Components/Images/down.jpeg";
import waterbottles from "../Components/Images/water bottles.jpeg";
import cleanbottle from "../Components/Images/clean bottle.jpeg";
import freshbottle from "../Components/Images/fresh bottle.jpeg";

export default function Product() {
  return (
    <div className="Product">
      <div className="banner">
        <h1 className="text-capitalize my-5 py-5 fs-1 text-white">
          new arriaval
        </h1>
      </div>
      <div className="row">
        <h1 className="text-capitalize my-5 text-center">our products</h1>
        <h2 className="text-capitalize my-5 text-center">
          jyoti Traders Product
        </h2>
        <div className="col-sm-12 col-md-4 col-lg-4 col-12">
          <div
            className="card my-5 m-5"
            style={{ width: "18rem", color: "rgb(111, 78, 55)" }}
          >
            <img src={plates} className="card-img-top" alt="plate" />
            <div classNameName="card-body">
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <h5 className="card-title">White plate</h5>
              <p className="card-text">Rs 23000</p>
              <a href="#" className="btn my-5">
                Add to cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-12">
          <div
            className="card my-5 m-5"
            style={{ width: "18rem", color: "rgb(111, 78, 55) " }}
          >
            <img
              src={colorfulplates}
              className="card-img-top"
              alt="colorfulplates"
            />
            <div classNameName="card-body">
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <h5 className="card-title">color plates</h5>
              <p className="card-text">Rs 45000</p>
              <a href="#" className="btn my-5">
                Add to cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-12">
          <div
            className="card my-5 m-5"
            style={{ width: "18rem", color: "rgb(111, 78, 55)" }}
          >
            <img src={down} className="card-img-top" alt="down" />
            <div classNameName="card-body">
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <h5 className="card-title text-capitalize">designer plate</h5>
              <p className="card-text">Rs 345000</p>
              <a href="#" className="btn my-5">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h2 className="text-capitalize my-5 text-center">
          Mani Traders Product
        </h2>
        <div className="col-sm-12 col-md-4 col-lg-4 col-12">
          <div
            className="card my-5 m-5"
            style={{ width: "18rem", color: "rgb(111, 78, 55)" }}
          >
            <img
              src={waterbottles}
              className="card-img-top"
              alt="waterbottles"
            />
            <div classNameName="card-body">
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <h5 className="card-title">Water bottles</h5>
              <p className="card-text">Rs 45000</p>

              <a href="#" className="btn my-5">
                Add to cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-12">
          <div
            className="card my-5 m-5"
            style={{ width: "18rem", color: "rgb(111, 78, 55)" }}
          >
            <img src={cleanbottle} className="card-img-top" alt="cleanbottle" />
            <div classNameName="card-body">
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <h5 className="card-title">Clean bottle</h5>
              <p className="card-text">Rs 56000</p>
              <a href="#" className="btn my-5">
                Add to cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-12">
          <div
            className="card my-5 m-5"
            style={{ width: "18rem", color: "rgb(111, 78, 55)" }}
          >
            <img src={freshbottle} className="card-img-top" alt="freshbottle" />
            <div classNameName="card-body">
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <i className="bx bx-star"></i>
              <h5 className="card-title">fresh bottle</h5>
              <p className="card-text">Rs 30000.</p>
              <a href="#" className="btn my-5">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
