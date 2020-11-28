import React from 'react';

import NavbarForMobile from '../../components/navbarformobile/navbar.component';

import Navbar from '../../components/navbar/navbar.component';

const HomePage = () => (
     <div className="homepage">
           <Navbar/>
           <NavbarForMobile/>
     </div>
);

export default HomePage;
