import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TeamCard from '../../components/TeamCard/TeamCard';
import AboutSlider from './AboutSlider';

function About() {
  return (
    <>
    <Header />
        <div id='about' className='card container d-flex flex-wrap mt-5 mb-5 p-5 justify-content-center'>
            <div className='d-flex flex-wrap'>
                <h1 className='col-lg-12 text-center mb-5'>Our Story</h1>
                <div className='col-lg-6 d-flex justify-content-center'>   
                    <div id='logoAbout' className='col-12 col-6 mb-5'></div>
                </div>
                <div className='col-lg-6'>
                    <p>Welcome to our sports predictions platform, where cutting-edge technology meets mathematical prowess to redefine the landscape of online sports forecasting. At [Nombre de la Empresa], we pride ourselves on being at the forefront of innovation, utilizing advanced mathematical models and artificial intelligence to deliver unparalleled predictions.</p>
                    <p>Our mission is simple: to emerge as the premier online predictions hub in the United States, setting new standards for accuracy and reliability. Driven by a passion for sports and a commitment to excellence, our team of experts combines mathematical precision with the power of artificial intelligence to analyze a myriad of factors influencing sports outcomes. From player statistics to historical data and current trends, our algorithms crunch the numbers to provide you with insights that go beyond mere speculation. At Alex Ace, we are not just another predictions platform; we are a dedicated team striving to revolutionize the way sports enthusiasts engage with their favorite games.</p>
                    <p>What sets us apart is our unwavering dedication to transparency and user satisfaction. We believe in empowering our users with the knowledge and tools they need to make informed decisions. Join us on this exciting journey as we redefine the future of online sports predictions in the United States and beyond.</p>
                </div>
            </div>
        </div>
        <div id='about' className="container mt-5 mb-5">
            <h4 className="text-center">Our Team</h4>
            <div className="row mt-4">
                <TeamCard />
                <TeamCard />
                <TeamCard />
            </div>
        </div>
        <div id='aboutBlock' className="container mt-5 mb-5">
            <AboutSlider />
        </div>
    <Footer />
    </>
    
  )
}

export default About