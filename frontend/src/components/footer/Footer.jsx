import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../header/sub-components/Logo';

const Footer = () => {
    return (

        <footer className="bg-white dark:bg-gray-800 pt-4 pb-8 xl:pt-8">
            <div className="container max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
                <div className="text-lg font-light pb-8 flex flex-wrap justify-center">
                    <div className="w-1/2 md:w-1/3 lg:w-1/5 flex items-stretch">
                        <div className="self-center">
                            <Logo />
                            <p className="text-base">© 2021 Kazi Shop<br />
                            All Rights Reserved</p>
                        </div>
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-1/5">
                        <div className="">
                            <h2 className="text-gray-500 dark:text-gray-200 text-base font-semibold uppercase mb-4">
                                ABOUT US
                            </h2>
                            <div>
                                <Link to=""  className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 block font-semibold text-base">
                                    
                                        About us
 
                                </Link>
                                <Link to="" className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 block font-semibold text-base">
                                    
                                        Store location
 
                                </Link>
                                <Link to="" className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 block font-semibold text-base">
                                    
                                        Contact
 
                                </Link>
                                <Link to="" className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 block font-semibold text-base">
                                    
                                        Orders tracking
 
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 md:w-1/3 lg:w-1/5">
                        <div className="">
                            <h2 className="text-gray-500 dark:text-gray-200 text-base font-semibold uppercase mb-4">
                                USEFUL LINKS

                            </h2>
                            <div>
                                <Link to="" className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 block font-semibold text-base">
                                    
                                        Returns
 
                                </Link>
                                <Link to="" className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 block font-semibold text-base">
                                    
                                        Support Policy
 
                                </Link>
                                <Link to="" className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 block font-semibold text-base">
                                    
                                        Size guide
 
                                </Link>
                                <Link to="" className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 block font-semibold text-base">
                                    
                                        FAQs
 
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-1/5">
                        <div className="mx-auto">
                            <h2 className="text-gray-500 dark:text-gray-200 text-base font-semibold uppercase mb-4">
                                FOLLOW US
                            </h2>
                            <div>
                                <Link to="" className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 block font-semibold text-base">
                                    
                                        Facebook
 
                                </Link>
                                <Link to="" className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 block font-semibold text-base">
                                    
                                        Twitter
 
                                </Link>
                                <Link to="" className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 block font-semibold text-base">
                                    
                                        Instagram
 
                                </Link>
                                <Link to="" className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 block font-semibold text-base">
                                    
                                        Youtube
 
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-1/5">
                        <h2 className="mb-4 text-gray-500 dark:text-gray-200 text-base font-semibold uppercase">
                            SUBSCRIBE
                        </h2>
                        <p className="text-gray-500 text-base mb-4">Get E-mail updates about our latest shop and special offers.</p>
                        <form>
                            <div className="relative">
                                <input type="text" className="rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="Email" />
                            </div>
                            <button className="mt-5 flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-indigo-600 rounded shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200" type="submit">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;
