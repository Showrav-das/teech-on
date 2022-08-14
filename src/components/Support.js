import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/support-1-v3.jpg';


const Support = () => {
    
    return (
        <>
            <div className='d-flex row align-items-center justify-content-between'>
                
                <img className='col-sm-4' src={img} alt="" />
                
                <div className='col-sm-4'>
                    <h3 className='fw-bold'>Lorem ipsum dolor sit amet consectetur.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur unde ad dolores beatae dolorem ipsam eveniet exercitationem impedit expedita sequi. Molestias illum sit cumque at nobis beatae reprehenderit quas velit iure labore, placeat exercitationem consequatur minus cupiditate odit accusamus ullam.</p>
                    
                    <div>
                        <Link to="/blog">Need more details before you start?</Link>
                    </div>
                    </div>
            <img className='text-left col-sm-4' src={img} alt="" />
            </div>


            {/* practice part */}

            






       {/*     <div class="container-a">
  <div class="text-a">
  Text block
  </div>
  <div class="bg">
  </div>
</div>*/}
            </>
        //<div className='aa'>
        //        <h2>fkkfo</h2>
        //</div>
    );
};

export default Support;