import React from 'react';

import {MenuItems} from "./menuitems";

import './navbar.styles.css';

import CustomButton from '../custombutton/custombutton.component';

import logo from '../../assets/logo.png';

import { Link } from 'react-router-dom';

import Registration from '../../pages/registration/registration.page';

class Navbar extends React.Component{
/*
    state = {clicked : false}
    handleClick = () =>{
    this.setState({clicked : !this.state.clicked})
    }
*/
    render()
    {
        return(
            <nav className = "NavbarItems">
            <img className = "navbar-logo" src = {logo} alt="navbar-logo"></img> 
             {/* <div className = "menu-icon" onClick = {this.handleClick}>
            <i className = {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div> */}
        {/* <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>  */}
            <div className="links">
            <div className = "nav-menu">
                {MenuItems.map((item , index) => {
                    return(
                        <Link key = {index} className = {item.cName} href = {item.url} to={item.to}>
                           {item.title}
                        </Link>
                    )
                } )}
            </div>
            <div className="buttons">
               <Link to='/registration'><CustomButton className='nav-buttons' navBarButton to>Register</CustomButton></Link>
               <Link to='/login'><CustomButton className='nav-buttons' navBarButton>Log in</CustomButton></Link>
            </div>
            </div>
            </nav>
        )
    }
}

export default Navbar;