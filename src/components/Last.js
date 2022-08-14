import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

import img1 from '../images/frank-2x-v2.jpg';
// Import Swiper styles
import 'swiper/css';
const Last = () => {
    return (
        <>
            <div className='container mt-5'>
            <Swiper
               
               navigation={true}
               modules={[Navigation]}
               className="mySwiper ms-5"
           >
               <SwiperSlide className=''>
                   <div className='row g-4 d-flex justify-content-center align-items-center'>
                       <div className='col-sm-4 col-lg-5'>
                           <img src={img1} className='img-fluid' alt="" />
                       </div>
                       <div className='col-sm-4 col-lg-5 text'>
                           <p>
                           “I'm proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.”
                            </p>
                                <h5 className=''>Johe Dark,</h5>
                                <p>Data Scientist</p>

                       </div>
                       </div>
               </SwiperSlide>
               <SwiperSlide className=''>
                   <div className='row g-4 d-flex justify-content-center align-items-center'>
                       <div className='col-lg-5 col-sm-4 '>
                           <img src={img1} className='img-fluid' alt="" />
                       </div>
                       <div className='col-sm-4 col-lg-5 text'>
                           <p>
                           “I'm proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.”
                            </p>
                                <h5 className=''>Johe Dark,</h5>
                                <p>Data Scientist</p>

                       </div>
                       </div>
               </SwiperSlide>
               <SwiperSlide className=''>
                   <div className='row g-4 d-flex justify-content-center align-items-center'>
                       <div className='col-lg-5 col-sm-4'>
                           <img src={img1} className='img-fluid' alt="" />
                       </div>
                       <div className='col-sm-4 col-lg-5 text'>
                           <p>
                           “I'm proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.”
                            </p>
                                <h5 className=''>Johe Dark,</h5>
                                <p>Data Scientist</p>

                       </div>
                       </div>
               </SwiperSlide>

           </Swiper>
            </div>
            <div className='bg-light mt-5'>
                <div className='container p-5'>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore, officiis odit vitae sunt voluptates. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam nam itaque
                    </p>
                    <button className='bg-dark fw-bold text-white ps-5 pe-5 pt-1 pb-1 border border-0'>Get Started</button>
                </div>

            </div>
        </>
    );
};

export default Last;