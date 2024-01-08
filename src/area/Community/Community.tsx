import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CommunitySlider from './CommunitySlider';
import TestimonialCommunityCard from '../../components/TestimonialCommunityCard/TestimonialCommunityCard';

function Community() {
  return (
    <>
    <Header />
        <div id='community' className='card container d-flex flex-wrap mt-5 mb-5 p-5 pb-0 justify-content-center'>
            <div className='d-flex flex-wrap'>
                <h1 className='col-lg-12 text-center mb-5'>Community</h1>
                <div className='col-lg-6 d-flex justify-content-center'>   
                    <img className='w-100' src="../assets/community/communityImg.png" alt="" />
                </div>
                <div className='col-lg-6'>
                <p>Alex Ace has established itself as a prominent sports prediction site, gaining popularity among both enthusiasts and experts. By joining the Alex Ace community, members benefit from an exclusive &quot;Sign up Bonus,&quot; a welcoming offer that underscores the site's commitment to its users. Furthermore, the platform provides access to detailed analyses and match predictions, essential for those interested in understanding the dynamics and trends in the sports world.</p>
                <p>These predictions are based on comprehensive data analysis, offering members a significant competitive edge. But the benefits of Alex Ace extend beyond mere predictions. Members gain access to a range of expert &quot;tips&quot; covering various sports. These tips are provided by individuals deeply knowledgeable in their respective fields, an invaluable resource for those looking to enhance their prediction strategies.</p>
                <p>A highlight is the opportunity to interact and connect with a network of sports experts and enthusiasts. This interaction not only enriches the user experience but also facilitates the exchange of ideas and strategies, strengthening the community and collective knowledge of its members. In summary, being part of the Alex Ace community is a comprehensive experience that goes beyond simple predictions, offering a platform for growth and connection among sports fans.</p>
                </div>
            </div>
        </div>
        <div id='technologies' className="container mt-5 mb-5">
            <CommunitySlider />
        </div>
        <div id='about' className="container mt-5 mb-5">
            <h4 className="text-center">Our Team</h4>
            <div className="row mt-4">
                <TestimonialCommunityCard />
                <TestimonialCommunityCard />
                <TestimonialCommunityCard />
            </div>
        </div>
    <Footer />
    </>
    
  )
}

export default Community