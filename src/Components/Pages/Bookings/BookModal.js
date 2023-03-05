import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookModal = ({ booked, setBooked }) => {
    const { title, original_price } = booked;
    console.log(booked)
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const title = form.title.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const address = form.address.value;

        const booking = {
            userName: name,
            userEmail: email,
            petsName: title,
            petsPrice: price,
            phoneNumber: phone,
            Address: address
        };

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setBooked(null);
                    toast.success('Item is booked')
                }
            })

    };

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        <input name='name' type="text" disabled value={user?.displayName} className="input input-bordered w-full" />
                        <input name='email' type="text" disabled value={user?.email} className="input input-bordered w-full" />
                        <input name='title' type="text" disabled value={title} className="input input-bordered w-full" />
                        <input name='price' type="text" disabled value={original_price} className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='address' type="text" placeholder="Address" className="input input-bordered w-full" />
                        <br />
                        <input className='btn w-full' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookModal;