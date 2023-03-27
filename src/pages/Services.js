import './Services.css'
import './ServicesMobile.css'

import servicesCoverImage from '../images/image_services_cover.png'

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
        </div>
    )
}

export default Services