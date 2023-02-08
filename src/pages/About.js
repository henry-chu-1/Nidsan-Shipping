import React from 'react'

import './About.css';

import Footer from '../components/Footer';

import faq from '../jsonFiles/FAQ.json' 

const About = () =>{

    return(
        <div id = 'aboutPage'>
            <h1 id = 'aboutPageTitle'>FAQ</h1>
            {
                faq.faqs.map((faq) => 
                <div className = "faq">
                    <h3 className = 'faqQuestion'>{faq.question}</h3>
                    <p className = 'faqAnswer'>{faq.answer}</p>
                </div>
            )}
            <Footer footerClass = {'footer bottom'}/>
        </div>
    )
}

export default About