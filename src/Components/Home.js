import React from 'react'
import Images from "../Components/Images/download.jpg";
import Backgroundimg from "../Components/Backgroundimg";
export default function Home() {
  return (
  
    <div className='Home'>
      <Backgroundimg/>
      <div className='row'>
        <h1 className='text-capitalize my-5 text-center py-5'>overview of joyti and mani traders</h1>
        <div className='col-sm-12 col-md-6 col-lg-6 col-12'>
        <img src={Images} className='rounded-circle'></img>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-6 col-12'>
          <p>Jyoti and Mani Traders is a business that specializes in trading and distributing a variety of products. They work with different suppliers to provide goods to their customers. The company focuses on quality, ensuring that the products they offer meet high standards. They also strive to deliver excellent customer service, making sure that their clients are satisfied with their purchases. Overall, Jyoti and Mani Traders aim to be a reliable source for various products, catering to the needs of their customers efficiently.<br></br>
          Customer satisfaction is a core value for Jyoti and Mani Traders. They are dedicated to providing excellent service, from the initial inquiry to the final delivery of goods. Their team is trained to handle customer queries promptly and efficiently, ensuring a smooth and hassle-free experience.
          </p>
          <button className='btn my-5'>Read More</button>
        </div>
      </div>
    </div>

  )
}
