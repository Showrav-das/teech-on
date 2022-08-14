import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Create1 = () => {

     const [check, setCheck] = useState(false);
    const [check2, setCheck2] = useState(false);
    const cou = (e) => {
        e.preventDefault();
        setCheck2(false);
        setCheck(true);
    }
    const prac = (e) => {
        e.preventDefault();
        setCheck(false);
        setCheck2(true);
    }

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
            <h2 className='mt-5 mb-5'>First, let's find out what type of course you're making.</h2>
           <div className='d-flex justify-content-center create1'>
                <div onClick={cou} className={check? 'selected':''}>
                    <h5 className='fw-bold'>Course</h5>
                    <p>
                    Create rich learning experiences with the help of video lectures, quizzes, coding exercises, etc.
                    </p>
               </div>
                <div onClick={prac} className={check2? 'selected':''}>
                    <h5 className='fw-bold'>Practice</h5>
                    <p>
                    Help students prepare for certification exams by providing practice questions.
                    </p>
               </div>
            </div>
            <div className='mt-5 shadow-lg header-height'>
                {/*<Link to=""><button className='bg-dark text-white ps-4 pe-4 pt-2 pb-2 border border-0 fw-bold' type='hidden'>Previous</button></Link>*/}
                <Link to={`/course/create/2`}>
               
                    {
                        check ===false && check2===false ?<button className='float-end ps-4 pe-4 pt-2 pb-2 border border-0 fw-bold btn-disable' disabled>Continue</button> : <button className='float-end bg-dark text-white ps-4 pe-4 pt-2 pb-2 border border-0 fw-bold'>Continue</button>
                    }
                </Link>
            </div>
        </div>
    );
};

export default Create1;