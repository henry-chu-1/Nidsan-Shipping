import "./Services.css"

import Footer from '../components/Footer';

const Services = () =>{
    const roroDescription = 'This service typically means that a customer wants to ship a single vehicle.' + 
        ' Its driven on the ship and driven off the ship.' + 
        ' This can include but not be limited to, Cars, Vans, Trucks, Trailers, Construction Equipment, Boats and RV’s.' + 
        ' The benefits of this its cost efficient, Fast and simple. '
    const lclfclDescription1 = 'The difference between the two is the volume that the transported goods take up.'
    const lclfclDescription2 = 'The main difference between FCL and LCL is that the buyer is sharing space in a container for an LCL shipment,' + 
        ' compared to renting the full container space under an FCL agreement.'
    const lclfclDescription3 = 'FCL is using the whole container.';
    const lclfclDescription4 = 'LCL is sharing space in a container.';
    const bulkbreakDescription = 'Vastly exceeds the size and/or weight of a standard container and is therefore handled as non-unitized cargo and' + 
        ' normally placed on a bed of flat racks with a large number of lashing points.' + 
        ' Examples of Bulk Break Shipments include: Yachts, Masts, Train carriages. Industrial Machinery etc.'
    
    return(
        <div id = 'servicesPage'>
            <h1 id = 'servicesPageTitle'>SERVICES</h1>
            <h3 className = 'serviceTitle'>RoRo (Roll on Roll Off)</h3>
            <p className = 'serviceDescription'>{roroDescription}</p>
            <h3 className = 'serviceTitle'>LCL/FCL (Less than container load/ Full container load)</h3>
            <p className = 'serviceDescription'>{lclfclDescription1}</p>
            <p className = 'serviceDescription'>{lclfclDescription2}</p>
            <p className = 'serviceDescription'>{lclfclDescription3}</p>
            <p className = 'serviceDescription'>{lclfclDescription4}</p>
            <h3 className = 'serviceTitle'>Bulk Break Shipment</h3>
            <p className = 'serviceDescription'>{bulkbreakDescription}</p>
            <Footer footerClass = {'footer bottom'}/>
        </div>
    )
}

export default Services