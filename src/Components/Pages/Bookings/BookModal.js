import React from 'react';

const BookModal = () => {
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className='grid grid-cols-1 gap-3'>
                        <input name='name' type="text" className="input input-bordered w-full" />
                        <input name='email' type="text" className="input input-bordered w-full" />
                        <input name='title' type="text" className="input input-bordered w-full" />
                        <input name='price' type="text" className="input input-bordered w-full" />
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