import React from 'react';
import img from '../../../assets/blurbimg.png'

const Contact = () => {
    return (
        <section className='mt-10'>
            <h1 className='text-6xl font-bold text-center' style={{ color: "#675444" }}>Contact Us</h1>
            <div className="hero my-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="lg:ml-36">
                        <img src={img} alt="" className='w-full h-96' />
                    </div>
                    <div className="card w-full max-w-sm">
                        <div className="card-body px-8" style={{ background: '#FBF4DE', borderRadius: '155px 45px 225px 75px/15px 125px 15px 155px' }}>
                            <h1 className="text-3xl font-bold" style={{ color: "#675444" }}>Send us a message!</h1>
                            <div className='flex space-x-5'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold" style={{ color: "#675444" }}>Name</span>
                                    </label>
                                    <input type="text" className="input w-36" style={{ border: '2px solid #675444', borderRadius: '355px 45px 225px 75px/15px 225px 15px 255px' }} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold" style={{ color: "#675444" }}>Email Address</span>
                                    </label>
                                    <input type="text" className="input w-36" style={{ border: '2px solid #675444', borderRadius: '355px 45px 225px 75px/15px 225px 15px 255px' }} />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold" style={{ color: "#675444" }}>Subject</span>
                                </label>
                                <input type="text" className="input" style={{ border: '2px solid #675444', borderRadius: '355px 45px 225px 75px/15px 225px 15px 255px' }} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold" style={{ color: "#675444" }}>Message</span>
                                </label>
                                <input type="text" className="input h-28" style={{ border: '2px solid #675444', borderRadius: '355px 45px 225px 75px/15px 225px 15px 255px' }} />
                            </div>
                            <div className="form-control mt-6 ml-4">
                                <button className=" btn-error text-white font-bold p-3 uppercase w-40" style={{ border: '0px solid', borderRadius: '355px 45px 225px 75px/15px 225px 15px 255px' }}>Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;