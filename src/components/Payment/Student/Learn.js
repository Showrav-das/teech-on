import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import Overview from './Overview';

const Learn = () => {
    const [search, setSearch] = useState(false);
    const [overview, setOverview] = useState(false);
    const searchBtn = () => {
        setOverview(false);
        setSearch(true);
    }
    const overviewBtn = () => {
        setSearch(false);
        setOverview(true);
    }
    return (
        <div className='row mt-5'>
            <div className='col-lg-8'>

                <video width="100%" height="540" controls>
                    <source src="movie.mp4" type="video/mp4" />
                    {/*<source src="movie.ogg" type="video/ogg" />*/}
                    Your browser does not support the video tag.
                </video>
                <div className="d-flex justify-content-around video-btn">
                    <button onClick={searchBtn}><FontAwesomeIcon icon={faSearch} /> </button>
                    <button onClick={overviewBtn}>Overview</button>
                    <button>Q & A</button>
                    <button>Annoucement</button>
                    <button>Review</button>
                    <button>Learning Tools</button>
                </div>
                <hr />
                {
                    search && <div className='mt-5'>
                        <input type="text" className='p-2' maxLength={60} size={80} placeholder="search course content" /> <a href='' className='bg-dark text-light p-3'><FontAwesomeIcon icon={faSearch} className='' /></a>
                        <div className='text-center mt-4'>
                            <h5 className='fw-bold'>Start New Search</h5>
                            <p>To find captions, lectures or resources</p>
                        </div>
                    </div>
                }
                {
                    overview && <Overview/> 
                }
            </div>
            <div className='col-lg-4 text-start accordion'>
                <h5>Course Content</h5>
                <hr />
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h5 className='fw-bold'>Section 1: Introduction</h5></Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    <div class="">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label ps-2" for="flexCheckDefault">
                                            1. Introduction
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label ps-2" for="flexCheckDefault">
                                            2. Installation
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </Accordion.Body>

                    </Accordion.Item>

                </Accordion>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h5 className='fw-bold'>Section 2: HTML Basic</h5></Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    <div class="">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label ps-2" for="flexCheckDefault">
                                            3. First HTML page
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label ps-2" for="flexCheckDefault">
                                            4. Body
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label ps-2" for="flexCheckDefault">
                                            5. Adding video
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label ps-2" for="flexCheckDefault">
                                            6. Heading
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label ps-2" for="flexCheckDefault">
                                            7. Insert Image
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label ps-2" for="flexCheckDefault">
                                            8. Paragraph
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </Accordion.Body>

                    </Accordion.Item>

                </Accordion>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h5 className='fw-bold'>Section 3: Text formatting </h5></Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    <div class="">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label ps-2" for="flexCheckDefault">
                                            9. Text formatting introduction
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label ps-2" for="flexCheckDefault">
                                            10. Text size
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </Accordion.Body>

                    </Accordion.Item>

                </Accordion>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h5 className='fw-bold'>Section 4: Lists</h5></Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    <div class="">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label ps-2" for="flexCheckDefault">
                                            11. Ordered list
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label ps-2" for="flexCheckDefault">
                                            12. Unordered List
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </Accordion.Body>

                    </Accordion.Item>

                </Accordion>
            </div>
        </div>
    );
};

export default Learn;