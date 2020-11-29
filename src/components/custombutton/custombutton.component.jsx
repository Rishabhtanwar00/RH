import React from 'react';

import './custombutton.styles.css';

const CustomButton = ({ children , navBarButton , cardButton,
                        hostCardButton , home1Button , home2Button,
                        card2Button }) =>{
  return(
      <button className={`${navBarButton ? 'navbar-button' : ' '} ${cardButton ? 'card-button' : ' '}
       ${hostCardButton ? 'hostcard-button' : ' '} ${card2Button ? 'card2-button' : ' '}
       ${home1Button ? 'home1-button' : ' '}  ${home2Button ? 'home2-button' : ' '} main-button`}>
        { children }
      </button>
  )
}

export default CustomButton;