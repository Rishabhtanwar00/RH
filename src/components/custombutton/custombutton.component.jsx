import React from 'react';

import './custombutton.styles.css';

const CustomButton = ({ children , navBarButton , cardButton ,hostCardButton }) =>{
  return(
      <button className={`${navBarButton ? 'navbar-button' : ' '} ${cardButton ? 'card-button' : ' '} ${hostCardButton ? 'hostcard-button' : ' '} main-button`}>
        { children }
      </button>
  )
}

export default CustomButton;