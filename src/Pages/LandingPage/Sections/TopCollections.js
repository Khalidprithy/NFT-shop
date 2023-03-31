import React from 'react';
import MainCard from '../../../components/Cards/MainCard';
import SubCard from '../../../components/Cards/SubCard';
import TopCollectionCard from '../../../components/Cards/TopCollectionCard';

const TopCollections = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between max-w-screen-xl mx-auto py-4 my-10'>
            <MainCard />
            <div className='flex flex-col justify-between gap-5 mx-auto py-4'>
                <SubCard />
                <SubCard />
                <SubCard />
            </div>
            <div className='py-4 lg:border-l-2 border-gray-100 px-6 mx-auto'>
                <h3 className='text-2xl font-bold uppercase'>Top Collections Over</h3>
                <h6 className='text-lg font-medium text-violet-600'>Last 7 days</h6>
                <div className='p-4'>
                    <TopCollectionCard />
                    <TopCollectionCard />
                    <TopCollectionCard />
                    <TopCollectionCard />
                    <TopCollectionCard />
                </div>
            </div>
        </div>
    );
};

export default TopCollections;