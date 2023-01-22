import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../context/AuthProvider';
import facebook from '../../../assets/images/icons/fb.png'
import google from '../../../assets/images/icons/google.png'
import login from '../../../assets/images/icons/login-.png'
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
const Login = () => {
    const { signInEmailPassword, SignIn } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    const [error, setError] = useState({
        loginError: "",
        googleError: "",
        facebookError: "",
    });
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const onSubmit = (data) => {
        signInEmailPassword(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset()
                toast.success("Successfully login", {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
            })
            .catch(err => {
                console.log(err.message);
                setError({ ...error, loginError: err })
            })

        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 4000)
        })
        return promise;
    }

    const handleGoogleSignIn = () => {
        console.log("dbajsbhj");
        SignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("Login With Google success")
            })
            .catch(err => {
                setError({ ...error, googleError: err })
            })
    }

    const handleFacebookSignIn = () => {
        SignIn(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("Login With Facebook success")
            })
            .catch(err => {
                setError({ ...error, facebookError: err })
            })
    }
    return (
        <div className='bg-black h-screen flex flex-col justify-center'>

            <div className='border-2 hover:border-orange-600 w-full lg:w-1/4 mx-auto p-2 shadow-2xl rounded-lg bg-white'>
                <div className='flex items-center justify-center space-x-2 my-5'>
                    <h1 className='text-3xl font-bold'>Login</h1>
                    <img src={login} className="w-10" alt="" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    <div className='form-control w-full max-w-xs space-y-1 mx-auto'>
                        <label className="label-text font-semibold">Email</label>
                        <input type="email" {...register("email", { required: "Email name is required" })}
                            aria-invalid={errors.email ? "true" : "false"}
                            placeholder="email" className="input input-sm w-full" />
                        {errors.email && <small role="alert" className='text-red-500'>{errors.email?.message}</small>}
                    </div>
                    <div className='form-control w-full max-w-xs space-y-1 mx-auto'>
                        <label className="label-text font-semibold">Password</label>
                        <input type="password" {...register("password", {
                            required: "This is required", minLength: {
                                value: 6,
                                message: "Your password should be at least 6 characters"
                            }
                        })}
                            placeholder="password" className="input input-sm w-full" />
                        {errors.password && <small role="alert" className='text-red-500'>{errors.password?.message}</small>}
                    </div>
                    <div className='w-full max-w-xs mx-auto pt-5'>
                        <button disabled={isSubmitting} type='submit' className="btn btn-md bg-orange-500 grayscale-2 border-0 w-full">Button</button>
                    </div>
                    {error.loginError && <small role="alert" className='text-red-500 font-semibold'>user not found</small>}
                </form>
                <div className='w-full max-w-xs mx-auto text-center my-2 font-bold'>
                    <span className='text-center'>Don't have any account? <span className='text-orange-700 hover:text-blue-500'><Link to="/signUp">Sign up</Link></span></span>
                    <div className="divider">OR</div>
                    <div className='w-full max-w-xs mb-2'>
                        <button onClick={handleFacebookSignIn} className='flex items-center btn btn-outline w-full'><img src={facebook} className="w-10" alt="" srcset="" /><span className='ml-2'>Continue With facebook</span></button>
                        {error.facebookError && <small role="alert" className='text-red-500 font-semibold'>account exist with different credential</small>}
                    </div>
                    <div className='w-full max-w-xs'>
                        <button onClick={handleGoogleSignIn} className='flex items-center btn btn-outline w-full'><img src={google} className="w-10" alt="" srcset="" /><span className='ml-5'>Continue with google</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;