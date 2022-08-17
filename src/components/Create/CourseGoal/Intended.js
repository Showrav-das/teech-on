import { faInfo, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../../../images/landing.jpg';
import React, { useState, useRef } from 'react';
import JoditEditor from "jodit-react";
import CourseStructure from './CourseStructure';
import Setup from './Setup';
import Film from './Film';
import Curriculum from './Curriculum';
import Captions from './Captions';

const Intended = () => {
    const config = {
        buttons: ['source'],
    };
   
    //const editor = useRef(null);
    const [content, setContent] = useState('');
    const [inten, setInten] = useState(true);
    const [landing, setLanding] = useState(false);
    const [message, setMessage] = useState(false);
    const [promotion, setPromotion] = useState(false);
    const [captions, setCaptions] = useState(false);
    const [structure, setStructure] = useState(false);
    const [film, setFilm] = useState(false);
    const [setup, setSetup] = useState(false);
    const [curiculum, setCuriculum] = useState(false);
    const [input, setInput] = useState(0);
    const [input2, setInput2] = useState(0);
    const [input3, setInput3] = useState(0);
    const [change, setChange] = useState(160);
    const [change2, setChange2] = useState(160);

    const structureHandle = () => {
        setLanding(false);
        setMessage(false);
        setSetup(false);
        setStructure(false);
        setInten(false);
        setPromotion(false);
        setCuriculum(false);
        setCaptions(false);
        setStructure(true);
    }
    const setupeHandle = () => {
        setLanding(false);
        setMessage(false);
        setSetup(false);
        setStructure(false);
        setInten(false);
        setPromotion(false);
        setCuriculum(false);
        setCaptions(false);
        setSetup(true);
    }
    const intended = () => {
        setLanding(false);
        setMessage(false);
        setSetup(false);
        setStructure(false);
        setPromotion(false);
        setCuriculum(false);
        setCaptions(false);
        setFilm(false);
        setInten(true);
    }
    const filmHandle = () => {
        setLanding(false);
        setMessage(false);
        setSetup(false);
        setStructure(false);
        setInten(false);
        setPromotion(false);
        setCuriculum(false);
        setCaptions(false);
        setFilm(true);
    }
    const curriculumHandle = () => {
        setLanding(false);
        setMessage(false);
        setSetup(false);
        setStructure(false);
        setInten(false);
        setPromotion(false);
        setCuriculum(false);
        setCaptions(false);
        setCuriculum(true);
    }
    const landingPage = () => {
        setLanding(false);
        setMessage(false);
        setSetup(false);
        setStructure(false);
        setInten(false);
        setPromotion(false);
        setCuriculum(false);
        setCaptions(false);
        setLanding(true);
    }

    const createInput = () => {
        console.log('object');
        setInput(input + 1);
    }
    const createInput2 = () => {
        console.log('object');
        setInput2(input2 + 1);
    }
    const createInput3 = () => {
        console.log('object');
        setInput3(input3 + 1);
    }
    const courseChange = (e) => {
        if (e.target.value) {
            console.log(e.target.value.length);
            if (change > 0) {
                setChange(change - 1);
                console.log('string');
            }
            else {
                setChange(change + 1);
                console.log('string2');
            }
        }
    }
    const courseChange2 = (e) => {
        if (e.target.value) {

            if (change2 > 0) {
                setChange2(change2 - 1);
            }
            else {
                setChange2(change2 + 1);
            }
        }
    }
    const messageHandle = () => {
        setLanding(false);
        setMessage(false);
        setSetup(false);
        setStructure(false);
        setInten(false);
        setPromotion(false);
        setCuriculum(false);
        setCaptions(false);
        setMessage(true);
    }
    const captionHandle = () => {
        setLanding(false);
        setMessage(false);
        setSetup(false);
        setStructure(false);
        setInten(false);
        setPromotion(false);
        setFilm(false);
        setCuriculum(false);
        setCaptions(true);
    }
    const promotionHandle = () => {
        setLanding(false);
        setMessage(false);
        setSetup(false);
        setStructure(false);
        setInten(false);
        setPromotion(false);
        setCuriculum(false);
        setCaptions(false);
        setPromotion(true);
    }
    return (
        <div>
            <div className='row mt-5'>
                <div className='col-lg-3 intended-ul'>
                    <ul>
                        <li className='fw-bold'>Plan Your Course</li>
                        <li>
                            <button onClick={intended}>Intended learners</button>
                        </li>
                        <li>
                            <button onClick={structureHandle}>Course structure</button>
                        </li>
                        
                        <li>
                            <button onClick={setupeHandle}>Setup & test video</button>
                        </li>
                        <li className='fw-bold'>Create your content</li>
                        <li> <button onClick={filmHandle}>Film & edit</button></li>
                        <li> <button onClick={curriculumHandle}>Curriculum</button></li>
                        <li> <button onClick={captionHandle}>Captions</button></li>
                        <li> <button>Practice tests</button></li>
                        <li className='fw-bold'>Publish your course</li>

                        <li> <button onClick={landingPage}>Course landing page</button></li>
                        <li> <button>Pricing</button></li>
                        <li> <button onClick={promotionHandle}>Promotions</button></li>
                        <li> <button onClick={messageHandle}>Course message</button></li>
                    </ul>
                    <button className='float-start ms-5 btn btn-success ps-5 pe-5'>Publish course</button>
                </div>
                <div className="col-lg-9">
                    <div className='shadow-lg text-start ps-4 mb-5'>
                        {
                            structure && <CourseStructure/>
                        }
                        {
                            setup && <Setup/>
                        }
                        {
                            film && <Film/>
                        }
                        {
                            captions && <Captions/>
                        }
                        {
                            inten && <div>
                                <h2 className='text-start'>Intended learners</h2>
                                <hr className='' />
                                <p>The following descriptions will be publicly visible on your Course Landing Page and will have a direct impact on your course performance. These descriptions will help learners decide if your course is right for them.</p>
                                <h6>What will students learn in your course?</h6>
                                <p>You must enter at least 4 learning objectives or outcomes that learners can expect to achieve after completing your course.</p>


                                <div class="form-check">
                                    <input onChange={courseChange} maxLength={160} class="intend-div" type="text" name="flexRadioDefault" placeholder='Example: Define the roles and responsibilities of a project manager' id="flexRadioDefault3" />
                                    <span>{change} </span>
                                </div>
                                <div class="form-check">
                                    <input class="intend-div" type="text" name="flexRadioDefault" placeholder='Example: explain estimate of your project' id="flexRadioDefault3" />
                                </div>
                                <div class="form-check">
                                    <input onChange={courseChange2} maxLength={160} class="intend-div" type="text" placeholder='Example: Complete a case study to manage a project from conception to completion' name="flexRadioDefault" id="flexRadioDefault3" />
                                    <span>{change2} </span>
                                </div>
                                <div class="form-check">
                                    <input class="intend-div" type="text" name="flexRadioDefault" placeholder='Example: explain estimate of your project' id="flexRadioDefault3" />
                                </div>
                                {Array.from(Array(input)).map(() => {
                                    return <div class="form-check">
                                        <input placeholder='Example: explain estimate of your project' class="intend-div" type="text" name="flexRadioDefault" id="flexRadioDefault3" />
                                    </div>
                                        ;
                                })}
                                <button className='response-btn' onClick={() => createInput()}><FontAwesomeIcon icon={faPlus} /> Add more response</button>
                                <h5 className='text-start'>What are the requirements or prerequisites for taking your course?</h5>
                                <p>List the required skills, experience, tools or equipment learners should have prior to taking your course.
                                    If there are no requirements, use this space as an opportunity to lower the barrier for beginners.</p>
                                <div class="form-check">
                                    <input class="intend-div" type="text" name="flexRadioDefault" placeholder='Example: No programming experience needed. You will learn everything you need to know' id="flexRadioDefault3" />
                                </div>
                                {Array.from(Array(input2)).map(() => {
                                    return <div class="form-check">
                                        <input placeholder='Example: explain estimate of your project' class="intend-div" type="text" name="flexRadioDefault" id="flexRadioDefault3" />
                                    </div>
                                        ;
                                })}
                                <button className='response-btn' onClick={() => createInput2()}><FontAwesomeIcon icon={faPlus} /> Add more response</button>
                                <h5>Who is this course for?</h5>
                                <p>
                                    Write a clear description of the intended learners for your course who will find your course content valuable.
                                    This will help you attract the right learners to your course.</p>
                                <div class="form-check">
                                    <input placeholder='Example: explain estimate of your project' class="intend-div" type="text" name="flexRadioDefault" id="flexRadioDefault3" />

                                </div>
                                {Array.from(Array(input3)).map(() => {
                                    return <div class="form-check">
                                        <input placeholder='Example: explain estimate of your project' class="intend-div" type="text" name="flexRadioDefault" id="flexRadioDefault3" />
                                    </div>
                                })}
                                <button className='mb-5 response-btn' onClick={() => createInput3()}><FontAwesomeIcon icon={faPlus} /> Add more to your response</button>
                            </div>

                        }
                        {
                            landing && <div>
                                <div className='text-start'>
                                    <div className='text-start ps-4 mb-5'>
                                        <h2 className='text-start'>Course landing page</h2>
                                        <hr className='' />
                                    </div>
                                    <p className='fw-bold'>Course title</p>
                                    <div class="">
                                        <input placeholder='insert your course title' class="intend-div" type="text" name="flexRadioDefault" id="flexRadioDefault3" />
                                    </div>
                                    <p className='fw-bold mt-2'>Course Subtitle</p>
                                    <div class="">
                                        <input placeholder='insert your course subtitle' class="intend-div" type="text" name="flexRadioDefault" id="flexRadioDefault3" />
                                    </div>
                                    <p className='fw-bold mt-2'>Course Description</p>
                                    <div className='w-75'>
                                   <JoditEditor
                                        //ref={editor}
                                        value={content}
                                        config={config}   
                                        onBlur={newContent => setContent(newContent)}
                                    />
                                   </div>
                                    <p className='fw-bold mt-2'>Basic Info</p>
                                    <div className='d-flex'>
                                        <select class="w-25 p-3 me-2" aria-label="Default select example">
                                            <option selected>English(US)</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <select class="w-25 p-3 me-2" aria-label="Default select example">
                                            <option selected>--Select Level--</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <select class="w-25 p-3 me-2" aria-label="Default select example">
                                            <option selected>--Select Category--</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <h5 className='mt-3'>What is primarily taught in your course? <FontAwesomeIcon icon={faInfo} /> </h5>
                                    <div class="">
                                        <input placeholder='e.g: Landescape photograph' class="intend-div" type="text" name="flexRadioDefault" id="flexRadioDefault3" />
                                    </div>
                                    <div className='row mt-5'>
                                        <p className='fw-bold'>Course Image</p>
                                        <div className="col-lg-6">

                                            <img src={img} className='img-fluid' alt="" />
                                        </div>
                                        <div className="col-lg-6">
                                            <p>Upload your course image here. It must meet our course image quality standards to be accepted. Important guidelines: 750x422 pixels; .jpg, .jpeg,. gif, or .png. no text on the image.</p>
                                            {/*<input type="file" />*/}
                                            <div class="input-group mb-3 file-uploader--file-uploader-large--1EDEu">
                                                {/*<label class="input-group-text" for="inputGroupFile01">Upload File</label>*/}
                                                <input accept='.jpg .png' type="file" class="form-control" id="inputGroupFile01" />
                                                {/*<span class="file-uploader--fake-input--35XUn"><span class="file-uploader--fake-input-text--2t3aS">No file selected</span></span>*/}
                                            </div>
                                        </div>
                                    </div>
                                    {/* video promotion */}

                                    <div className='row mt-5'>
                                        <p className='fw-bold'>Promotion Video</p>
                                        <div className="col-lg-6">

                                            <img src={img} className='img-fluid' alt="" />
                                        </div>
                                        <div className="col-lg-6">
                                            <p>Students who watch a well-made promo video are 5X more likely to enroll in your course. We've seen that statistic go up to 10X for exceptionally awesome videos. Learn how to make yours awesome!</p>
                                            {/*<input type="file" />*/}
                                            <div class="input-group mb-3 file-uploader--file-uploader-large--1EDEu">
                                                {/*<label class="input-group-text" for="inputGroupFile01">Upload File</label>*/}
                                                <input accept='.jpg .png' type="file" class="form-control" id="inputGroupFile01" />
                                                {/*<span class="file-uploader--fake-input--35XUn"><span class="file-uploader--fake-input-text--2t3aS">No file selected</span></span>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            curiculum && <Curriculum/>
                        }
                        {
                            message && <div>
                                <h2 className='text-start'>Course messages</h2>
                                <hr className='' />
                                <p className='w-75'>Write messages to your students (optional) that will be sent automatically when they join or complete your course to encourage students to engage with course content. If you do not wish to send a welcome or congratulations message, leave the text box blank.</p>
                                <h5 className='mt-3 fw-bold'>Welcome Message</h5>
                                    <div className='w-75'>
                                   <JoditEditor
                                        //ref={editor}
                                        value={content}
                                        config={config}   
                                        onBlur={newContent => setContent(newContent)}
                                    />
                                   </div>
                                <h5 className='mt-3 fw-bold'>Congratulations Message</h5>
                                    <div className='w-75'>
                                   <JoditEditor
                                        //ref={editor}
                                        value={content}
                                        config={config}   
                                        onBlur={newContent => setContent(newContent)}
                                    />
                                   </div>
                            </div>
                        }
                        {
                            promotion && <div className='me-3'>
                                <h2 className='text-start'>Promotions</h2>
                                <hr className='' /> 
                                <p className='w-75 border ps-5 pe-5 pt-2 pb-2'><FontAwesomeIcon icon={faInfo} className="pe-4" />  We have updated the coupon system, and there is more to come. Announcing new free coupon limits and bulk coupon creation. Learn more.</p>
                                <div className='border'>
                                    <div className='m-3'>
                                        <h2 className='text-start mt-3'>Refer students</h2>
                                        
                                <p className='w-75 ps-5 pe-5 pt-2 pb-2'>Any time a student uses this link, we will credit you with the sale. Learn more</p>
                                <input defaultValue={'https://www.udemy.com/course/draft/4829974/?referralCode=35DE95F2339B6D7020CC'} class="intend-div" type="text" name="flexRadioDefault" id="flexRadioDefault3" />
                                <button className='btn btn-dark'>COPY</button>
                                </div>
                                </div>
                                <h2 className='text-start mt-3'>Coupons</h2>
                                <div className="border">
                                    <div className='m-3'>
                                    <h5>August Coupons</h5>
                                    <p>You cannot create coupons for a free course</p>
                                    </div>
                                </div>
                                <h2 className='text-start mt-3'>Active Schedule Coupons</h2>
                                <div className="border">
                                    <div className='m-3'>
                                    <p className='text-center'>No coupon found</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h2 className='text-start mt-3'>Expire Coupons</h2>
                                    <input placeholder='Example: explain estimate of your project' class="intend-div" type="text" name="flexRadioDefault" id="flexRadioDefault3" />
                                </div>
                                <div className="border">
                                    <div className='m-3'>
                                    <p className='text-center'>No coupon found</p>
                                    </div>
                                </div>
                            </div>
                        }
                        {/* landing page */}
                    </div>
                </div>

            </div>





        </div>
    );
};

export default Intended;