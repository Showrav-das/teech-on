import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Captions = () => {
    return (
        <div>
            <div className='d-flex justify-content-between m-4'>
            <div>
            <h2 className='text-start'>Curriculum</h2>
            </div>
            <div className=''>
                <select class=" p-3"  aria-label="Default select example">
                    <option selected>English (US)</option>
                    <hr />
                    <option value="1">Add new language</option>  
                </select>
            </div>
            <p>0/0 published lectures captioned <FontAwesomeIcon icon={faInfo} /> </p>
           
            </div>
            <hr className='' />
            <div className='border p-4'>
                <p className=''> <FontAwesomeIcon icon={faInfo} />  When you add video lectures to your course via the Curriculum you will be able to add captions to those videos here.</p>
            </div>
        </div>
    );
};

export default Captions;