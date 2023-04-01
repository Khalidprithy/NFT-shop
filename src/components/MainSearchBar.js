import React from 'react';

const MainSearchBar = () => {
    return (
        <>
            <label htmlFor="voice-search" className="sr-only">Search</label>
            <div className="relative w-full">
                <input type="text" id="voice-search" className="bg-white border border-gray-300 text-gray-900 rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <div className="absolute inset-y-0 -left-10 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-7 h-7 text-gray-500 dark:text-gray-400 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                </button>
            </div>
        </>
    );
};

export default MainSearchBar;