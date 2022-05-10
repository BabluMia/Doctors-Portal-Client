import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import Contact from './Contact';
import HeroService from './HeroService';
import Info from './Info';
import MakeApoinment from './MakeApoinment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <>
            <Banner/>
            <Info/>
            <Services/>
            <HeroService/>
            <MakeApoinment/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;