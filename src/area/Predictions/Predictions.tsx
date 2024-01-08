import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Matches from '../../components/Matches/Matches';
import AnalysisCards from '../../components/AnalysisCards/AnalysisCards';
import OtherAnalysis from '../../components/AnalysisCards/OtherAnalysis';
import SportsResultsSlider from '../../components/ResultsSlider/ResultsSlider';
import ResultsSlider from '../../components/ResultsSlider/ResultsSlider';

function Predictions() {
  return (
    <>
    <Header />
    <ResultsSlider />
        <div className='container d-flex'>     
            <h1 className='col-lg-10 text-center'>Predictions</h1>
            
            {/* Dropdown for Sports */}
            <div className="dropdown d-flex col-lg-2 align-items-center justify-content-end" >
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select Your Sport
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

        <div id="mainAnalysis" className='container d-flex flex-wrap justify-content-center card-grey'>
            <h2 className='col-lg-12 text-center mt-4 mb-4'>Analysis</h2>
            <AnalysisCards />
            <AnalysisCards />
        </div>
        <div id='otherAnalysis' className='container d-flex flex-wrap mt-4 mb-5'>
            <div className='col-lg-6 d-flex flex-wrap'><OtherAnalysis /></div>
            <div className='col-lg-6 d-flex flex-wrap'><OtherAnalysis /></div>
            <div className='col-lg-6 d-flex flex-wrap'><OtherAnalysis /></div>
            <div className='col-lg-6 d-flex flex-wrap'><OtherAnalysis /></div>
        </div>

    <Footer />
    </>
  )
}

export default Predictions