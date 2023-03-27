import './Services.css'
import './ServicesMobile.css'

import servicesCoverImage from '../images/image_services_cover.png'
import servicesOceanImage from '../images/image_services_ocean.png'
import servicesInlandImage from '../images/image_services_inland.png'
import servicesAirImage from '../images/image_services_air.png'


import FacebookLogo from '../images/logo_facebook.js';
import InstagramLogo from '../images/logo_instagram.js';

const Services = () =>{
   
    const headerParahraph = 'Regardless of your industry, your commodity, or your key markets, Nidsan has solutions that offer both small and large businesses' +
        ' the opportunity to grow. We serve our customers with frequent departures on all major trade lanes and inland services for a true end-to-end experience.'


    return(
        <div id = 'services-page'>
            <div id = 'services-header' className = 'header'>
                <img id = 'services-cover-image' className = 'cover-image' src = { servicesCoverImage } alt = ''></img>
                {/* <div id = 'services-header-background'/> */}
                <div id = 'services-header-box'>
                    {/* <div id = 'services-header-text-wrapper'> */}
                        <br/>
                        <h1 id = 'services-header-title'>Transportation Services:</h1>
                        <br/>
                        <p className= 'services-header-paragraph'>{headerParahraph}</p>
                        <br/>
                        <p className= 'services-header-paragraph'>Ocean Services</p>
                        <p className= 'services-header-paragraph'>Inland Services</p>
                        <p className= 'services-header-paragraph'>Air Frieght Services</p>
                </div>
                <div id = 'services-social-logos-grid'>
                    <a id = 'services-facebook-wrapper' href = 'https://www.facebook.com/nidsanshipping?mibextid=LQQJ4d' target = '_blank' rel = 'noreferrer'>
                        <FacebookLogo id = 'services-facebook-logo'/>
                    </a>
                    <a id = 'services-instagram-wrapper' href = 'https://www.instagram.com/nidsanshipping/' target = '_blank' rel = 'noreferrer'>
                        <InstagramLogo id = 'services-instagram-logo'/>
                    </a>
                </div>
            </div>
            <div id = 'services-body'>
                <div id = 'services-body-ocean-wrapper'>
                    <div id = 'services-body-ocean-text-wrapper'>
                        <p id = 'services-body-ocean-title'>OCEAN SERVICES</p>
                        <p id = 'services-body-ocean-paragraph'>Learn more about our shipping services from over 000 ports around the world and how we can connect your business globally and simplify your supply chain end-to-end.</p>
                        <button id = 'services-ocean-read-more-button' className = 'services-read-more-button'>READ MORE</button>
                    </div>
                    <img id = 'services-body-ocean-image' src = { servicesOceanImage } ></img>
                </div>
                <div id = 'services-body-inland-wrapper'>
                    <img id = 'services-body-inland-image' src = { servicesInlandImage } ></img>
                    <div id = 'services-body-inland-text-wrapper'>
                        <p id = 'services-body-inland-title'>INLAND SERVICES</p>
                        <p id= 'services-body-inland-paragraph'>Learn more about our shipping services from over 000 ports around the world and how we can connect your business globally and simplify your supply chain end-to-end.</p>
                        <button id = 'services-body-inland-read-more-button' className = 'services-read-more-button'>READ MORE</button>
                    </div>
                </div>
                <div id = 'services-body-air-wrapper'>
                    <img id = 'services-body-air-image' src = { servicesAirImage } ></img>
                    <div id = 'services-body-air-text-wrapper'>
                        <p id = 'services-body-air-title'>AIR FREIGHT SERVICES</p>
                        <p id = 'services-body-air-paragraph'>Learn more about our shipping services from over 000 ports around the world and how we can connect your business globally and simplify your supply chain end-to-end.</p>
                        <button id = 'services-body-air-read-more-button' className = 'services-read-more-button'>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services