import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetch('single.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPets(data);
            })
    }, [])
    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                pets.map(pet => <CategoryCard key={pet.id} pet={pet}></CategoryCard>)
            }
        </div>
    );
};

export default Category;