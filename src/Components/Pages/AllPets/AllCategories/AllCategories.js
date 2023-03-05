import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCategoriesCard from './AllCategoriesCard';

const AllCategories = () => {
    let categories = useLoaderData();
    console.log(categories)
    return (
        <div>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category => <AllCategoriesCard key={category.id} category={category}></AllCategoriesCard>)
                }
            </div>
        </div>
    );
};

export default AllCategories;