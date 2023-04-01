import React from 'react';
import FacebookIcon from '../components/Icons/FacebookIcon';
import LinkedInIcon from '../components/Icons/LinkedInIcon';
import TwitterIcon from '../components/Icons/TwitterIcon';

const Footer = () => {
    return (
        <footer className='max-w-screen-xl mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-10'>
                <div>
                    <h4 className='text-2xl uppercase font-bold'>NFTERS</h4>
                    <p className='py-5'>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
                    <div className='flex gap-2 pt-2'>
                        <FacebookIcon />
                        <TwitterIcon />
                        <LinkedInIcon />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6">
                    <div>
                        <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">Market Place</h2>
                        <ul className="text-gray-600 dark:text-gray-400 font-medium">
                            <li className='mb-2'>
                                <a href="https://devkbin.netlify.app/" className="hover:underline">All NFTs</a>
                            </li>
                            <li className='mb-2'>
                                <a href="https://devkbin.netlify.app/" className="hover:underline">New</a>
                            </li>
                            <li className='mb-2'>
                                <a href="https://devkbin.netlify.app/" className="hover:underline">Art</a>
                            </li>
                            <li className='mb-2'>
                                <a href="https://devkbin.netlify.app/" className="hover:underline">Sports</a>
                            </li>
                            <li className='mb-2'>
                                <a href="https://devkbin.netlify.app/" className="hover:underline">Utility</a>
                            </li>
                            <li className='mb-2'>
                                <a href="https://devkbin.netlify.app/" className="hover:underline">Music</a>
                            </li>
                            <li className='mb-2'>
                                <a href="https://devkbin.netlify.app/" className="hover:underline">Domain Name</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">My Account</h2>
                        <ul className="text-gray-600 dark:text-gray-400 font-medium">
                            <li className='mb-2'>
                                <a href="https://devkbin.netlify.app/" className="hover:underline ">Profile</a>
                            </li>
                            <li className='mb-2'>
                                <a href="https://devkbin.netlify.app/" className="hover:underline">Favorite</a>
                            </li>
                            <li className='mb-2'>
                                <a href="https://devkbin.netlify.app/" className="hover:underline">My Collections</a>
                            </li>
                            <li className='mb-2'>
                                <a href="https://devkbin.netlify.app/" className="hover:underline">Settings</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4 className='text-lg font-semibold mb-5'>Stay In The Loop</h4>
                    <p className='mb-4'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>

                    <form>
                        <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <input type="search" id="search" className="block w-full p-4 pl-6 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email address.." required />
                            <button type="submit" className="text-white absolute right-[5px] bottom-[5px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe Now</button>
                        </div>
                    </form>
                </div>
            </div>
            <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
            <span className="block text-sm mb-5 text-gray-500 sm:text-center dark:text-gray-400">Copyright © 2023 <a href="https://devkbin.netlify.app/" className="hover:underline">Dev.Kbin™</a></span>
        </footer>
    );
};

export default Footer;