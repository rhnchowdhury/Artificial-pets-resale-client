import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCategoriesCard from './AllCategoriesCard';

const AllCategories = () => {
    let categories = useLoaderData();
    console.log(categories)
    return (
        <div>
            <h1>test</h1>
            {/* <div >
                {
                    categories.map(category => <AllCategoriesCard key={category.id} category={category}></AllCategoriesCard>)
                }
            </div> */}
        </div>
    );
};

export default AllCategories;