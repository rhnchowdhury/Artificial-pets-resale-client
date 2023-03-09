import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({ pay }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [process, setProcess] = useState(false);
    const [transactionID, setTransactionID] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const { userName, userEmail, petsPrice } = pay;


    useEffect(() => {
        fetch("https://artificial-pets-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ petsPrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [petsPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            console.log(error)
            setCardError(error.message);
        }
        else {
            setCardError('')
        }
        setSuccess('');
        setProcess(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmPaymentIntent(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: userEmail
                    }
                },
                // return_url: 'https://artificial-pets-server.vercel.app/create-payment-intent'
            }
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent == 'succeeded') {
            setSuccess('Congrats! Your payment completed');
            setTransactionID(paymentIntent.id);
        }
        console.log(paymentIntent);
        setProcess(false);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary mt-4 btn-sm' type="submit" disabled={!stripe || !clientSecret || process}>
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div>
                    <p className='text-green-400'>{success}</p>
                    <p>Your TransactionId: <span>{transactionID}</span></p>
                </div>
            }
        </>
    );
};

export default CheckOutForm;