import React from 'react';

const AddProduct = () => {
    return (
        <div className='mt-8'>
            <form className='grid grid-cols-1 gap-3 mx-24'>
                <input name='name' type="text" placeholder='Product Name' className="input input-bordered w-full " />
                <input name='price' type="text" placeholder='Product Price' className="input input-bordered w-full " />
                <select name='type' className="select select-bordered w-full">
                    <option disabled selected>Type</option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                </select>
                <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full " />
                <select name='address' className="select select-bordered w-full">
                    <option disabled selected>Address</option>
                    <option>Dhaka</option>
                    <option>Barishal</option>
                    <option>Chittagong</option>
                </select>
                <input name='details' type="text" placeholder='Details' className="input input-bordered w-full " />
                <input name='years' type="text" placeholder="Purchase years" className="input input-bordered w-full " />
                <br />
                <input className='btn w-full ' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddProduct;