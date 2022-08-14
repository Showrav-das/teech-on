import React from 'react';
import { Link } from 'react-router-dom';

const singleBlog = ({blog}) => {
    return (
        <div className='row ms-4'>
            <div className='col-lg-6 '>
            <Link to=""><h3>{blog.title} </h3></Link>
            <p>
                {blog.details}
                </p>
                
            </div>
        </div>
    );
};

export default singleBlog;