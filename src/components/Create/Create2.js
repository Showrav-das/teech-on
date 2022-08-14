import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Create2 = () => {
    const [name, setName] = useState('');
    const [change, setChange] = useState(60);
    const [aa, setA] = useState(change);

    const courseChange = (e) => {
        const a = e.target.value;
        setName(a);
        console.log(a.length);
        if (a) {
            if (a.length) {
                setChange(change - a.length);
                
                //console.log('fsf');
            }
            else {
                //setChange(change + a.length);
                //console.log('fsf2');
            }
        }
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
            <h2 className='mt-5 mb-5'>How about a working title?.</h2>
            <p>It's ok if you can't think of a good title now. You can change it later.</p>
            <div className='mt-5'>
                <div className=''>
                <input type="text" onChange={courseChange} className='p-2' maxLength={60} size={80} placeholder="e.g: Learn photoshop cs6 from Scratch" />
                <span class="" id="basic-addon1">{change} </span>
               </div>
            </div>
            <div className='d-flex justify-content-between mt-5 shadow-lg header-height'>
                <Link to=""><button className='bg-white text-dark ps-4 pe-4 pt-2 pb-2 border border-dark fw-bold'>Previous</button></Link>

                {
                    name.length > 0 ? <Link to={`/course/create/3`}><button className='bg-dark text-white ps-4 pe-4 pt-2 pb-2 border border-0 fw-bold'>Continue</button></Link> :
                    <Link to=""><button disabled className='ps-4 pe-4 pt-2 pb-2 border border-0 fw-bold btn-disable'>Continue</button></Link>
                }
            </div>
        </div>
    );
};

export default Create2;