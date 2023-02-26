import { Link } from 'react-router-dom'
import './NavBar.css'
import NidsanLogo from '../images/logo_nidsan.js'

const NavBar = (props) => {

    return(
        <div id = 'nav-bar'>
            <Link
                className = {props.currentPage === 'home' ? 'current' : 'inactive'}
                to= '/' 
                onClick={() => props.setCurrentPage('home')}>
                <NidsanLogo/>
            </Link>
            <nav id = 'nav-bar-menu'>
                {/* <Link
                    className = {props.currentPage === 'services' ? 'current' : 'inactive'}
                    to= '/services'
                    onClick={() => props.setCurrentPage('services')}>
                    <span>Services</span> 
                </Link> */}
                <span>Services</span>
                <span>Network</span>

                    {/* <li>
                        <Link
                            className = {props.currentPage === 'home' ? 'current' : 'inactive'}
                            to= '/' 
                            onClick={() => props.setCurrentPage('home')}>
                            <span>Home</span>
                        </Link>
                    </li> */}
                    {/* <li>
                        <Link
                            className = {props.currentPage === 'services' ? 'current' : 'inactive'}
                            to= '/services'
                            onClick={() => props.setCurrentPage('services')}>
                            <span>Services</span> 
                        </Link>
                    </li>
                    <li>
                        <Link
                            className = {props.currentPage === 'network' ? 'current' : 'inactive'}
                            to= '/network'
                            onClick={() => props.setCurrentPage('network')}>
                            <span>Network</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className = {props.currentPage === 'containers' ? 'current' : 'inactive'}
                            to= '/containers'
                            onClick={() => props.setCurrentPage('containers')}>
                            <span>Container's</span>
                        </Link>
                    </li>
                    <li>
                        <div className = "dropdown">
                            <button className = "dropbtn">Tracking</button>
                                <div className = "dropdown-content">
                                    <Link
                                        className = {props.currentPage === 'tracking' ? 'current' : 'inactive'}
                                        to= '/tracking'
                                        onClick={ () => props.carrierClicked('ACL Cargo') }>
                                        <span>ACL Cargo</span>
                                    </Link>
                                    <Link
                                        className = {props.currentPage === 'tracking' ? 'current' : 'inactive'}
                                        to= '/tracking'
                                        onClick={() => props.carrierClicked('CMA-CGM') }>
                                        <span>CMA-CGM</span>
                                    </Link>
                                    <Link
                                        className = {props.currentPage === 'tracking' ? 'current' : 'inactive'}
                                        to= '/tracking'
                                        onClick={() => props.carrierClicked('MAERSK')}>
                                        <span>MAERSK</span>
                                    </Link>
                                </div>
                        </div>
                    </li> */}
                    {/* <li>
                        <Link
                            className = {props.currentPage === 'contact' ? 'current' : 'inactive'}
                            to= '/contact'
                            onClick={() => props.setCurrentPage('contact')}>
                            <span>Contact</span>
                        </Link>
                    </li> */}
            </nav>
        </div>
    )
}

export default NavBar