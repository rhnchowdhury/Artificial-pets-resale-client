import React from 'react';

const AllCategoriesCard = ({ category }) => {
    const { seller, image, title, year, resale_price, original_price, location } = category;
    // console.log(cate);
    return (
        <div>
            {/* <div className="card w-96 glass">
                <figure><img src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div> */}
            <h1>tmi</h1>
        </div>
    );
};

export default AllCategoriesCard;