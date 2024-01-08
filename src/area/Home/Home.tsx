import React from 'react';
import Header from '../../components/Header';
import Heroe from '../../components/Heroe';
import Footer from '../../components/Footer';
import AboutCard from './AboutCard';
import MembershipCard from './MembershipCard';
import PredictionsCard from './PredictionsCard';
import NewsSlider from './NewsSlider';
import Testimonials from './Testimonials';
import '../../components/NewsCard/newsCard.css';

function Home() {
  return (
    <>
    <Header />
    <Heroe />
    <div className='container d-flex flex-wrap col-lg-12 pt-3 pb-3'>
      <div className='col-lg-6'>
        <AboutCard />
        <MembershipCard />
      </div>
      <div className='col-12 col-lg-6'>
        <PredictionsCard />
      </div>
    </div>
    <div id='newsBlock' className='container-fluid d-flex flex-wrap col-lg-12 pt-3 pb-3'>
      <NewsSlider />
    </div>
    <div className='col-12'>
      <Testimonials />
    </div>
    {/* <MembershipCard />
    <PredictionsCard /> */}
    <Footer />
    </>
  )
}

export default Home