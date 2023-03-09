import React from 'react';
import Category from '../AllPets/Categories/Category';
import Contact from '../Contacts/Contact';
import Slider from '../Sliders/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Category></Category>
            <Contact></Contact>
        </div>
    );
};

export default Home;