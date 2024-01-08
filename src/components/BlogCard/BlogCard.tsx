import React from 'react';

function BlogCard() {
  return (
    <>
    <div className='col-lg-6 d-flex flex-wrap p-2 justify-content-center'>
        <img src="../assets/predictions/imgAnalysis.png" className='rounded-3 w-100 h-auto p-0' alt="" />
        <h3 className='mt-3 col-lg-10'>Blog Title Here</h3>
        <p className='col-lg-10'>Meet the power of machine learning and mathematical models! Our mission is to elevate your game-day experience by harnessing cutting-edge technology for precise and insightful match forecasts. Join us as we revolutionize the way you engage with sports – making every prediction count!</p>
        <p className='col-lg-10'><em>May 20th 2020</em></p>
        <a href="#" className="btn btn-primary mb-5">Read Article</a>
    </div>
    </>
  )
}

export default BlogCard