import React from 'react';

import './homepage.styles.css';

import Navbar from '../../components/navbar/navbar.component';

import Home1 from '../../components/home1/home1.component';

import CardCollection from '../../components/cardcollection/cardcollection.component';

import HostACampCard from '../../components/hostacampcard/hostacardcamp.component';

import Home2 from '../../components/home2/home2.component';

import CardCollection2 from '../../components/cardcollection2/cardcollection2.component';

import Home3 from '../../components/home3/home3.component';

import Footer from "../../components/footer/footer.component";

import NavbarForMobile from '../../components/navbarformobile/navbar.component';

class HomePage extends React.Component{
      render(){
            return(
     <div className="homepage">
           <Navbar/>
           <Home1/>
           <CardCollection/>
           <HostACampCard/>
           <Home2/>
           <CardCollection2/>
           <Home3/>
           <Footer/>
           <NavbarForMobile/>
     </div>
);
      }
}

export default HomePage;
