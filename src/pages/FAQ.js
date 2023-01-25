import '../pagesCSS/FAQ.css';

import Footer from '../components/Footer';

import faq from '../jsonFiles/FAQ.json' 

const FAQ = () =>{

    return(
        <div id = 'faqPage'>
            <h1 id = 'faqPageTitle'>FAQ</h1>
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

export default FAQ