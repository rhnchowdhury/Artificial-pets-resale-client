import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `https://artificial-pets-server.vercel.app/booking?email=${user?.email}`;

    const { data: booking = [] } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 className='text-2xl font-bold text-orange-600 text-center my-12'>My Orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Pets Name</th>
                            <th>Picture</th>
                            <th>Price</th>
                            <th>Pay Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map((books, i) => <tr key={books._id}>
                                <th>{i + 1}</th>
                                <td>{books.petsName}</td>
                                <td><img src={books.petsImg} className='w-12 h-12' alt='' /></td>
                                <td>{books.petsPrice}</td>
                                <td>
                                    {
                                        books.petsPrice && !books.paid && <Link to={`/dashboard/payment/${books._id}`}> <button className='btn btn-outline mt-2'>Payment</button></Link>
                                    }
                                    {
                                        books.petsPrice && books.paid && <span className='text-primary'>Paid</span>
                                    }
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;