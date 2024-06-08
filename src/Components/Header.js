// import React from 'react'
import React, { useState, useEffect } from 'react';


export default function Header() {
  const [theme, setTheme] = useState('light'); // Default theme is light

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme); // Apply theme to the root element
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme); // Apply the default theme on component mount
  }, [theme]);
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light top-fixed bg-dark text-white">

  <div className="container-fluid">
    <a className="navbar-brand text-capitalize fw-bold text-white" href="#">joyti and mani traders</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white"></span>
          </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold fs-5">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item px-3">
            <a className="nav-link text-capitalize text-white" href="/about">about</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link text-capitalize text-white" href="/product">product</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link text-capitalize text-white" href="/blog">blog</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link text-capitalize text-white" href="/contact">contact</a>
        </li>
        <div class="dropdown px-3">
  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">{theme === 'light' ? <i className='bx bxs-sun' ></i> : <i className='bx bxs-moon'></i> }
                
  </a>

  <ul className="dropdown-menu px-3" aria-labelledby="dropdownMenuLink bg-dark">
    <li><a className="dropdown-item" href="#" onClick={() => toggleTheme('light')}><i className='bx bxs-sun' ><p className='text-capitalize px-2' style={{display:'inline-flex'}}>light</p></i></a></li>
    <li><a className="dropdown-item" href="#" onClick={() => toggleTheme('dark')}><i className='bx bxs-moon' ><p className='text-capitalize' style={{display:'inline-flex'}}>dark</p></i></a></li>
  </ul>
</div>
      </ul>
      <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
</nav>
    </div>
 
  )
}
