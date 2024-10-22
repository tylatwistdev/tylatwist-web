import React from 'react'
import BannerSection from './components/BannerSection'
import ContactForm from './components/ContactForm'
import GetInTouch from './components/GetInTouch'
import GoogleMap from './components/GoogleMap'

const Contact = () => {
    return (
        <div>
            <BannerSection />
            <div className="container-fluid mt-4">
                <div className="row">
                    <GetInTouch />
                    <ContactForm />
                </div>
                <GoogleMap />
            </div>
        </div>
    )
}

export default Contact
