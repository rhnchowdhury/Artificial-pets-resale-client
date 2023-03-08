import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { login, googleSignIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const [token] = useToken(loginUserEmail);

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = (data, e) => {
        console.log(data)
        e.target.reset();
        setLoginError('');
        login(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user)
                setLoginUserEmail(data.email);
            })
            .catch(err => {
                setLoginError(err.message);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.log(err));
    };

    return (
        <section className='m-5 lg:m-10 p-5 lg:py-2' style={{ background: '#FBF4DE', borderRadius: '155px 45px 225px 75px/15px 125px 15px 155px' }}>
            <div className='flex justify-center items-center my-10'>
                <div>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div>
                            <label className="label"><span className="label-text font-bold" style={{ color: "#675444" }}>Name</span></label>
                            <input type='text' {...register("name",
                                {
                                    required: "Name is required"
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                        </div>
                        <div>
                            <label className="label"><span className="label-text font-bold" style={{ color: "#675444" }}>Email</span></label>
                            <input type='text' {...register("email",
                                {
                                    required: "Email address is required"
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                        </div>
                        <div>
                            <label className="label"><span className="label-text font-bold" style={{ color: "#675444" }}>Password</span></label>
                            <input type='password' {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong" }
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                            <label className="label"><span className="label-text" style={{ color: "#675444" }}>Forget password?</span></label>
                        </div>
                        <input className='btn w-full max-w-xs' style={{ background: "#675444" }} value='Login' type="submit" />
                        {loginError && <p className='text-error'>{loginError}</p>}
                        <p style={{ color: "#675444" }}>New to Artificial Pets? <Link to='/signup' className='text-error font-bold'>Create an account</Link></p>
                    </form>
                    <div className="divider">OR</div>
                    <div className='card-actions justify-center'>
                        <button onClick={handleGoogleSignIn} className='btn btn-outline w-full max-w-xs text-error'>CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;