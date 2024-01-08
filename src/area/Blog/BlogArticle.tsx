import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function BlogArticle() {
  return (
    <>
    <Header />
    <div id='article' className='container d-flex flex-wrap mt-5 mb-5 p-5 justify-content-center'>
        <div className='col-lg-6'>
            <h1 className='col-lg-12 text-center mb-4'>Blog</h1>
            <section className='col-lg-12 d-flex flex-wrap'>
                <img src="../assets/predictions/imgAnalysis.png" className='rounded-3 w-100 h-auto mb-3' alt="" />
                <h2>The Math Behind Predicting the Unpredictable: A Deep Dive into Our ML Models</h2>
                <p className='col-lg-10'><em>May 20th 2020</em></p>
                <div>
                    <p>Hey there, sports enthusiasts and number crunchers! Ever watched a game and thought, &quot;I totally saw that coming&quot;? Well, we did too, but with a little help from our friend&mdash;Machine Learning (ML). Today, we&apos;re pulling back the curtain to give you a glimpse into the math and algorithms that power our predictions. Don&apos;t worry, we&apos;ll keep the jargon to a minimum!</p>
                    <p>The Ingredients: Data Sets</p>
                    <p>Before we cook up any predictions, we need quality ingredients, aka data. We use a blend of:</p>
                    <p>Historical game outcomes</p>
                    <p>Player stats</p>
                    <p>Weather conditions</p>
                    <p>And even crowd noise levels!</p>
                    <p>The Recipe: Algorithms</p>
                    <p>Now, let&apos;s talk about the chefs in our kitchen&mdash;our algorithms. We primarily use two types:</p>
                    <p>Random Forest: Think of this as a council of wise trees that vote to make a decision. It&apos;s great for handling a mix of numerical and categorical data.</p>
                    <p>Neural Networks: Inspired by the human brain, this algorithm is our go-to for complex patterns and relationships.</p>
                    <p>The Secret Sauce: Feature Engineering</p>
                    <p>Feature engineering is like seasoning; it can make or break the dish. We carefully select which features (data points) are most relevant for accurate predictions. For example, a player&apos;s recent performance might weigh more than their performance from two seasons ago.</p>
                    <p>The Taste Test: Validation</p>
                    <p>Before we serve up any predictions, we taste-test them through a process called cross-validation. This ensures our model isn&apos;t just memorizing the data (overfitting) or making overly generalized guesses (underfitting).</p>
                    <p>The Final Dish: Your Predictions</p>
                    <p>Once we&apos;re confident in our model, it&apos;s showtime! We roll out our predictions, but the game doesn&apos;t stop there. We&apos;re continually refining our models based on new data and outcomes.</p>
                    <p>So, there you have it! A sneak peek into the kitchen where all the magic happens. Got questions or want to know more? Drop a comment below or join our exclusive webinar next week!</p>
                </div>
            </section>
        </div>
    </div>
    
    
    
    <Footer />
    </>
    
  )
}

export default BlogArticle