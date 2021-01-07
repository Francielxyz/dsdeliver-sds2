import React from 'react';
import './styles.css';
import { ReactComponent } from '*.svg';
import { ReactComponent as Logo } from './logo.svg';

function NavBar(){
    return(
        <nav className="main-navbar">
            <Logo />
            <a href="home" className="logo-text">DS Delevery</a>
        </nav>
    )
}

export default NavBar;
