import { faAngleDown, faFile, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Curriculum = () => {
    const [details, setDetails] = useState(false);
    const arrowBtn = () => {
        setDetails(!details);
    }
    return (
        <div>
            <div className='m-4'>
                <h2 className='text-start'>Curriculum</h2>
                <hr className='' />
                <div className='p-4'>
                    <p>Start putting together your course by creating sections, lectures and practice (quizzes, coding exercises and assignments).If you're intending to offer your course for free, the total length of video content must be less than 2 hours.</p>
                    <div className='border border-dark bg-light'>
                        <div className='m-4'>
                            <span className='fw-bold'>Section 1: <FontAwesomeIcon icon={faFile} /></span> <span>Introduction</span>
                            <div className=''></div>
                            <div className='m-4 bg-white p-4 d-flex justify-content-between border border-dark'>
                                <p className=''><span className='fw-bold'>Lecture 1: <FontAwesomeIcon icon={faFile} /></span> <span>Introduction</span></p>

                                <div className='d-flex'>
                                    <h6 className='border border-dark p-2'><FontAwesomeIcon icon={faPlus} /> Content </h6>
                                    <button onClick={arrowBtn} className='ms-2 border border-0'><FontAwesomeIcon icon={faAngleDown} /> </button>
                                    
                                </div>
                                
                            </div>
                            {
                                        details && <div>
                                            <p className='fw-bold'><FontAwesomeIcon icon={faPlus} /> Description</p>
                                            <p className='fw-bold'><FontAwesomeIcon icon={faPlus} /> Resources</p>
                                        </div>
                                    }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Curriculum;