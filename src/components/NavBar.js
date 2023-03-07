import { Link } from 'react-router-dom'
import { useState } from 'react'

import './NavBar.css'
import './NavBarMobile.css'

import NidsanLogo from '../images/logo_nidsan.js'

const NavBar = (props) => {

    const showMenu = () => {
        const navBarManuBackground = document.getElementById('nav-bar-menu-background');
        const navBarManuMobile = document.getElementById('nav-bar-menu-mobile');
        navBarManuBackground.style.visibility = 'visible';
        navBarManuBackground.className = 'nav-bar-menu-background-visible';
        navBarManuMobile.style.visibility = 'visible';
        navBarManuMobile.className = 'nav-bar-menu-mobile-visible';
    }

    const hideMenu = (color) => {
        const navBarManuBackground = document.getElementById('nav-bar-menu-background');
        navBarManuBackground.className = 'nav-bar-menu-background-hidden';
        const navBarManuMobile = document.getElementById('nav-bar-menu-mobile');
        navBarManuMobile.className = 'nav-bar-menu-mobile-hidden';
        if(color != ''){
            props.setLogoColor(color);
        }
    }

    const menuColor = () => {
        if(props.logoColor == 'white'){
            return {color: '#FFFFFF'};
        }
        else{
            return {color: '#073C52'};
        }
    }

    return(
        <div id = 'nav-bar'>
            <Link to= '/' onClick={() => props.setLogoColor('main')}>
                <NidsanLogo logoColor = {props.logoColor}/>
            </Link>
            <nav id = 'nav-bar-menu' style={menuColor()}>
                <Link  className = 'nav-bar-link' to = '/services' onClick = {() => props.setLogoColor('white')}>
                    Services
                </Link>
                {/* <Link className = 'nav-bar-link' to = '/network'>
                    Network
                </Link> */}
            </nav>
            <nav id = 'nav-bar-menu-dropdown'>
                <p onClick = { showMenu } style={menuColor()}>Menu ☰</p>
                <div id = 'nav-bar-menu-background' className = 'nav-bar-menu-background-hidden' onClick = { () => hideMenu('') }/>
                <div id = 'nav-bar-menu-mobile' className = 'nav-bar-menu-mobile-hidden'>
                    <nav id = 'nav-bar-menu-options'>
                        <Link className = 'nav-bar-link' to = '/services' onClick = { () => hideMenu('white') }>
                            Services
                        </Link>
                        {/* <Link className = 'nav-bar-link' to = '/network' onClick = { () => hideMenu('main') }>
                            Network
                        </Link> */}
                    </nav>
                </div>
            </nav>
        </div>
    )
}

export default NavBar