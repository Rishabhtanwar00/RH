import React from 'react';

import './home1.styles.css';

import CustomButton from '../custombutton/custombutton.component';

const Home1= () =>{
    return(
        <div className="home1-container">
          <div className="content">
            <div className="heading">
              Donate <span>Blood,</span>
            </div>
            <p>Give Smile to someone</p>
            <CustomButton home1Button>Donate Blood</CustomButton>
          </div>
        </div>
    )
}

export default Home1;