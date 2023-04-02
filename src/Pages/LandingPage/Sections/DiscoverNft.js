import React, { useContext, useState } from 'react';
import Card from '../../../components/Cards/Card';
import FilterIcon from '../../../components/Icons/FilterIcon';
import { MyContext } from '../../../context/AppContext';

const DiscoverNft = () => {

    const { data } = useContext(MyContext);

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    const TabButton = ({ active, children, onClick }) => {
        const activeClasses = active
            ? 'bg-primary text-white font-medium'
            : 'bg-gray-200 text-black font-medium';

        return (
            <button
                className={`${activeClasses} "text-gray-900 border border-gray-200 hover:border-violet-400 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"`}
                onClick={onClick}
            >
                {children}
            </button>
        );
    };


    return (
        <div className=' bg-gray-100 p-6'>
            <div className='max-w-screen-xl mx-auto'>
                <h4 className='text-2xl font-extrabold uppercase py-6'>Discover more NFTs</h4>
                <div className="flex flex-col">
                    <div className='flex items-start justify-between'>
                        <div className="flex flex-wrap">
                            <TabButton
                                active={activeTab === 1}
                                onClick={() => handleTabClick(1)}
                            >
                                All Categories
                            </TabButton>
                            <TabButton
                                active={activeTab === 2}
                                onClick={() => handleTabClick(2)}
                            >
                                Art
                            </TabButton>
                            <TabButton
                                active={activeTab === 3}
                                onClick={() => handleTabClick(3)}
                            >
                                Celebrities
                            </TabButton>

                            <TabButton
                                active={activeTab === 4}
                                onClick={() => handleTabClick(4)}
                            >
                                Gaming
                            </TabButton>

                            <TabButton
                                active={activeTab === 5}
                                onClick={() => handleTabClick(5)}
                            >
                                Sport
                            </TabButton>

                            <TabButton
                                active={activeTab === 6}
                                onClick={() => handleTabClick(6)}
                            >
                                Music
                            </TabButton>

                            <TabButton
                                active={activeTab === 7}
                                onClick={() => handleTabClick(7)}
                            >
                                Crypto
                            </TabButton>
                        </div>
                        <button className='flex gap-1 btn bg-gray-200 text-black border-none rounded-full hover:bg-primary hover:text-white normal-case transition-all ease-in-out duration-300'>
                            <FilterIcon color={'D7DBDD'} />
                            All Filters</button>
                    </div>
                    <div className="mt-8">
                        {activeTab === 1 && (
                            <div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                                    {
                                        data?.map(nft => <Card
                                            key={nft?._id}
                                            nft={nft}
                                        />)
                                    }
                                </div>
                                <div className='flex justify-center'>
                                    <button className='btn btn-outline btn-primary rounded-full mt-5 px-5 normal-case'>More NFTs</button>
                                </div>
                            </div>
                        )}
                        {activeTab === 2 && (
                            <div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                                    {
                                        data?.slice(0, 4).map(nft => <Card
                                            key={nft?._id}
                                            nft={nft}
                                        />)
                                    }
                                </div>
                                <div className='flex justify-center'>
                                    <button className='btn btn-outline btn-primary rounded-full mt-5 px-5 normal-case'>More NFTs</button>
                                </div>
                            </div>
                        )}
                        {activeTab === 3 && (
                            <div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                                    {
                                        data?.slice(0, 5).map(nft => <Card
                                            key={nft?._id}
                                            nft={nft}
                                        />)
                                    }
                                </div>
                                <div className='flex justify-center'>
                                    <button className='btn btn-outline btn-primary rounded-full mt-5 px-5 normal-case'>More NFTs</button>
                                </div>
                            </div>
                        )}
                        {activeTab === 4 && (
                            <div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                                    {
                                        data?.map(nft => <Card
                                            key={nft?._id}
                                            nft={nft}
                                        />)
                                    }
                                </div>
                                <div className='flex justify-center'>
                                    <button className='btn btn-outline btn-primary rounded-full mt-5 px-5 normal-case'>More NFTs</button>
                                </div>
                            </div>
                        )}
                        {activeTab === 5 && (
                            <div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                                    {
                                        data?.map(nft => <Card
                                            key={nft?._id}
                                            nft={nft}
                                        />)
                                    }
                                </div>
                                <div className='flex justify-center'>
                                    <button className='btn btn-outline btn-primary rounded-full mt-5 px-5 normal-case'>More NFTs</button>
                                </div>
                            </div>
                        )}
                        {activeTab === 6 && (
                            <div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                                    {
                                        data?.map(nft => <Card
                                            key={nft?._id}
                                            nft={nft}
                                        />)
                                    }
                                </div>
                                <div className='flex justify-center'>
                                    <button className='btn btn-outline btn-primary rounded-full mt-5 px-5 normal-case'>More NFTs</button>
                                </div>
                            </div>
                        )}
                        {activeTab === 7 && (
                            <div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                                    {
                                        data?.map(nft => <Card
                                            key={nft?._id}
                                            nft={nft}
                                        />)
                                    }
                                </div>
                                <div className='flex justify-center'>
                                    <button className='btn btn-outline btn-primary rounded-full mt-5 px-5 normal-case'>More NFTs</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscoverNft;