import React from 'react';
import img from '../../../images/video-help.jpg';

const Setup = () => {
    return (
        <div>
            <div>
                <h2 className='text-start'>Setup & test video</h2>
                <hr className='' />
                <div className=" bg-light m-4 gx-2 d-flex align-items-center">
                    <div className="">
                        <h5 className='mt-3 fw-bold'>Arrange your ideal studio and get early feedback</h5>

                        <p className=''>It's important to get your audio and video set up correctly now, because it's much more difficult to fix your videos after you’ve recorded. There are many creative ways to use what you have to create professional looking video.</p>
                    </div>
                    <div className="mb-3">
                        <div class="shadow-lg" style={{ width: '18rem' }}>
                            <img src={img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 className='mt-3 fw-bold'>Our library of resources</h5>

                                <p class="card-text">Tips and guides to structuring a course students love.</p>
                                <p className='mt-3 w-75 ms-4 fw-bold ps-5 border border-dark'>Create a test video</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-4'>
                    <h5 className='mt-3 fw-bold'>Tips</h5>
                    <h6 className='mt-3 fw-bold'>Equipment can be easy.</h6>
                    <p>You don’t need to buy fancy equipment. Most smartphone cameras can capture video in HD, and you can record audio on another phone or external microphone.</p>
                    <h6 className='mt-3 fw-bold'>Students need to hear you.</h6>
                    <p>A good microphone is the most important piece of equipment you will choose. There are lot of affordable options.. Make sure it’s correctly plugged in and 6-12 inches (15-30 cm) from you.</p>
                    <h6 className='mt-3 fw-bold'>Introduce yourself and create momentum.</h6>
                    <p>People online want to start learning quickly. Make an introduction section that gives learners something to be excited about in the first 10 minutes.</p>
                    <h6 className='mt-3 fw-bold'>Sections have a clear learning objective.</h6>
                    <p>Introduce each section by describing the section's goal and why it’s important. Give lectures and sections titles that reflect their content and have a logical flow.</p>
                    <h6 className='mt-3 fw-bold'>Lectures cover one concept.</h6>
                    <p>A good lecture length is 2-7 minutes to keep students interested and help them study in short bursts. Cover a single topic in each lecture so learners can easily find and re-watch them later.</p>
                    <h6 className='mt-3 fw-bold'>Mix and match your lecture types.</h6>
                    <p>Alternate between filming yourself, your screen, and slides or other visuals. Showing yourself can help learners feel connected.

                    </p>
                    <h6 className='mt-3 fw-bold'>Practice activities create hands-on learning.</h6>
                    <p>Help learners apply your lessons to their real world with projects, assignments, coding exercises, or worksheets.
                    </p>
                    <h3 className='mt-3 fw-bold'>Requirements</h3>
                    <ul>
                        <li>See the complete list of course quality requirements

</li>
                        <li>Your course must have at least five lectures</li>
                        <li>All lectures must add up to at least 30+ minutes of total video

</li>
                        <li>Your course is composed of valuable educational content and free of promotional or distracting materials

</li>
                    </ul>
                    <h3 className='mt-3 fw-bold'>Resources</h3>
                    <a href="">Teaching Center: Guide to equipment
                    </a>
                    <p>Our policies for instructors and students</p>
                    <a href="">Join the instructor community
                    </a>
                    <p>A place to connect with other instructors

</p>
                    <a href="">Join the community
                    </a>
                    <p>Learn about course creation from the Udemy Instructor Team and experienced instructors</p>

                </div>

            </div>
        </div>
    );
};

export default Setup;