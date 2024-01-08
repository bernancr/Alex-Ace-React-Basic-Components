import React from 'react';

function FeaturedBlogCard() {
  return (
    <>
        <div className='col-lg-6 p-2'>
            <img src="../assets/predictions/imgAnalysis.png" className='rounded-3 w-100 h-auto' alt="" />
        </div>
        <div className='col-lg-6'>
            <h3 className='mt-3'>Blog Title Here</h3>
            <p>Meet the power of machine learning and mathematical models! Our mission is to elevate your game-day experience by harnessing cutting-edge technology for precise and insightful match forecasts. Join us as we revolutionize the way you engage with sports – making every prediction count!</p>
            <p>May 20th 2020</p>
            <a href="#" className="btn btn-primary mb-5">Read Article</a>
        </div>
    </>
  )
}

export default FeaturedBlogCard