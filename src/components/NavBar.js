import { Link } from 'react-router-dom'
import './NavBar.css'
import './NavBarMobile.css'
import NidsanLogo from '../images/logo_nidsan.js'

const NavBar = () => {

    const showMenu = () => {
        const navBarManuBackground = document.getElementById('nav-bar-menu-background');
        const navBarManuMobile = document.getElementById('nav-bar-menu-mobile');
        navBarManuBackground.style.visibility = 'visible';
        navBarManuBackground.className = 'nav-bar-menu-background-visible';
        navBarManuMobile.style.visibility = 'visible';
        navBarManuMobile.className = 'nav-bar-menu-mobile-visible';
    }

    const hideMenu = () => {
        const navBarManuBackground = document.getElementById('nav-bar-menu-background');
        navBarManuBackground.className = 'nav-bar-menu-background-hidden';
        const navBarManuMobile = document.getElementById('nav-bar-menu-mobile');
        navBarManuMobile.className = 'nav-bar-menu-mobile-hidden';
    }

    return(
        <div id = 'nav-bar'>
            <Link to= '/' >
                <NidsanLogo/>
            </Link>
            <nav id = 'nav-bar-menu'>
                <Link className = 'nav-bar-link' to = '/services'>
                    Services
                </Link>
                <Link className = 'nav-bar-link' to = '/network'>
                    Network
                </Link>
            </nav>
            <nav id = 'nav-bar-menu-dropdown'>
                <p onClick = { showMenu } >Menu ☰</p>
                <div id = 'nav-bar-menu-background' className = 'nav-bar-menu-background-hidden' onClick = { hideMenu }/>
                <div id = 'nav-bar-menu-mobile' className = 'nav-bar-menu-mobile-hidden'>
                    <nav id = 'nav-bar-menu-options'>
                        <Link className = 'nav-bar-link' to = '/services' onClick = { hideMenu }>
                            Services
                        </Link>
                        <Link className = 'nav-bar-link' to = '/network' onClick = { hideMenu }>
                            Network
                        </Link>
                    </nav>
                </div>
            </nav>
        </div>
    )
}

export default NavBar