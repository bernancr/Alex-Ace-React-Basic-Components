import React from 'react'

function MembershipCard() {
  return (
    <div className='p-1'>
        <div id='membershipHome' className="card text-center">
            <div className="card-body">
                <h3 className="card-title">Exclusive Membership</h3>
                <ul className="card-text">
                  <li>🔮 Early Access to Predictions</li>
                  <li>🎙️ Members-Only Webinars</li>
                  <li>📊 Insider Analytics</li>
                  <li>🎁 Special Offers & Discounts</li>
                </ul>
                <a href="#" className="btn btn-primary">Join Us Now!</a>
            </div>
        </div>
    </div>
  )
}

export default MembershipCard