import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const { data: categories, isLoading } = useQuery({
        queryKey: ['productCategory'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/petsName');
            const data = await res.json();
            return data;
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
    }

    const handleAddProducts = event => {
        console.log(event)
    };

    return (
        <div className='mt-8 '>
            <h1 className='text-center'>Add a Products</h1>
            <div className='card-actions justify-center'>
                <form onSubmit={handleSubmit(handleAddProducts)} className='space-y-2'>

                    <div>
                        <input type='text' placeholder='Product Name' {...register("name")}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <input type='text' placeholder='Product Price' {...register("price")}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <select className="select select-bordered w-full max-w-xs" {...register("category")}>
                            <option value>Category</option>
                            {
                                categories.map(cate => <option
                                    key={cate._id}
                                    value={cate.name}
                                >{cate.name}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <select className="select select-bordered w-full max-w-xs" {...register("type")}>
                            <option value>Type</option>
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>
                    </div>
                    <div>
                        <input type='text' placeholder='Phone Number' {...register("phone")}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <select className="select select-bordered w-full max-w-xs" {...register("address")}>
                            <option defaultValue>Address</option>
                            <option>Dhaka</option>
                            <option>Barishal</option>
                            <option>Chittagong</option>
                        </select>
                    </div>
                    <div>
                        <input type='text' placeholder='Purchase Year' {...register("year")}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <input type='text' placeholder='Product Description' {...register("title")}
                            className="textarea textarea-bordered h-24 w-full max-w-xs" />
                    </div>
                    <div>
                        <input type='file' placeholder='Purchase Year' {...register("image")}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <input className='btn btn-active mt-4 w-full max-w-xs' value='Sign Up' type="submit" />

                    {/* <p>Already have an account? <Link to='/login' className='text-accent font-bold'>Please Login</Link></p> */}
                </form>
            </div>
        </div>
    );
};

export default AddProduct;