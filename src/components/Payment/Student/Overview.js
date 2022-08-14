import React from 'react';

const Overview = () => {
    return (
        <div className='container'>
            <div className='text-start'>
                <h4>About this cvourse</h4>
                <p>Learn HTML, CSS and JS in a better way</p>
            </div>
            <hr />
            <div className='row text-start'>
                <div className="col-lg-4">
                    <p>By the numbers</p>
                </div>
                <div className="col-lg-4 overview">
                    <p>Skill level: Beginner Level</p>
                    <p>Students: 11243</p>
                    <p>Languages: English</p>
                    <p>Captions: Yes</p>
                </div>
                <div className="col-lg-4 overview">
                    <p>Lectures: 63</p>
                    <p>Video: 5 total hours</p>
                </div>
            </div>
            <hr />
            <div className='row text-start mt-2'>
                <div className="col-lg-4">
                    <p>Certificates</p>
                </div>
                <div className="col-lg-4">
                    <p>
                        Get Udemy certificate by completing entire course</p>
                    <button className='border border-dark pt-1 pb-1 ps-5 pe-5 btn-disable' disabled>Udemy Certificate</button>
                </div>
            </div>
            <hr />
            <div className='row text-start mt-2'>
                <div className="col-lg-4">
                    <p>Features</p>
                </div>
                <div className="col-lg-4">
                    <p>Available on iOS and Android.</p>
                </div>
            </div>
            
            <hr />
            <div className='row text-start mt-2'>
                <div className="col-lg-4">
                    <p>Description</p>
                </div>
                <div className="col-lg-8">
                    <p>This course focuses on not only clearing the basics but also provides hands on learning experience with various hands on projects and exercises. The course helps to give a clear understanding of real life websites and teaches you how to create one. <br />

                        HTML, CSS and JavaScript are the foundation for web development. They make up most of the front end technologies which are used to create a website. Unlike other courses this course does not focus on the quantity of learning rather it focuses on the quality of learning. Learning through practicals and hand on exercises is the best form of learning. This course too emphasizes implementation of each topic that is learnt. <br />

                        This course is completely focused on providing you a good grasp on the front end technologies of web development that is HTML, CSS and JavaScript. This course covers the basics of HTML starting from how to create the basic structure of a website, text formatting, creating forms etc. CSS for styling the website elements and JavaScript for making the website responsive. This course can be taken up by anyone. Even if you do not have any coding background, you can create a website and make it live.
                        <br />
                        At the end of this course you will learn to create a real life live website !</p>
                </div>
            </div>
        </div>
    );
};

export default Overview;