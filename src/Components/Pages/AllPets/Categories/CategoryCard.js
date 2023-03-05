import React from 'react';

const CategoryCard = ({ pet }) => {
    const { name, img } = pet;
    return (
        <div className='card-actions justify-center'>
            <div className="card h-56 w-80 card-side bg-sky-400 shadow-xl">
                <figure><img src={img} alt="pets" className='h-56' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;