import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise)

const Payment = () => {
    const pay = useLoaderData();
    const { petsName, petsPrice } = pay;

    return (
        <div>
            <h1>Payment for {petsName}</h1>
            <p>Please pay {petsPrice} for your pets.</p>
            <div className='w-96 my-10 border-4 p-8'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm pay={pay} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;