import React from 'react';
import './banner.css';
import img from '../images/billboard-desktop-v4.jpg';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div>
            <div className="">
              
                <div className="img-tag row bg-img d-flex align-items-center justify-items-center">  
                    {/*<img src={img} alt="" />*/}
                    <div className='ms-5 text col-lg-5'>
                    <h1 className='fw-bold'>Come With Us</h1>
                        <p>
                        Become an instructor and change lives — including your own.
                        </p>  
                       <Link to={`/course/create/1`}> <button className='bg-dark fw-bold text-white ps-5 pe-5 pt-1 pb-1 border border-0'>Get Started</button></Link>
                    </div>     
                </div>
                

               </div>
        </div>
    );
};

export default Banner;