import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModal from '../../Bookings/BookModal';
import AllCategoriesCard from './AllCategoriesCard';

const AllCategories = () => {
    let categories = useLoaderData();
    const [booked, setBooked] = useState(null);

    return (
        <div className='my-12'>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category => <AllCategoriesCard key={category._id} category={category} setBooked={setBooked}></AllCategoriesCard>)
                }
            </div>
            {
                booked &&
                <BookModal
                    booked={booked}
                    setBooked={setBooked}
                ></BookModal>
            }
        </div>
    );
};

export default AllCategories;