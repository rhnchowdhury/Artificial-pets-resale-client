import React from 'react';

const AllCategoriesCard = ({ category }) => {
    const { seller, image, title, year, resale_price, original_price, location } = category;
    return (
        <div className='card-actions justify-center'>
            <div className="card w-80 glass">
                <figure><img src={image} alt="car!" className='h-60 w-80' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {/* <p>How to park your car at your garage?</p> */}
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCategoriesCard;