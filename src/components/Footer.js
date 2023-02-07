import { Link } from 'react-router-dom'
import './Footer.css'

import FooterEmailLogo from '../images/FooterEmailLogo.js';
import FooterPhoneLogo from '../images/FooterPhoneLogo.js';
import NidsanWhiteLogo from '../images/NidsanLogoWhite.js'

const Footer = (props) => {

    return(
        <div className = {props.footerClass}>
            <div id = 'footerBox'>
                <div id = 'footerNidsanLogo'>
                    <NidsanWhiteLogo/>
                </div>
                <div id = 'footerPageLinks'>
                    <Link
                        to= '/' 
                        onClick={() => props.setCurrentPage('home')}>
                        <p className = 'footerText'>HOME</p>
                    </Link>
                    <p className = 'footerText'>ABOUT</p>
                    <p className = 'footerText'>SERVICES</p>
                    <p className = 'footerText'>CONTACT</p>
                </div>
                <div id = 'footerContactInfo'>
                    <p className = 'footerText'><FooterEmailLogo/>&nbsp; EMAIL: EXPORTS@NIDSANSHIPPING.COM</p>
                    <p className = 'footerText'><FooterPhoneLogo/>&nbsp; +1 (855) 678-0750</p>
                </div>
                <div id = 'footerSocialLinks'>
                    <a href = 'https://www.instagram.com/nidsanshipping/' target = '_blank' rel = 'noreferrer'>
                        <p className = 'footerText'>INSTAGRAM</p>
                    </a>
                    <a href = 'https://www.facebook.com/nidsanshipping?mibextid=LQQJ4d' target = '_blank' rel = 'noreferrer'>
                        <p className = 'footerText'>FACEBOOK</p>
                    </a>
                    <p className = 'footerText'>LINKEDIN</p>
                </div>
            </div>
            <p id = 'footerCopyrightText'>© COPYRIGHT 2021, NIDSAN SHIPPING INC. POWERED BY ONCREATIVES.COM</p>
        </div>
    )
}

export default Footer;