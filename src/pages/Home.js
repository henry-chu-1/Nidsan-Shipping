import React, { useState } from 'react'

//HOME PAGE COVER IMAGE
import cover from '../images/homePageCover.png';
import Footer from '../components/Footer';

//SHIPPING CARRIER LOGOS
import Maersk from '../images/Maersk.js';
import ACL from '../images/ACL.js';
import HapagLloyd from '../images/HapagLloyd.js';
import NileDutch from '../images/NileDutch.js';
import OOCL from '../images/OOCL.js';
import CMA from '../images/CMA.js';

import InstagramLogo from '../images/Instagram.js';
import InstagramText from '../images/instagramText.js';

const Home = () =>{

    const aboutText = "NIDSAN SHIPPING INC. is a FREIGHT FORWARDING and an NVOCC (NON VESSEL OPERATING COMMON CARRIERS ) company based in New York, USA. This was founded in 1998 and since then, it has been a memorable journey till date. In a short span of time, our company has maintained a steady growth rate of its business activities. The company began it's operation's from New York, with the view to serve this ever growing trade between USA and other parts of the World. We are committed to providing customers with level of excellence and quality, utilizing industry professionals. The directors with their vast experience and exposure of the Shipping Industry have managed to ship worldwide and at the same time had built up a strong credentials in this ever growing Shipping Industry.";
    const bodyTitleText = "WE PROVIDE FULL PREMIUM SERVICES IN";

    const [logoHeight, setLogoHeight] = useState('5');

    return(
        <div id = 'home'> 
            <div id = 'coverAndTitle'>
                <img id = 'cover' src = {cover}/>
                <div id = 'title'>
                    <h1 id = 'titleFirst'>JOURNEYING THE HIGH SEAS</h1>
                    <h1 id = 'titleSecond'>GLOBALLY.</h1>
                    <br/>
                    <h2 id = 'titleThird'>FREIGHT FORWARDER'S OFFERING PREMIUM LOGISTIC SERVICES</h2>
                    <h2 id = 'titleFourth'>FOR EXPORTER'S WORLDWIDE</h2>
                </div>
                <a href = 'https://www.instagram.com/nidsanshipping/' target = '_blank'>
                    <InstagramLogo/>
                    <InstagramText/>
                </a>
            </div>
            <div id = 'homeBody'>
                <hr className = 'homeLine' />
                <ul>
                    <li>
                        <a href = 'https://www.maersk.com/' target = '_blank'>
                            <Maersk height = {logoHeight} />
                        </a>
                    </li>
                    <li id = 'ACLLogo'>
                        <a href = 'https://www.aclcargo.com/' target = '_blank'>
                            <ACL height = {logoHeight} />
                        </a>
                    </li>
                    <li>
                        <a href = 'https://www.hapag-lloyd.com' target = '_blank'>
                            <HapagLloyd height = {logoHeight} />
                        </a>
                    </li>
                    {/* <li>
                        <a href = '' target = '_blank'>
                            <NileDutch height = {logoHeight} />
                        </a>
                    </li> */}
                    <li>
                        <a href = 'https://www.oocl.com/' target = '_blank'>
                            <OOCL height = {logoHeight} />
                        </a>
                    </li>
                    <li>
                        <a href = 'https://www.cma-cgm.com/' target = '_blank'>
                            <CMA height = {logoHeight} />
                        </a>
                    </li>
                </ul>
                <hr className = 'homeLine'/>
                <h3 className = 'homeBodyTitle'> {bodyTitleText} </h3>
                <p className = 'homeBodyTitleBullets'>FULL CONTAINER LOAD (FCL)</p>
                <p className = 'homeBodyTitleBullets'>&</p>
                <p className = 'homeBodyTitleBullets'>ROLL-ON/ROLL-OFF (RO/RO) SERVICES</p>
                <p id = 'aboutText'> {aboutText} </p>
            </div>
            <Footer/>
        </div>
    )
}

export default Home