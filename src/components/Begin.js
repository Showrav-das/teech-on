import React, { useState } from 'react';
import img from '../images/plan-your-curriculum-v3.jpg';
import img2 from '../images/record-your-video-v3.jpg';
import img3 from '../images/launch-your-course-v3.jpg';

const Begin = () => {

    const a =
        <div className='d-flex fs-4 align-items-center justify-content-center'>
            <div className='container text row align-items-center'>
                <p className='col-sm-6'>
                    You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool.
                    The way that you teach — what you bring to it — is up to you.
                    <h5 className='fw-bold mt-3 mb-3'> How we help you</h5>
                    We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.
          </p>
                <div className='col-sm-6'>
                    <img src={img2} alt="" />
                </div>
            </div>
        </div>;;
    const [change, setChange] = useState(a);

    const paln = () => {
        const a =
            <div className='d-flex fs-4 align-items-center justify-content-center'>
                <div className='container text row align-items-center'>
                    <p className='col-sm-6'>
                        You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool.
                        The way that you teach — what you bring to it — is up to you.
                        <h5 className='fw-bold mt-3 mb-3'> How we help you</h5>
                        We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.
                    </p>
                    <div className='col-sm-6'>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>;
        setChange(a);
        console.log(change);
    }
    const recordVideo = () => {
        const b = <div className='d-flex fs-4 align-items-center justify-content-center'>
            <div className='container text row align-items-center'>
                <p className='col-sm-6'>
                    Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you're ready to start.
                    If you don't like being on camera, just capture your screen. Either way, we recommend two hours or more of video for a paid course.
                    <h5 className='fw-bold mt-3 mb-3'> How we help you</h5>
                    Our support team is available to help you throughout the process and provide feedback on test videos.
                </p>
                <div className='col-sm-6'>
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>;
        setChange(b);

    }
    const lanchCourse = () => {
        const b = <div className='d-flex fs-4 align-items-center justify-content-center'>
            <div className='container text row align-items-center'>
                <p className='col-sm-6'>
                    You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool.
                    The way that you teach — what you bring to it — is up to you.
                    <h5 className='fw-bold mt-3 mb-3'> How we help you</h5>
                    We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.
                </p>
                <div className='col-sm-6'>
                    <img src={img2} alt="" />
                </div>
            </div>
        </div>;
        setChange(b);

    }

    return (
        <div className='mt-5'>
            <h1>How To Begin</h1>
            <div className='mt-5'>
                <button onClick={paln} className='bg-white border border-0 btn-begin'>  <h4 className='fw-bold'>Plan Your Curriculum </h4></button>
                <button onClick={recordVideo} className='bg-white ms-4 border border-0 btn-begin'><h4 className='fw-bold'>Record Your Video</h4></button>
                <button className='bg-white ms-4 border border-0 btn-begin' onClick={lanchCourse}><h4 className='fw-bold' >Launch Your Course</h4></button>
            </div>
            <hr className='container w-75' />
            {change}

{/* according */}
            {/*<div>
            <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
            </div>*/}
        </div>
    );
};


export default Begin;