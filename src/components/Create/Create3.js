import React from 'react';
import { Link } from 'react-router-dom';

const Create3 = () => {
    return (
        <div>
            <div className='shadow-lg header-height'>
            <div className='mt-2'>
                <h5 className='float-start border-end me-4 fw-bold ps-4'>Udemy</h5>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
                <p className=''>Step 1 of 4 </p>
                <div>
                    <Link to="/"><button className='border border-0 bg-white fw-bold'>Exit</button> </Link>
                </div>
            </div>
            </div>
                <h2 className='mt-5'>What category best fits the knowledge you'll share?</h2>
                <p>If you're not sure about the right category, you can change it later.</p>
            <div className='mt-5'>
                <select class="w-50 p-3"  aria-label="Default select example">
                    <option selected>Choose a category</option>
                    <option value="1">Design</option>
                    <option value="2">Marketing</option>
                    <option value="3">Music</option>
                    <option value="3">Personal Development</option>
                    <option value="3">Life style</option>
                </select>
            </div>
            <div className='d-flex justify-content-between mt-5 shadow-lg header-height'>
                <Link to=""><button className='bg-dark text-white ps-4 pe-4 pt-2 pb-2 border border-0 fw-bold'>Previous</button></Link>
                <Link to={`/course/create/4`}><button className='bg-dark text-white ps-4 pe-4 pt-2 pb-2 border border-0 fw-bold'>Continue</button></Link>
            </div>
        </div>
    );
};

export default Create3;