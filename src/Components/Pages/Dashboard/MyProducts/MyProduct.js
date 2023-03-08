import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const MyProduct = () => {

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/products', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }

    });
    if (isLoading) {
        return (
            <div className="flex items-center justify-center space-x-2">
                <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-warning motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span
                    >
                </div>
            </div>
        );
    };
    const handleDelete = product => {
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    refetch();
                    toast.success('Product Deleted');
                }

            })
    }

    return (
        <div className='m-4 lg:m-12'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Sales Status</th>
                            <th>Delete</th>
                            <th>For Advertisement</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => <tr key={product._id}>
                                <td><div className="avatar">
                                    <div className="w-14 rounded-full">
                                        <img src={product.productImg} alt='' />
                                    </div>
                                </div></td>

                                <td>{i + 1}</td>
                                <td>{product.productName}</td>
                                <td>{product.productPrice}</td>
                                <td>Available</td>
                                <td><Link> <button onClick={() => handleDelete(product)} className='bg-yellow-500 p-2 rounded-md text-white'>Delete</button></Link></td>
                                <td><Link> <button className='bg-red-400 p-2 text-white' style={{ borderRadius: '355px 45px 225px 75px/15px 225px 15px 255px' }}>Add to Advertise</button></Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;