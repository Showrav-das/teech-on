import React, { useState } from 'react';
import img from '../images/support-1-v3.jpg';
import SingleBlog from './SingleBlog';
const Blog = () => {
    const [blogs, setBlog] = useState([]);
    fetch('fakedata.JSON')
        .then(res => res.json())
        .then(data => setBlog(data));

    return (
        <div className='mt-5'>
            <div className='row bg-light mt-5 mb-5 d-flex align-items-center'>
                <div className='col-lg-6'>
                    <h1>Teaching online with Udemy</h1>
                    <p>Get the basics of creating a course and sharing your passion and knowledge with learners all over the globe.</p>
                </div>
                <div className='col-lg-6'>
                    <img src={img} alt="" />
                </div>
            </div>
            <h3>Articles</h3>
            
            <div class="row cols-row-1">
                {
                    blogs.map(blog=><SingleBlog blog={blog}></SingleBlog>)
                }
  
  
  
</div>


                {
            // products.map(product=> <Explore
            // product={product}
            // >
                 
            // </Explore>)
         }
            </div>
        //</div>
    );
};

export default Blog;