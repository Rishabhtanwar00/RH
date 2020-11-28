import React from 'react';

import {MenuItems} from "./menuitems";

import './navbar.styles.css';

import {Button} from "../navbutton/navbutton.component";

import logo from '../../assets/logo.jpeg';

import { Link } from 'react-router-dom';

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
                        <Link key = {index} className = {item.cName} href = {item.url}>
                           {item.title}
                        </Link>
                    )
                } )}
            </div>
            <div className="buttons">
               <Button>Register</Button>
               <Button>Log in</Button>
            </div>
            </div>
            </nav>
        )
    }
}

export default Navbar;