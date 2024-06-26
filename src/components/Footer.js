import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import './FooterMobile.css'

import FooterEmailLogo from '../images/logo_footer_email.js';
import FooterPhoneLogo from '../images/logo_footer_phone.js';
import NidsanWhiteLogo from '../images/NidsanLogoWhite.js'

const Footer = (props) => {

    const openEmail = () =>{
        window.location.href = "mailto:EXPORTS@NIDSANSHIPPING.COM";
    }

    const changePages = (color) =>{
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
        props.setLogoColor(color)
    }

    return(
        <div className = {props.footerClass}>
            <div id = 'footer-box'>
                <div id = 'footerNidsanLogo'>
                    <NidsanWhiteLogo/>
                </div>
                <div id = 'footerPageLinks'>
                    <Link
                        to = '/' 
                        onClick={() => changePages('main')}>
                        <p className = 'footerText'>HOME</p>
                    </Link>
                    <p className = 'footerText'>ABOUT</p>
                    <Link
                        to = '/services'
                        onClick= { () => changePages('white')}>
                        <p className = 'footerText'>SERVICES</p>
                    </Link>
                    <p className = 'footerText'>CONTACT</p>
                </div>
                <div id = 'footerContactInfo'>
                    <div id = 'footerEmail' className = 'footerText' onClick = {openEmail}>
                            <FooterEmailLogo/>&nbsp;EXPORTS@NIDSANSHIPPING.COM</div>
                    <p id = 'footerPhone' className = 'footerText'><FooterPhoneLogo/>&nbsp; +1 (855) 678-0750</p>
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