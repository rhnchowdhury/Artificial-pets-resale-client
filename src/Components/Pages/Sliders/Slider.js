import React from 'react';
import img1 from '../../../assets/mac1.avif';
import img2 from '../../../assets/mac2.avif';
import img3 from '../../../assets/mac3.jpg';
import img4 from '../../../assets/mac4.jpg';

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={img1} alt='' className="w-full h-96" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={img2} alt='' className="w-full h-96" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={img3} alt='' className="w-full h-96" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={img4} alt='' className="w-full h-96" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Slider;