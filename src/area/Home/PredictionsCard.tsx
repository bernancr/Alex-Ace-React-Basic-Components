import React from 'react';
import Matches from '../../components/Matches/Matches';

function PredictionsCard() {
  return (
    <div className='p-1 h-100'>
        <div id='predictions' className="card">
            <div className="d-flex flex-column card-body align-items-stretch">
                <h3 className="card-title">Recent Predictions</h3>
                <Matches />
                <Matches />
                <Matches />
                <a href="#" className="btn btn-primary">See More Predictions</a>
            </div>
        </div>
    </div>
  )
}

export default PredictionsCard