import React from 'react';
import Banner from './Banner';
import HeroService from './HeroService';
import Info from './Info';
import MakeApoinment from './MakeApoinment';
import Services from './Services';

const Home = () => {
    return (
        <>
            <Banner/>
            <Info/>
            <Services/>
            <HeroService/>
            <MakeApoinment/>
        </>
    );
};

export default Home;