import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signError, setSignError] = useState('');
    const navigate = useNavigate();

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
                        saveUser(data.name, data.email);

                    })
                    .catch(err => console.error(err));
            })
            .catch(err => {
                setSignError(err.message)
            });
    };

    // All user saved in database
    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                navigate('/');
            })
    };

    return (
        <div className='flex justify-center items-center my-20'>
            <div>
                <h1 className="text-4xl font-bold text-center text-orange-600">Sign Up!</h1>
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <div>
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type='text' {...register("name", {
                            required: "Name is required"
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                    </div>
                    <div>
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type='text' {...register("email", {
                            required: "Email is required",
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>
                    <div>
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type='password' {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password will be at least 6 characters" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong" }
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-active mt-4 w-full max-w-xs' value='Sign Up' type="submit" />
                    {signError && <p className='text-error'>{signError}</p>}
                    <p>Already have an account? <Link to='/login' className='text-accent font-bold'>Please Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;