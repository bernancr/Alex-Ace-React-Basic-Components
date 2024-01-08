import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Matches from '../../components/Matches/Matches';
import WebinarSlider from '../Webinars/WebinarSlider';

function Member() {
  return (
    <>
    <Header />
        <div className='container container d-flex flex-wrap mt-5 mb-1 px-5 justify-content-center'>
            <h1 className='col-lg-12 text-center mb-5'>Membership</h1>

        </div>
        <div id='memberLinks' className='container col-lg-8 d-flex mb-5 flex-wrap justify-content-center'>
                <a href='#' className='btn btn-primary m-1 col-12 col-lg-3'>Profile</a>
                <a href='#' className='btn btn-primary m-1 col-12 col-lg-3'>Premium Predictions</a>
                <a href='#' className='btn btn-primary m-1 col-12 col-lg-3'>Exclusive Webinars</a>
        </div>
        <div className='card container d-flex flex-wrap mt-1 mb-5 justify-content-center'>
            <div className='d-flex flex-wrap'>
                <img width="70px" height="70px" src='../assets/member/memberPhoto.png' className='mx-2'/>
                <h2>UserName</h2>
            </div>
            <hr />
            <div className='d-flex flex-wrap'>
                <div className='col-12 col-lg-3 mb-2'>
                    <div className='p-2 m-1 h-100 highBox rounded-3 d-flex flex-wrap justify-content-center align-self-center'>
                        <h2 className='col-12'>9.6</h2>
                        <div><strong>AVERAGE SCORE</strong></div>
                        <div>Better than 86% of players</div>
                    </div>
                </div>
                <div className='col-12 col-lg-3 mb-2'>
                    <div className='p-4 m-1 h-100 highBox rounded-3 d-flex flex-wrap align-self-center'>
                        <h5 className='col-12'><strong>Last Pick</strong></h5>
                        <div>Week 14 NFL Football</div>
                        <div><strong>IN PROGRESS</strong></div>
                    </div>
                </div>
                <div className='col-12 col-lg-3 mb-2'>
                    <div className='p-4 m-1 h-100 highBox rounded-3 d-flex flex-wrap align-self-center'>
                        <h5 className='col-12'><strong>Next Webinar</strong></h5>
                        <div>Selecting Picks as Expert</div>
                        <a href='#' className='btn btn-primary m-1 col-12 col-lg-2 w-100'>Exclusive Webinars</a>
                    </div>
                </div>
                <div className='col-12 col-lg-3 mb-2'>
                    <div className='p-4 m-1 h-100 highBox rounded-3 d-flex flex-wrap align-self-center'>
                        <h5 className='col-12'><strong>Special Discount</strong></h5>
                        <div>Sports Event Coming Soon...</div>
                        <a href='#' className='btn btn-primary m-1 col-12 col-lg-2 w-100'>Get Promo</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='container d-flex'>
            <h2 className='col-lg-10'>Early Predictions</h2>
            {/* Dropdown for Sports */}
            <div className="dropdown d-flex col-lg-2 align-items-center justify-content-end" >
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select your Sport
                </a>

                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">NFL</a></li>
                    <li><a className="dropdown-item" href="#">MLB</a></li>
                    <li><a className="dropdown-item" href="#">NBA</a></li>
                    <li><a className="dropdown-item" href="#">NHL</a></li>
                    <li><a className="dropdown-item" href="#">Soccer</a></li>
                    <li><a className="dropdown-item" href="#">Others</a></li>
                </ul>
            </div>

        </div>
        
        <div className='card container d-flex flex-wrap mt-5 mb-5'>
            <div className='d-flex'>
                <div className='col-lg-6 p-4'>
                    <Matches />
                    <Matches />
                    <Matches />
                </div>
                <div className='col-lg-6 p-4'>
                    <Matches />
                    <Matches />
                    <Matches />
                </div>
            </div>
        </div>

        <WebinarSlider />
    <Footer />
    </>
  )
}

export default Member