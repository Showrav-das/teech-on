import React,{ useEffect } from 'react';
import img2 from '../../images/img2.jpg';

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import AOS from 'aos';
import 'aos/dist/aos.css';
const MiddlePart = () => {

    useEffect(() => {
            AOS.init({
              duration : 1000
            });
          }, []);
    return (
        <div className='mt-5'>
            <h1 className='fw-bold'>So many reason to stat</h1>
            <div className='container'>
            <div className="row">
                <div data-aos="zoom-in" className="col-lg-4 col-sm-6">
                    <img src={img2} alt="" />
                    <h5 className='fw-bold'>Inspire learners</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aperiam architecto placeat. Magnam laborum iste sed reprehenderit soluta modi eaque maiores,
                    </p>
                </div>
                <div data-aos="zoom-out" className="col-lg-4 col-sm-6">
                    <img src={img2} alt="" />
                    <h5 className='fw-bold'>Inspire learners</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aperiam architecto placeat. Magnam laborum iste sed reprehenderit soluta modi eaque maiores,
                    </p>
                </div>
                <div data-aos="zoom-in" className="col-lg-4 col-sm-6">
                    <img src={img2} alt="" />
                    <h5 className='fw-bold'>Inspire learners</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aperiam architecto placeat. Magnam laborum iste sed reprehenderit soluta modi eaque maiores,
                    </p>
                </div>
            </div>
            </div>
            <div className='bg-dark mt-5 text-white'>
            <div className="row mt-5 p-4 gx-2 d-flex justify-content-between">
                <div className="col-lg-2 col-sm-4">
                    <CountUp end={39} suffix='M' redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <h1 className='fw-bold' ref={countUpRef}>
                                </h1>
                            </VisibilitySensor>

                        )}

                    </CountUp>
                    <p>Students</p>
                </div>
                <div className="col-lg-2 col-sm-4">
                    <CountUp end={54} suffix='+' redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <h1 className='fw-bold' ref={countUpRef}>
                                </h1>
                            </VisibilitySensor>

                        )}

                    </CountUp>
                    <p>Languages</p>
                </div>
                <div className="col-lg-2 col-sm-4">
                    <CountUp end={250} start={150} suffix='M' redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <h1 className='fw-bold' ref={countUpRef}>
                                </h1>
                            </VisibilitySensor>

                        )}

                    </CountUp>
                    <p>Enrollments</p>
                </div>
                <div className="col-lg-2 col-sm-4">
                    <CountUp end={49} suffix='M' redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <h1 className='fw-bold' ref={countUpRef}>
                                </h1>
                            </VisibilitySensor>

                        )}

                    </CountUp>
                    <p>Countries</p>
                </div>
                <div className="col-lg-2 col-sm-4"> 
                    <CountUp end={79} start={10} suffix='+' redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <h1 className='fw-bold' ref={countUpRef}>
                                </h1>
                            </VisibilitySensor>

                        )}

                    </CountUp>
                    <p>Customers</p>
                </div>
            </div>
           </div>
        </div>
    );
};

export default MiddlePart;