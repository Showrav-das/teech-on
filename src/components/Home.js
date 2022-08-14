import React from 'react';
import Banner from './Banner';
import Begin from './Begin';
import Last from './Last';
import MiddlePart from './MiddlePart/MiddlePart';
import Support from './Support';

const Home = () => {
    return (
        <>
            <Banner />
            <Begin />
            <MiddlePart/>
            <Support />
            <Last/>
         
        </>
    );
};

export default Home;