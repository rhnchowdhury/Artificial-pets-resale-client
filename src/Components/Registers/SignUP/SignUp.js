import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useToken from '../../../hooks/useToken';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signError, setSignError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [useButton, setUseButton] = useState(false);
    console.log(useButton)
    const navigate = useNavigate();
    const [token] = useToken(createdUserEmail);

    if (token) {
        navigate('/');
    }

    const handleSignIn = (data, e) => {
        console.log(data)
        e.target.reset();
        setSignError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {

                        saveUser(data.name, data.email, data.role);
                    })
                    .catch(err => console.error(err));
            })
            .catch(err => {
                setSignError(err.message)
            });
    };

    // All user saved in database
    const saveUser = (name, email, role) => {
        const user = { name, email, role };

        fetch('https://artificial-pets-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    };

    const handleButton = () => {
        setUseButton(useButton => !useButton)

    };

    const buttonToggle = useButton ?
        <>
            <label className="btn btn-error btn-sm text-white" style={{ borderRadius: '355px 45px 225px 75px/15px 225px 15px 255px' }}>Sell</label>
        </>
        :
        <>
            <label className="btn btn-error btn-sm text-white" style={{ borderRadius: '355px 45px 225px 75px/15px 225px 15px 255px' }}>Buy</label>
        </>;

    return (
        <div className='m-10 py-5' style={{ background: '#FBF4DE', borderRadius: '155px 45px 225px 75px/15px 125px 15px 155px' }}>
            <div className='card-actions justify-center mt-10'>
                <div>
                    <h1 className="text-2xl font-bold text-center" style={{ color: "#675444" }}>What do you want ?<br />Please Select ...</h1>
                    <div className='card-actions justify-center mt-5'>

                        <div className="form-control w-32 mt-7 mb-3">
                            <label className="cursor-pointer label">
                                <span className="label-text font-medium">{buttonToggle}</span>
                                <input onClick={handleButton} type="checkbox" className="toggle toggle-accent" {...register("role")} />
                            </label>
                        </div>


                        {/* <label onClick={handleButton} htmlFor="my-modal-3" className="btn btn-error btn-sm text-white" {...register("role")} style={{ borderRadius: '355px 45px 225px 75px/15px 225px 15px 255px' }}>Buy</label> */}
                    </div>
                </div>
            </div>
            <div className='card-actions justify-center my-5'>
                <div>
                    <form onSubmit={handleSubmit(handleSignIn)}>
                        <div>
                            <label className="label"><span className="label-text font-bold" style={{ color: "#675444" }}>Name</span></label>
                            <input type='text' {...register("name", {
                                required: "Name is required"
                            })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                        </div>
                        <div>
                            <label className="label"><span className="label-text font-bold" style={{ color: "#675444" }}>Email</span></label>
                            <input type='text' {...register("email", {
                                required: "Email is required",
                            })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                        </div>
                        <div>
                            <label className="label"><span className="label-text font-bold" style={{ color: "#675444" }}>Password</span></label>
                            <input type='password' {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password will be at least 6 characters" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong" }
                            })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                        </div>
                        <input className='btn  mt-4 w-full max-w-xs' style={{ background: "#675444" }} value='Sign Up' type="submit" />
                        {signError && <p className='text-error'>{signError}</p>}
                        <p className='' style={{ color: "#675444" }}>Already have an account? <Link to='/login' className='text-yellow-500 font-bold'>Please Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;