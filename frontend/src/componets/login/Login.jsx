import React, {useState} from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import styles from "../../styles/styles";
import {Link} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [visible, setVisible] = useState(false)

    return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px8  '>
            <div className="sm:mx-auto sm:w-full sm:max-w-md ">
                <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900 '>
                    Login to your account
                </h1>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className='space-y-6 '>
                        <div>
                            <label
                                htmlFor='email'
                                className='block text-sm font-medium text-gray-700'>
                                Email Address
                            </label>
                            <div className="mt-1">
                                <input type="text"
                                       name='email'
                                       autoComplete='email'
                                       required
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       className='appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shdow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm   '
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor='password'
                                className='block text-sm font-medium text-gray-700'>
                                Password
                            </label>
                            <div className="mt-1 relative">

                                <input type={visible ? 'text' : "password"}
                                       value={password}
                                       name='password'
                                       autoComplete='current-password'
                                       required
                                       onChange={(e) => setPassword(e.target.value)}
                                       className='appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shdow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm   '
                                />

                                {visible ? (
                                    <AiOutlineEye
                                        className='absolute right-2 top-2 cursor-pointer'
                                        size={25}
                                        onClick={() => setVisible(false)}
                                    />
                                ) : (
                                    <AiOutlineEyeInvisible
                                        className='absolute right-2 top-2 cursor-pointer'
                                        size={25}
                                        onClick={() => setVisible(true)}
                                    />)
                                }

                            </div>
                        </div>
                        <div className={`${styles.noramlFlex} justify-between`}>
                            <div className={`${styles.noramlFlex} `}>
                                <input type="checkbox" name="remember-me" id="remember-me"
                                       className='h-4 w-4 text-blue-600 focus:ring-indigo-500 border-gray-300 rounded'
                                />
                                <label htmlFor="remember-me"
                                       className='ml-2 block text-sm text-gray-900'>Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <a className='font-medium text-blue-600 hover:text-blue-500'
                                   href="/forgot-password">
                                    Forget Your password
                                </a>
                            </div>
                        </div>
                        <div>
                            <button type='submit'
                                    className='group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 uppercase'>
                                submit
                            </button>
                        </div>
                        <div className={`${styles.noramlFlex} w-full`}>
                            <h4>Not have any account </h4>
                            <Link to="/sing-up" className='text-blue-500 pl-2 hover:text-blue-800'>
                                Sing up
                            </Link>
                        </div>
                    </form>
        </div>
    );
};

export default Login;