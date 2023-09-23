import React from 'react'
import HeroSection from './HeroSection'
// import './css/Home.css'

const About = () => {
    return (
        <>

            <HeroSection type='Ecommerce' btnType='Buy Now' />
            <div style={{ margin: '25px' }}>
                <h2 style={{ textAlign: 'center' }}>About Page</h2>
                <p style={{ textAlign: 'center' }}>This is React Ecommerce App</p>

            </div>
        </>
    )
}

export default About
