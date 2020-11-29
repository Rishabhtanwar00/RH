import React from 'react';

import NavbarForMobile from '../../components/navbarformobile/navbar.component';

import Navbar from '../../components/navbar/navbar.component';

import CardCollection from '../../components/cardcollection/cardcollection.component';

import './homepage.styles.css';

class HomePage extends React.Component{
      render(){
            return(
     <div className="homepage">
           <Navbar/>
           <CardCollection/>
           <NavbarForMobile className='navbar-mobile'/>
     </div>
);
      }
}

export default HomePage;
