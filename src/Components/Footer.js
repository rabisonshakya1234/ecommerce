import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className='footer'>
        <div className='container'>
          <div className='row mb-5'>
            <div className='footer-col'>
              <div className='col-sm-12 col-md-6 col-lg-6 col-12'>
              <h4 className='text-capitalize my-5'>quick-links</h4>
              <ul style={{listStyle:'none'}}>
                <li><a href='#' className='text-capitalize'>home</a></li>
                <li><a href='#'className='text-capitalize'>about</a></li>
                <li><a href='#'className='text-capitalize'>product</a></li>
                <li><a href='#'className='text-capitalize'>blog</a></li>
                <li><a href='#'className='text-capitalize'>contact</a></li>
              </ul>
            </div>
              </div>
            <div className='footer-col'>
            <div className='col-sm-12 col-md-6 col-lg-6 col-12'>
              <h4 className='text-capitalize my-5'>contact and address</h4>
              <ul style={{listStyle:'none'}}>
                  <p className='text-capitalize'>phone: 9861492520</p>
                  <p className='text-capitalize'> address: balaju,kalanki</p>
                  <p> Email: rabisonshakya6@gmail.com</p>
                </ul>
              </div>
            </div>
            <div className='footer-col'>
            <div className='col-sm-12 col-md-6 col-lg-6 col-12'>
              <h4 className='text-capitalize my-5'>Social-media icon</h4>
              <ul style={{listStyle:'none', display:'inline-flex'}}>
                <li><a href='#' className='text-capitalize fs-1'><i className='bx bxl-instagram'></i></a></li>
                <li><a href='#'className='text-capitalize fs-1'><i className='bx bxl-facebook-circle'></i></a></li>
                </ul>
                </div>
            </div>
            <div className='footer-col'>
            <div className='col-sm-12 col-md-6 col-lg-6 col-12'>
              <h4 className='text-capitalize my-5'>payment method</h4>
              <ul style={{listStyle:'none', display:'inline-flex'}}>
                <li><a href='#' className='text-capitalize fs-1'><i class='bx bxl-visa' ></i></a></li>
                <li><a href='#'className='text-capitalize fs-1'><i class='bx bx-credit-card' ></i></a></li>
                </ul>
                </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
