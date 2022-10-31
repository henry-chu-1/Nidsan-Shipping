import NidsanWhiteLogo from '../images/NidsanLogoWhite.js'

const Footer = () => {

    return(
        <div id = 'footer'>
            <ul>
                <li>
                    <NidsanWhiteLogo/>
                </li>
                <li>
                    <strong className = 'footerTitle'>NEW YORK</strong>
                    <p className = 'center'>167 Madison Ave, Suite 202</p>
                    <p className = 'center'>New York, NY 10016</p>
                    <p className = 'center'>+1 (855) 678-0750</p>
                </li>
                <li>
                    <strong className = 'footerTitle'>HYDERABAD, IN</strong>
                    <p className = 'center'></p>
                    <p className = 'center'></p>
                    <p className = 'center'>+1 (855) 678-0750</p>
                </li>
                <li>
                    <strong>E-mails:</strong>
                    <p>• Nidsanshipping@aol.com</p>
                    <p>• Info@nidsanshipping.com</p>
                </li>
                <li>
                    <strong>Office Hours:</strong>
                    <p>Monday - Friday | 8:00AM to 5:00PM (EST)</p>
                    <br/>
                    <p>We are closed on federal holidays.</p>
                </li>
            </ul>
        </div>
    )
}

export default Footer;