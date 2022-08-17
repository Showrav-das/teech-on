import React from 'react';
import img from '../../../images/library-help.jpg';
const CourseStructure = () => {
    return (
        <div>
            <div>
                <h2 className='text-start'>Course structure</h2>
                <hr className='' />
                <div className=" bg-light m-4 gx-2 d-flex align-items-center">
                    <div className="">
                        <h5 className='mt-3 fw-bold'>There's a course in you. Plan it out.</h5>

                        <p className=''>Planning your course carefully will create a clear learning path for students and help you once you film. Think down to the details of each lecture including the skill you'll teach, estimated video length, practical activities to include, and how you'll create introductions and summaries.</p>
                    </div>
                    <div className="mb-3">
                        <div class="shadow-lg" style={{ width: '18rem' }}>
                            <img src={img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 className='mt-3 fw-bold'>Our library of resources</h5>

                                <p class="card-text">Tips and guides to structuring a course students love.</p>
                                <p className='mt-3 w-75 ms-4 fw-bold ps-5 border border-dark'>Teaching center</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-4'>
                    <h5 className='mt-3 fw-bold'>Tips</h5>
                    <h6 className='mt-3 fw-bold'>Start your goals</h6>
                    <p>Setting goals for what learners will accomplish in your course (also known as <a href="">learning objectives</a> ) at the beginning will help you determine what content to include in your course and how you will teach the content to help your learners achieve the goals.</p>
                    <h6 className='mt-3 fw-bold'>Create an outline.</h6>
                    <p>Decide what skills you’ll teach and how you’ll teach them. Group related lectures into sections. Each section should have at least 3 lectures, and include at least one assignment or practical activity. Learn more.</p>
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
                    <a href="">Udemy Trust & Safety
                    </a>
                    <p>Our policies for instructors and students</p>
                    <a href="">Join the instructor community
                    </a>
                    <p>A place to connect with other instructors

</p>
                    <a href="">Official Udemy Course: How to Create an Online Course
                    </a>
                    <p>Learn about course creation from the Udemy Instructor Team and experienced instructors</p>

                </div>

            </div>
        </div>
    );
};

export default CourseStructure;