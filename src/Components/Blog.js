import React from 'react'
import plates from "../Components/Images/plates.jpeg";
import colorfulplates from "../Components/Images/colorful plates.jpeg";
import down from "../Components/Images/down.jpeg";
export default function Blog() {
  return (
    <div className='Blog'>
      <div className='new-banner'>
        {/* <h1 className='text-capitalize my-5 text-center py-5'>Welcome to Joyti and Mani Traders</h1> */}
      </div>
      <h2 className='text-capitalize text-center mt-5'>Latest blog</h2>
      <div className='row'>
      <div className="col-sm-12 col-md-4 col-lg-4 col-12">
          <div
            className="card-item my-5 m-5"
            style={{ width: "18rem", color: "rgb(111, 78, 55)" }}
          >
            <img src={plates} className="card-img-top" alt="plate" />
            <div classNameName="card-body">
              <h5 className="card-title mt-5">Product Blog</h5>
              <p className="card-text">If there’s one thing that frustrates me, it’s when rules get in my way.</p>
              <a href="#" className="btn my-5">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-12">
          <div
            className="card-item my-5 m-5"
            style={{ width: "18rem", color: "rgb(111, 78, 55) " }}
          >
            <img
              src={colorfulplates}
              className="card-img-top"
              alt="colorfulplates"
            />
            <div classNameName="card-body">
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
            className="card-item my-5 m-5"
            style={{ width: "18rem", color: "rgb(111, 78, 55)" }}
          >
            <img src={down} className="card-img-top" alt="down" />
            <div classNameName="card-body">
              <h5 className="card-title text-capitalize">designer plate</h5>
              <p className="card-text">Rs 345000</p>
              <a href="#" className="btn my-5">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
