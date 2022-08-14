import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './student.css';


const StuNotification = () => {
    const [stu, setStu] = useState(true);
    const [ins, setIns] = useState(false);
    const instructor = () => {
        setStu(false);
        setIns(true);
    }
    const student = () => {
        setIns(false);
        setStu(true);
    }
    return (
        <div>
            <h2 className='col-6 fw-bold'>Notifications</h2>
            <div className='col-6'>
                <div className='d-flex'>
                    <div className='pe-4 fw-bold'>
                        <button onClick={instructor}>Instructor</button>
                    </div>
                    <div className='fw-bold'>
                        <button onClick={student}>Student</button>
                    </div>
                </div>

                {
                    stu && <div className='stunoti mt-4'>
                        <Link to="student" className="text-decoration-none text-dark">
                        <span >Hi guys, I have recently added a Bonus section where you can get access to Lectures on Bootstrap and Jquery. So do check out the new update in the course.Let me know what you guys would like to learn next. If you have any questions or suggestions fell free to message me.</span></Link>
                    </div>
                }
                {
                    ins && <div className='stunoti mt-4'>
                         <Link to="" className="text-decoration-none text-dark">
                        <h2>Add a new Course or update your existing course</h2>    
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default StuNotification;