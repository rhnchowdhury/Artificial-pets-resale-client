import React from 'react';
import img1 from '../../../assets/dogs.webp';
import img2 from '../../../assets/dog-1.jpeg';


const Slider = () => {
    // #FBF4DE
    return (
        <div className='m-10'>
            <div className="carousel mt-5 lg:w-full rounded-xl my-4" style={{ background: '#FBF4DE', borderRadius: '155px 45px 225px 75px/15px 125px 15px 155px' }}>
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero">
                        <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
                            <img src={img1} alt='' className="max-w-sm h-80 lg:max-w-sm rounded-lg" />
                            <div className='mr-20'>
                                <h1 className=" text-4xl font-bold mb-4 mt-2">Are You Ready For<br />Perfect Pets?</h1>
                                <p className="text-xl font-medium">Get Flat 10% off an all Items Pets.</p>
                                <p className="text-xl font-medium">Use Codes All10</p>
                                <button className="btn btn-secondary mt-4" style={{ background: '#F9BE4F', border: '1px solid #F9BE4F' }}>Explore Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero">
                        <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
                            <img src={img2} alt='' className="max-w-sm h-80 lg:max-w-sm rounded-lg shadow-2xl" />
                            <div className='mr-28'>
                                <h1 className=" text-4xl font-bold mb-4 mt-2">Sell Your Old Pets<br />at the Best Price</h1>
                                <p className="text-xl font-medium">Free Pickup | Instant Cash</p>
                                <button className="btn btn-secondary mt-4" style={{ background: '#F9BE4F', border: '1px solid #F9BE4F' }}>Sell Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end w-full py-2 gap-2">
                <a href="#slide1" className="btn btn-xs">1</a>
                <a href="#slide2" className="btn btn-xs">2</a>
            </div>
        </div>
    );
};

export default Slider;