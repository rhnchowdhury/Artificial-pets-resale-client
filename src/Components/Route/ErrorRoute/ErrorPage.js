import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='card-actions justify-center my-12 lg:my-32' >
            <div className='py-8 px-5 lg:px-32' style={{ background: '#FBF4DE', borderRadius: '155px 45px 225px 75px/15px 125px 15px 155px' }}>
                <h1 className='text-7xl font-bold text-center' style={{ color: "#675444" }}>404</h1>
                <p className='text-3xl mt-5' style={{ color: "#675444" }}>Page Not Found</p>
                <div className='card-actions justify-center mt-5'>
                    <Link to='/'><button className='btn bg-red-400 hover:bg-amber-500' style={{ borderRadius: '355px 45px 225px 75px/15px 225px 15px 255px', border: '0px solid' }}>Go Back To Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;