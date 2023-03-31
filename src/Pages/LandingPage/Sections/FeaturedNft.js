import React from 'react';
import FeaturedCard from '../../../components/Cards/FeaturedCard';

const FeaturedNft = () => {
    return (
        <div className='py-10 px-4 bg-gray-100'>
            <div className='max-w-screen-xl mx-auto'>
                <h4 className='text-3xl font-extrabold uppercase py-8'>Collection Featured NFTs</h4>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <FeaturedCard />
                    <FeaturedCard />
                    <FeaturedCard />
                </div>
            </div>
        </div>
    );
};

export default FeaturedNft;