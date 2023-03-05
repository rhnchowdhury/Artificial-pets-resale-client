import React from 'react';

const AllCategoriesCard = ({ category, setBooked }) => {
    const { use, seller, image, title, year, resale_price, original_price, location } = category;
    return (
        <div className='card-actions justify-center'>
            <div className="card w-80 glass">
                <figure><img src={image} alt="car!" className='h-60 w-80' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-red-400" >{title}</h2>
                    <p><strong>Seller's: </strong>{seller}</p>
                    <p><strong>Location: </strong>{location}</p>
                    <p><strong>Original Price: </strong>{original_price}</p>
                    <p><strong>Resale Price: </strong>{resale_price}</p>
                    <p><strong>Years of use: </strong>{use}</p>
                    <p><strong>Posted Date: </strong>{year}</p>
                    <div className="card-actions justify-end">
                        <label htmlFor="booking-modal" className="btn bg-red-400 hover:bg-yellow-500"
                            onClick={() => setBooked(category)}
                            style={{ borderRadius: '355px 45px 225px 75px/15px 225px 15px 255px', border: '0px solid rgb(248, 63, 124)' }}
                        >Book now!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCategoriesCard;