import React from 'react';
import Category from '../AllPets/Categories/Category';
import MyProduct from '../Dashboard/MyProducts/MyProduct';
import Slider from '../Sliders/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Category></Category>
            <MyProduct></MyProduct>
        </div>
    );
};

export default Home;