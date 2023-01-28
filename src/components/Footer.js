import { Link } from 'react-router-dom'

import FooterEmailLogo from '../images/FooterEmailLogo.js';
import FooterPhoneLogo from '../images/FooterPhoneLogo.js';
import NidsanWhiteLogo from '../images/NidsanLogoWhite.js'

const Footer = (props) => {

    return(
        <div className = {props.footerClass}>
            <div id = 'footerBox'>
                <ul>
                    <li>
                        <NidsanWhiteLogo/>
                    </li>
                    <li>
                        <Link
                            to= '/' 
                            onClick={() => props.setCurrentPage('home')}>
                            <p className = 'footerText'>HOME</p>
                        </Link>
                        <p className = 'footerText'>ABOUT</p>
                        <p className = 'footerText'>SERVICES</p>
                        <p className = 'footerText'>CONTACT</p>
                    </li>
                    <li>
                        <p className = 'footerText'><FooterEmailLogo/>&nbsp; EMAIL: EXPORTS@NIDSANSHIPPING.COM</p>
                        <p className = 'footerText'><FooterPhoneLogo/>&nbsp; +1 (855) 678-0750</p>
                    </li>
                    <li>
                        <a href = 'https://www.instagram.com/nidsanshipping/' target = '_blank' rel = 'noreferrer'>
                            <p className = 'footerText'>INSTAGRAM</p>
                        </a>
                        <a href = 'https://www.facebook.com/nidsanshipping?mibextid=LQQJ4d' target = '_blank' rel = 'noreferrer'>
                            <p className = 'footerText'>FACEBOOK</p>
                        </a>
                        <p className = 'footerText'>LINKEDIN</p>
                    </li>
                </ul>
            </div>
            <p id = 'footerCopyrightText'>© COPYRIGHT 2021, NIDSAN SHIPPING INC. POWERED BY ONCREATIVES.COM</p>
        </div>
    )
}

export default Footer;