import React, { useState } from 'react'
import './Home.css';
import './HomeMobile.css';

//HOME PAGE COMPONENT / IMAGES / CSS IMPORTS
import Modal from '../components/Modal'
import Footer from '../components/Footer';
import homeCoverImage from '../images/image_home_cover.png';
import homeBodyImage from '../images/image_home_body.png';
import homeShipConfidentlyImage from '../images/image_home_ship_confidently.png'
import homeHighImpactImage from '../images/image_home_high_impact.png'

//SHIPPING CARRIER LOGOS
import MaerskLogo from '../images/logo_maersk.js';
import ACLLogo from '../images/logo_acl.js';
import MSCLogo from '../images/logo_msc.js'
import CMALogo from '../images/logo_cma.js';

//SOCIAL LOGOS
import FacebookLogo from '../images/logo_facebook.js';
import InstagramLogo from '../images/logo_instagram.js';
import TermsAndConditionsLogo from '../images/logo_form_pdf.js';

//SERVICES LOGOS
import OceanFreightLogo from '../images/logo_services_ocean';
import RoadTransportationLogo from '../images/logo_services_road';
import AirFreightLogo from '../images/logo_services_air';
import SupplyChainLogo from '../images/logo_services_supply';

const Home = () =>{

    const [showModal, toggleModal] = useState(false);
    const [hasName, toggleHasName] = useState(true);
    const [hasEmail, toggleHasEmail] = useState(true);
    const [hasPhone, toggleHasPhone] = useState(true);

    const aboutText = "NIDSAN SHIPPING INC. is a FREIGHT FORWARDING and an NVOCC (NON VESSEL OPERATING COMMON CARRIERS ) company based in New York, USA." + 
                        " This was founded in 1998 and since then, it has been a memorable journey till date." + 
                        " In a short span of time, our company has maintained a steady growth rate of its business activities." + 
                        " The company began it's operation's from New York, with the view to serve this ever growing trade between USA and other parts of the World." + 
                        " We are committed to providing customers with level of excellence and quality, utilizing industry professionals." + 
                        " The directors with their vast experience and exposure of the Shipping Industry have managed to ship worldwide" + 
                        " and at the same time had built up a strong credentials in this ever growing Shipping Industry.";
    const aboutTextOne =  "NIDSAN SHIPPING INC. is a FREIGHT FORWARDING and an NVOCC (NON VESSEL OPERATING COMMON CARRIERS ) company based in New York, USA." + 
                            " This was founded in 1998 and since then, it has been a memorable journey till date." + 
                            " In a short span of time, our company has maintained a steady growth rate of its business activities.";
    const aboutTextTwo =  "The company began it's operation's from New York, with the view to serve this ever growing trade between USA and other parts of the World." + 
                            " We are committed to providing customers with level of excellence and quality, utilizing industry professionals." + 
                            " The directors with their vast experience and exposure of the Shipping Industry have managed to ship worldwide" + 
                            " and at the same time had built up a strong credentials in this ever growing Shipping Industry.";
    const bodyTitleText = 'WE PROVIDE FULL PREMIUM SERVICES IN';
    const formTitleText = 'REGISTER & KICK START';
    const highImpactText = 'The next time you send out cargo, whether to Cairo, Chicago or Calicut, choose a logistics provider who goes the extra mile,' +  
                            ' has a dedicated staff ready to answer your queries, and offers competitive prices for comprehensive services. That’s Freight Consolidators for you.'


    const submitForm = () => {
        const formInputName = document.getElementById('home-form-name-input').value
        const formInputEmail = document.getElementById('home-form-email-input').value
        const formInputNumber = document.getElementById('home-form-phone-input').value
        const formInputAddress = document.getElementById('home-form-address-input').value
        const formInputCity = document.getElementById('home-form-city-input').value
        const formInputCountry = document.getElementById('home-form-country-input').value

        let addressString = '\nAddress: ' + formInputAddress;
        let cityString = '\nCity: ' + formInputCity;
        let countryString = '\nCountry: ' + formInputCountry;

        if(formInputName == ""){
            toggleHasName(false);
        }
        else{
            toggleHasName(true);
        }

        if(formInputEmail == ""){
            toggleHasEmail(false);
        }
        else{
            toggleHasEmail(true);
        }

        if(formInputNumber == ""){
            toggleHasPhone(false);
        }
        else{
            toggleHasPhone(true);
        }

        if(formInputAddress == ""){
            addressString += "(None Given)";
        }
        if(formInputCity == ""){
            cityString += "(None Given)";
        }
        if(formInputCountry == ""){
            countryString += "(None Given)";
        }
        if(hasName || hasEmail || hasPhone){
            return;
        }

        const subject = "Inquiry From: " + formInputName;
        const message = "Name: " + formInputName + 
                            "\nEmail: " + formInputEmail + 
                            "\nPhone Number: " + formInputNumber +
                            addressString + 
                            cityString +
                            countryString;

        fetch('https://www.nidsanshipping.com/contact.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                subject: subject,
                message: message
            }),
        }).then(res => res.json())
        .then(response => {
            console.log('response');
            console.log(response);
        })
        toggleModal(true);
    }

    const goToAboutSection = () =>{
        let homeBody = document.getElementById('home-body');
        let y = homeBody.offsetTop - (window.innerHeight / 4.5); 
        console.log(y);
        window.scroll({
            top: y,
            behavior: 'smooth'
        });
    }

    return(
        <div id = 'home-page'> 
            <div id = 'home-header'>
                <img id = 'home-cover-image' src = { homeCoverImage } alt = ''/>
                <div id = 'home-title'>
                    <h1 id = 'home-title-first-line'>JOURNEYING THE HIGH SEAS</h1>
                    <h1 id = 'home-title-second-line'>GLOBALLY.</h1>
                    <br/>
                    <h2 className = 'home-title-secondary'>FREIGHT FORWARDER'S OFFERING PREMIUM LOGISTIC SERVICES</h2>
                    <h2 className = 'home-title-secondary'>FOR EXPORTER'S WORLDWIDE</h2>
                    <div id = 'home-cover-buttons-wrapper'>
                        <button className = 'home-request-a-quote-button'>REQUEST A QUOTE</button>
                        <button id = 'home-read-more-button' onClick = { goToAboutSection }>READ MORE</button>
                    </div>
                </div>
                <div id = 'home-social-logos-grid'>
                    <a id = 'home-facebook-wrapper' href = 'https://www.facebook.com/nidsanshipping?mibextid=LQQJ4d' target = '_blank' rel = 'noreferrer'>
                        <FacebookLogo id = 'home-facebook-logo'/>
                    </a>
                    <a id = 'home-instagram-wrapper' href = 'https://www.instagram.com/nidsanshipping/' target = '_blank' rel = 'noreferrer'>
                        <InstagramLogo id = 'home-instagram-logo'/>
                    </a>
                </div>
            </div>
            
            <div id = 'home-company-logos-wrapper'>
                <div className = 'home-company-logos-line'/>
                <div id = 'home-company-logos'>
                    <a href = 'https://www.maersk.com/' target = '_blank' rel = 'noreferrer'>
                        <MaerskLogo id = 'home-maersk-logo'/>
                    </a>
                    <a href = 'https://www.aclcargo.com/' target = '_blank' rel = 'noreferrer'>
                        <ACLLogo id = 'home-acl-logo'/>
                    </a>
                    <a href = 'https://www.msc.com/' target = '_blank' rel = 'noreferrer'>
                        <MSCLogo id = 'home-msc-logo' />
                    </a>
                    <a href = 'https://www.cma-cgm.com/' target = '_blank' rel = 'noreferrer'>
                        <CMALogo id = 'home-cma-logo'/>
                    </a>
                </div>
                <div className = 'home-company-logos-line'/>
            </div>
            <div id = 'home-body'>
                <h3 className = 'home-about-title'> { bodyTitleText } </h3>
                <h3 className = 'home-about-title'>FULL CONTAINER LOAD (FCL) & ROLL-ON/ROLL-OFF (RO/RO)</h3>
                <div id = 'home-about-text'>
                    <p> { aboutTextOne } </p>
                    <br/>
                    <p> { aboutTextTwo } </p>
                </div>
            </div>
            <img id = 'home-body-image' src = { homeBodyImage } alt = ''/>
            <div id = 'home-body-services-wrapper'>
                <p id = 'home-body-services-title'>SHIP FASTER, SHIP SMARTER.</p>
                <p id = 'home-body-services-title-secondary'>Flexible transfers across multiple modes of transport.</p>
                <div id = "home-body-services-logos-wrapper">
                    <div className = 'home-body-services-logo-text-wrapper'>
                        <OceanFreightLogo/>
                        <p className = 'home-body-services-logo-text' >Ocean Freight</p>
                    </div>
                    <div className = 'home-body-services-logo-text-wrapper'>
                        <RoadTransportationLogo/>
                        <p className = 'home-body-services-logo-text'>Road Transportation</p>
                    </div>
                    <div className = 'home-body-services-logo-text-wrapper'>
                        <AirFreightLogo/>
                        <p className = 'home-body-services-logo-text'>Air Freight</p>
                    </div>
                    <div className = 'home-body-services-logo-text-wrapper'>
                        <SupplyChainLogo/>
                        <p className = 'home-body-services-logo-text'>Supply Chain</p>
                    </div>
                </div>
                <button id = 'home-body-services-view-all-button'>View All Services</button>
            </div>
            <div id = 'home-body-ship-confidently-wrapper'>
                <img id = 'home-body-ship-confidently-image' src = { homeShipConfidentlyImage } alt = ''/>
                <div id = 'home-body-ship-confidently-text-wrapper'>
                    <p id = 'home-body-ship-confidently-title'>Ship confidently. Ship smarter. The Freight Consolidators way.</p>
                    <p id = 'home-body-ship-confidently-text'>We bring our best efforts to bring out the best in you and bring the world within your reach. Be it any part of the world, we connect you with the world through the many connections we've fostered over the past three decades. In our journey forward, we’re all set to establish more connections, open up more trade routes and facilitate more opportunities for you.</p>
                </div>
            </div>
            <div id = 'home-body-high-impact-wrapper'>
                <img id = 'home-body-high-impact-image' src = { homeHighImpactImage } alt = ''></img>
                <div id = 'home-body-high-impact-text-wrapper'>
                    <p id = 'home-body-high-impact-title'>High-impact services <br/> that keeps you moving.</p>
                    <p id = 'home-body-high-impact-text'>{ highImpactText }</p>
                    <button id = 'home-body-high-impact-request-a-quote-button' className = 'home-request-a-quote-button'>REQUEST A QUOTE</button>
                </div>
            </div>
            <div id = 'home-form'>
                <h3 id = 'home-form-title'> { formTitleText } </h3>
                <div id = 'home-form-input-grid'>
                    <div className = 'home-form-input-card'>
                        <p className = 'home-form-input-title'>CONTACT NAME:</p>
                        <input id = 'home-form-name-input' className = 'home-form-text-input' type = 'text' placeholder = 'Nidsan Shipping Inc.'></input>
                        {hasName ? '' : <p className = 'home-form-input-warning'>*A name is required*</p>}
                    </div>
                    <div className = 'home-form-input-card'>
                        <p className = 'home-form-input-title'>EMAIL:</p>
                        <input id = 'home-form-email-input' className = 'home-form-text-input' type = 'text' placeholder = 'Exports@Nidsanshipping.com'></input>
                        {hasEmail ? '' : <p className = 'home-form-input-warning'>*An Email address is required*</p>}
                    </div>
                    <div className = 'home-form-input-card'>
                        <p className = 'home-form-input-title'>CONTACT NUMBER:</p>
                        <input id = 'home-form-phone-input' className = 'home-form-text-input' type = 'text' placeholder = '+18556780750'></input>
                        {hasPhone ? '' : <p className = 'home-form-input-warning'>*A phone number is required*</p>}
                    </div>
                    <div className = 'home-form-input-card'>
                        <p className = 'home-form-input-title'>ADDRESS:</p>
                        <input id = 'home-form-address-input' className = 'home-form-text-input' type = 'text' placeholder = ''></input>
                    </div>
                    <div className = 'home-form-input-card'>
                        <p className = 'home-form-input-title'>CITY:</p>
                        <input id = 'home-form-city-input' className = 'home-form-text-input' type = 'text' placeholder = ''></input>
                    </div>
                    <div className = 'home-form-input-card'>
                        <p className = 'home-form-input-title'>COUNTRY:</p>
                        <input id = 'home-form-country-input' className = 'home-form-text-input' type = 'text' placeholder = ''></input>
                    </div>
                </div>
            </div>
            <div id = 'home-form-submit-grid'>
                <p id = 'home-form-terms-and-conditions'><TermsAndConditionsLogo/> TERMS AND CONDITIONS</p>
                <button id = 'home-form-submit-button' onClick = {submitForm}>SUBMIT</button>
            </div>
            <Footer footerClass = 'footer'/>
        </div>
    )
}

export default Home