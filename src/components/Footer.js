import NidsanWhiteLogo from '../images/NidsanLogoWhite.js'

const Footer = (props) => {

    return(
        <div className = {props.footerClass}>
            <ul>
                <li>
                    <NidsanWhiteLogo/>
                </li>
                <li>
                    <strong className = 'footerTitle'>NEW YORK</strong>
                    <p className = 'footerText'>167 Madison Ave, Suite 202</p>
                    <p className = 'footerText'>New York, NY 10016</p>
                    <p className = 'footerText'>+1 (855) 678-0750</p>
                </li>
                <li>
                    <strong className = 'footerTitle'>HYDERABAD, IN</strong>
                    <p className = 'footerText'></p>
                    <p className = 'footerText'></p>
                    <p className = 'footerText'>+1 (855) 678-0750</p>
                </li>
                <li>
                    <strong className = 'footerTitle'>E-mails:</strong>
                    <p className = 'footerText'>• Nidsanshipping@aol.com</p>
                    <p className = 'footerText'>• Info@nidsanshipping.com</p>
                </li>
                <li>
                    <strong className = 'footerTitle'>Office Hours:</strong>
                    <p className = 'footerText'>Monday - Friday | 8:00AM to 5:00PM (EST)</p>
                    <br/>
                    <p className = 'footerText'>We are closed on federal holidays.</p>
                </li>
            </ul>
        </div>
    )
}

export default Footer;