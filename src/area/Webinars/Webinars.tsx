import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WebinarSlider from './WebinarSlider';

function Webinars() {
  return (
    <>
    <Header />
    <div className='container mt-5 mb-5 text-center'>
        <h1>Webinars:</h1>
        <h3>The Science of Sports Predictions: A Live Session with Alex ACE and [Sports Analyst's Name]</h3>        
    </div>
    <div className='container d-flex flex-wrap'>
        <div className='col-12 col-lg-6 p-1'>
            <div className='card container mx-1 mb-2'>
                <div className='d-flex flex-wrap'>
                    <h3>Pre-Webinar Steps</h3>
                    <ol>
                        <li>
                            <b>Topic Selection & Research:</b>
                            Finalize the topic and subtopics to be covered.
                            Research statistics, case studies, and recent trends to discuss.
                        </li>
                        <li>
                            Guest Speaker Coordination:
                            Confirm availability and prep the guest speaker on the webinar's      
                            agenda.
                        </li>
                        <li>
                            Promotion:
                            Announce the webinar on social media, email newsletters, and your 
                            website.
                            Use the hashtag #ScienceOfSportsPredictions for tracking engagement.
                        </li>
                        <li>
                            Technical Setup:
                            Choose a reliable webinar platform (e.g., Zoom, WebEx).
                            Test audio, video, and screen-sharing features.
                        </li>
                        <li>
                            Content Preparation:
                            Create slides, polls, and Q&A segments.
                            Prepare a script or talking points for both hosts.
                        </li>
                    </ol>
                </div>
            </div>
            <div className='card container mx-1 mb-2'>
                <div className='d-flex flex-wrap'>
                    <h3>Post-Webinar Steps</h3>
                        <ol>
                            <li>
                                Follow-Up Email:
                                Thank attendees and provide a webinar replay link.
                            </li>
                            <li>
                                Data Analysis:
                                Review engagement metrics and survey responses.
                            </li>
                            <li>
                                Content Repurposing:
                                Turn the webinar into blog posts, social media snippets, or even a podcast episode.
                            </li>
                            <li>
                                Plan the Next One:
                                Use the insights gained to plan your next webinar.
                            </li>
                        </ol>
                </div>
            </div>
        </div>
        <div className='col-12 col-lg-6 p-1'>
            <div className='card container mx-1 mb-2 h-100'>
                <div className='d-flex flex-wrap'>
                    <h3>Webinar Agenda</h3>
                    <ol>
                        <li>
                            Introduction (5 mins)
                            Welcome attendees and introduce hosts.
                            Brief overview of Alex ACE and its mission.
                        </li>
                        <li>
                            The Importance of Data in Sports (10 mins) See Below
                            Discuss how data analytics is changing the sports landscape.
                        </li>
                        <li>
                            Our Prediction Models Explained (15 mins)
                            Random Forest and Neural Networks: A layman's guide.
                        </li>
                        <li>
                            Guest Speaker Segment (20 mins)
                            [Sports Analyst's Name] discusses the practical applications and limitations of sports predictions.
                        </li>
                        <li>
                            Live Demo (10 mins)
                            Show a real-time prediction using your platform.
                        </li>
                        <li>
                            Q&A Session (15 mins)
                            Open the floor for questions from the audience.
                        </li>
                        <li>
                            Exclusive Membership Pitch (5 mins)
                            Briefly introduce your membership model and its benefits.
                        </li>
                        <li>
                            Closing Remarks (5 mins)
                            Thank attendees and guest speaker.
                            Announce the next webinar or other upcoming events.
                        </li>
                        <li>
                            Post-Webinar Survey
                            A quick survey to gather feedback.
                        </li>
                        <li></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <WebinarSlider />



    <Footer />
    </>
  )
}

export default Webinars