import React from 'react'
import Images from "../Components/Images/image.jpg";
export default function Contact() {
  return (
    <div className='Contact'>
          <div className='row'>
              <h1 className='text-capitalize my-5 text-center'>feel free to contact</h1>
              <div className='col-sm-12 col-md-6 col-lg-6 col-12'>
              <input class="form-control" type="text" placeholder="Name" aria-label="default input example"/><br/>
       <input className="form-control" type="email" placeholder="Email" aria-label="default input example"/><br/>
       <input className="form-control" type="number" placeholder="Number" aria-label="default input example"/><br/>
       <button id="contact-btn">Send Message</button>
      </div>
          <div className='col-sm-12 col-md-6 col-lg-6 col-12'>
          <img src={Images} className='rounded-circle'></img>
          </div>
          </div>
      </div>
  )
}
