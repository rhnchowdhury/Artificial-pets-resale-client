import React from 'react';

const MyOrders = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold text-orange-600 text-center my-12'>My Orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Phone Name</th>
                            <th>Picture</th>
                            <th>Price</th>
                            <th>Pay Option</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;