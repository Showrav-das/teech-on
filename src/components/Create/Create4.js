import React from 'react';
import { Link } from 'react-router-dom';

const Create4 = () => {
    
    return (
        <div>
            <div className='shadow-lg header-height'>
                <div className='mt-2'>
                    <h5 className='float-start border-end me-4 fw-bold ps-4'>Udemy</h5>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className=''>Step 4 of 4 </p>
                    <div>
                        <Link to="/"><button className='border border-0 bg-white fw-bold'>Exit</button> </Link>
                    </div>
                </div>
            </div>
            <h2 className='mt-5 mb-5'>How much time can you spend creating your course per week?</h2>
            <p>There's no wrong answer. We can help you achieve your goals even if you don't have much time.</p>

            <div className='mt-5 '>
                <div className='d-flex radio-div'>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                           I'm very busy right now(0-2 hours)
                        </label>
                    </div>
                </div>
                <div>
                <div className='d-flex radio-div'>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                        I'll work on this on the side (2-4 hours)
                        </label>
                    </div>
                </div>
                </div>
                <div>
                <div className='d-flex radio-div'>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                        <label class="form-check-label" for="flexRadioDefault3">
                        I have lots of flexibility (5+ hours)
                        </label>
                    </div>
                </div>
                </div>
                <div>
                <div className='d-flex radio-div'>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                        <label class="form-check-label" for="flexRadioDefault4">
                        I haven't yet decided if I have time
                        </label>
                    </div>
                </div>
                </div>
            </div>
            <div className='d-flex justify-content-between mt-5 shadow-lg header-height'>
            <Link to="/course/create/3"><button className='bg-white text-dark ps-4 pe-4 pt-2 pb-2 border border-dark fw-bold'>Previous</button></Link>
                <Link to={`/manage/goals`}><button className='bg-dark text-white ps-4 pe-4 pt-2 pb-2 border border-0 fw-bold'>Create Course</button></Link>
            </div>
        </div>
    );
};

export default Create4;