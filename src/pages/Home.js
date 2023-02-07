import React from 'react'
import '../pagesCSS/Home.css';

//HOME PAGE COVER IMAGE
import cover from '../images/homePageCover.png';
import coverSecond from '../images/homePageSecondCover.png';
import Footer from '../components/Footer';

//SHIPPING CARRIER LOGOS
import Maersk from '../images/Maersk.js';
import ACL from '../images/ACL.js';
import HapagLloyd from '../images/HapagLloyd.js';
// import NileDutch from '../images/NileDutch.js';
import OOCL from '../images/OOCL.js';
import CMA from '../images/CMA.js';

//SOCIAL LOGOS
import FacebookLogo from '../images/Facebook.js';
import FacebookText from '../images/FacebookText';
import InstagramLogo from '../images/Instagram.js';
import InstagramText from '../images/InstagramText.js';

const Home = () =>{

    const aboutText = "NIDSAN SHIPPING INC. is a FREIGHT FORWARDING and an NVOCC (NON VESSEL OPERATING COMMON CARRIERS ) company based in New York, USA." + 
                        " This was founded in 1998 and since then, it has been a memorable journey till date." + 
                        " In a short span of time, our company has maintained a steady growth rate of its business activities." + 
                        " The company began it's operation's from New York, with the view to serve this ever growing trade between USA and other parts of the World." + 
                        " We are committed to providing customers with level of excellence and quality, utilizing industry professionals." + 
                        " The directors with their vast experience and exposure of the Shipping Industry have managed to ship worldwide" + 
                        " and at the same time had built up a strong credentials in this ever growing Shipping Industry.";
    const bodyTitleText = 'WE PROVIDE FULL PREMIUM SERVICES IN';
    const formTitleText = 'REGISTER & KICK START';

    const logoHeight = 8;

    return(
        <div id = 'home'> 
            <div id = 'coverAndTitle'>
                <img id = 'cover' src = {cover} alt = ''/>
                <div id = 'title'>
                    <h1 id = 'titleFirst'>JOURNEYING THE HIGH SEAS</h1>
                    <h1 id = 'titleSecond'>GLOBALLY.</h1>
                    <br/>
                    <h2 id = 'titleThird'>FREIGHT FORWARDER'S OFFERING PREMIUM LOGISTIC SERVICES</h2>
                    <h2 id = 'titleFourth'>FOR EXPORTER'S WORLDWIDE</h2>
                </div>
                <div id = 'homeSocialLogoGrid'>
                    <a id = 'facebook' href = 'https://www.facebook.com/nidsanshipping?mibextid=LQQJ4d' target = '_blank' rel = 'noreferrer'>
                        <FacebookLogo/>
                        <FacebookText/>
                    </a>
                    <a id = 'instagram' href = 'https://www.instagram.com/nidsanshipping/' target = '_blank' rel = 'noreferrer'>
                        <InstagramLogo/>
                        <InstagramText/>
                    </a>
                </div>
            </div>
            <div id = 'homeLogosWrapper'>
                <hr className = 'homeLine' />
                <div id = 'homeLogos'>
                    <a href = 'https://www.maersk.com/' target = '_blank' rel = 'noreferrer'>
                            <Maersk height = {logoHeight} />
                    </a>
                    <a href = 'https://www.aclcargo.com/' target = '_blank' rel = 'noreferrer'>
                            <ACL height = {logoHeight} />
                    </a>
                    <a href = 'https://www.hapag-lloyd.com' target = '_blank' rel = 'noreferrer'>
                            <HapagLloyd height = {logoHeight} />
                    </a>
                    <a href = 'https://www.oocl.com/' target = '_blank' rel = 'noreferrer'>
                        <OOCL height = {logoHeight} />
                    </a>
                    <a href = 'https://www.cma-cgm.com/' target = '_blank' rel = 'noreferrer'>
                        <CMA height = {logoHeight} />
                    </a>
                </div>
                <hr className = 'homeLine'/>
            </div>
            <div id = 'homeBody'>
                {/* <div id = 'homeLogosWrapper'>
                <hr className = 'homeLine' />
                    <div id = 'homeLogos'>
                        <a href = 'https://www.maersk.com/' target = '_blank' rel = 'noreferrer'>
                                <Maersk height = {logoHeight} />
                        </a>
                        <a href = 'https://www.aclcargo.com/' target = '_blank' rel = 'noreferrer'>
                                <ACL height = {logoHeight} />
                        </a>
                        <a href = 'https://www.hapag-lloyd.com' target = '_blank' rel = 'noreferrer'>
                                <HapagLloyd height = {logoHeight} />
                        </a>
                        <a href = 'https://www.oocl.com/' target = '_blank' rel = 'noreferrer'>
                            <OOCL height = {logoHeight} />
                        </a>
                        <a href = 'https://www.cma-cgm.com/' target = '_blank' rel = 'noreferrer'>
                            <CMA height = {logoHeight} />
                        </a>
                    </div>
                <hr className = 'homeLine'/>
                </div> */}
                <h3 className = 'homeBodyTitle'> {bodyTitleText} </h3>
                <p className = 'homeBodyTitleBullets'>FULL CONTAINER LOAD (FCL) & ROLL-ON/ROLL-OFF (RO/RO)</p>
                <p id = 'aboutText'> {aboutText} </p>
            </div>
            <img id = 'coverSecond' src = {coverSecond} alt = ''/>
            <div id = 'homeForm'>
                <h3 id = 'formTitle'> {formTitleText} </h3>
                <div id = 'formInputGrid'>
                    <div className = 'formInputCard'>
                        <p className = 'formInputTitle'>OWNER/COMPANY NAME:</p>
                        <input className = 'textInput' type = 'text' placeholder = 'Nidsan Shipping'></input>
                    </div>
                    <div className = 'formInputCard'>
                        <p className = 'formInputTitle'>EMAIL:</p>
                        <input className = 'textInput' type = 'text' placeholder = 'Exports@NidsanShipping.Com'></input>
                    </div>
                    <div className = 'formInputCard'>
                        <p className = 'formInputTitle'>CONTACT NUMBER:</p>
                        <input className = 'textInput' type = 'text' placeholder = '+18556780750'></input>
                    </div>
                    <div className = 'formInputCard'>
                        <p className = 'formInputTitle'>ADDRESS:</p>
                        <input className = 'textInput' type = 'text' placeholder = ''></input>
                    </div>
                    <div className = 'formInputCard'>
                        <p className = 'formInputTitle'>CITY:</p>
                        <input className = 'textInput' type = 'text' placeholder = ''></input>
                    </div>
                    <div className = 'formInputCard'>
                        <p className = 'formInputTitle'>COUNTRY:</p>
                        <input className = 'textInput' type = 'text' placeholder = 'United States'></input>
                    </div>
                </div>
            </div>
            <div id = 'formSubmitGrid'>
                <p id = 'termsAndConditions'>TERMS AND CONDITIONS</p>
                <button id = 'formSubmitButton'>SUBMIT</button>
            </div>
            <Footer footerClass = {'footer'}/>
        </div>
    )
}

export default Home