import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ pet }) => {
    const { name, img } = pet;
    return (
        <div className='card-actions justify-center'>
            <div className="card h-56 w-80 card-side shadow-xl" style={{ background: '#f5f5f5' }}>
                <figure><img src={img} alt="pets" className='h-56' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-start">
                        <button className="btn bg-red-500" style={{ borderRadius: '355px 45px 225px 75px/15px 225px 15px 255px', border: '0px solid rgb(248, 63, 124)' }}><Link to={`/category/${pet.cate_id}`}>See More</Link></button>
                    </div>
                </div>
            </div>
            {/* #675444 */}
        </div>
    );
};

export default CategoryCard;