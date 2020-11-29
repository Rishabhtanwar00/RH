import React from 'react';

import './home2.styles.css';

import CustomButton from '../custombutton/custombutton.component';

const Home2 = () =>{
    return(
        <div className="home2-container">
            <div className="content">
              <div className="heading">Become Superhero!</div>
              <p>Now you can get notification everytime when someone
                 needs the blood near you.<br/>
                 Be on time,save a life!</p>
              <CustomButton home2Button>Get Notification</CustomButton>
            </div>
        </div>
    )
}

export default Home2;