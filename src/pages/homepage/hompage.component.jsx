import React from 'react';

import NavbarForMobile from '../../components/navbarformobile/navbar.component';

import Navbar from '../../components/navbar/navbar.component';

import CardCollection from '../../components/cardcollection/cardcollection.component';

import './homepage.styles.css';

import HostACampCard from '../../components/hostacampcard/hostacardcamp.component';

class HomePage extends React.Component{
      render(){
            return(
     <div className="homepage">
           <Navbar/>
           <CardCollection/>
           <HostACampCard/>
           <NavbarForMobile/>
     </div>
);
      }
}

export default HomePage;
