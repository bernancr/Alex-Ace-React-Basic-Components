import React from 'react'

function Matches() {
  return (
    <div className='matches mt-1 mb-1'>
        <div className='match d-flex flex-wrap col-12'>
            <span className='textDate col-12'>
                7:15 PM, DEC 4
            </span>
            <div className='col-12 col-lg-10'>
                <div className='gameBar d-flex justify-content-between m-2 b-radius-sm'>
                    <img className='teamImg' src='../assets/teams/bengals.png' />
                    <span className='team'>Bengals</span>
                    <span className='teamPercentage'>15%</span>
                </div>
            </div>
            <div className='col-12 col-lg-2'>
                <div className='d-flex numberPrediction justify-content-center align-items-center m-2 b-radius-sm'>
                    +9.5
                </div>
            </div>

            <div className='col-12 col-lg-10'>
                <div className='gameBar d-flex justify-content-between m-2 b-radius-sm'>
                    <img className='teamImg' src='../assets/teams/bengals.png' />
                    <span className='team'>Bengals</span>
                    <span className='teamPercentage'>15%</span>
                </div>
            </div>
            <div className='col-12 col-lg-2'>
                <div className='d-flex numberPrediction justify-content-center align-items-center m-2 b-radius-sm'>
                    +9.5
                </div>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Matches