import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/pets')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPets(data);
            })
    }, [])
    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 my-10' style={{ background: '#f5f5f5' }}>
            {
                pets.map(pet => <CategoryCard key={pet.cate_id} pet={pet}></CategoryCard>)
            }
        </div>
    );
};

export default Category;