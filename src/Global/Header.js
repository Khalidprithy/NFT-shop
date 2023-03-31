import React from 'react';
import { Link } from 'react-router-dom';
import MainSearchBar from '../components/MainSearchBar';

const Header = () => {
    return (
        <header className='pt-6 pb-2 lg:pb-6 border-b border-gray-200'>
            <div className="navbar bg-white max-w-screen-xl mx-auto ">
                <div className="navbar-start justify-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/marketplace'>Marketplace</Link></li>
                            <li><Link to='/resource'>Resource</Link></li>
                            <li><Link to='/about'>About</Link></li>
                        </ul>

                    </div>
                    <Link to='/' className="uppercase text-2xl font-bold text-blue-700 border-r border-gray-200 px-8">NFters</Link>
                    <div className="navbar-start hidden md:flex flex-col">
                        <ul className="menu menu-horizontal px-1 font-semibold">
                            <li><Link to='/marketplace'>Marketplace</Link></li>
                            <li><Link to='/resource'>Resource</Link></li>
                            <li><Link to='/about'>About</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end gap-2">
                    <div className="form-control hidden lg:flex">
                        <form class="flex items-center">
                            <MainSearchBar />
                        </form>
                    </div>
                    <button className="btn btn-primary text-white rounded-full px-6">Upload</button>
                    <button className="btn btn-outline btn-primary hover:text-white rounded-full">Connect Wallet</button>
                </div>
            </div>
            <form class="flex lg:hidden items-center max-w-screen-md mx-auto px-8">
                <MainSearchBar />
            </form>
        </header>
    );
};

export default Header;