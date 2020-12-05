import React from 'react';

import './registration.page.styles.css';

import Navbar from '../../components/navbar/navbar.component';

import Registration1 from '../../components/registration1/registration1.component';

import Svg7 from '../../assets/signup.png';

import NavbarForMobile from '../../components/navbarformobile/navbar.component';

const Registration = () =>{
    return(
        <div className="container1">
           <Navbar/>
           <div className="registration-container">
                <div className="image-container">
                  <img src={ Svg7 } alt=""/>
                </div>
                <div className="details">
                  <p className="heading">Registration</p>
                  <Registration1/>
                </div>
           </div>
           <NavbarForMobile/>
        </div>
    )
}

export default Registration;