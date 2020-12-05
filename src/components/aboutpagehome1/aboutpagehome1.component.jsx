import React from 'react';

import './aboutpagehome1.styles.css';

import CustomButton from '../custombutton/custombutton.component';

const AboutPageHome1=() =>{
    return(
        <div className="aboutpage-home">
            <div className="about-content">
            <p className="about-heading">We have power to save lifes and we are doing so.</p>
            <CustomButton home1Button>Explore more</CustomButton>
            </div>
        </div>
    )
}

export default AboutPageHome1;