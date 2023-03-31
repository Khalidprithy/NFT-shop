import React from 'react';
import card01 from '../../assets/Card01.png'
import AvatarGroup from './AvatarGroup';
import NftIcon from './NftIcon';
import Timer from './Timer';

const Card = () => {
    return (
        <div className='p-3 rounded-2xl shadow bg-white'>
            <div className='relative z-10'>
                <img className='w-[300px] h-[300px]' src={card01} alt="" />
                <div className='absolute -bottom-5 left-2'>
                    <AvatarGroup />
                </div>
            </div>
            <h4 className='text-xl font-semibold p-1 mt-5'>This NFT</h4>
            <div className='flex justify-between border-b border-gray-300 pb-4'>
                <div className='flex items-center gap-2'>
                    <NftIcon color={'28B463'} />
                    <span className='text-green-500'> 0.25 ETH</span>
                </div>
                <h3 className='text-gray-500'>1 of 321</h3>
            </div>

            <div className='flex justify-between pt-4'>
                <div className='bg-gray-200 px-2 py-1 rounded-full'>
                    <Timer hours={1} minutes={30} seconds={0} color={'black'} />
                </div>
                <h4 className='text-lg text-violet-600 font-medium'>Place a bid</h4>
            </div>
        </div>
    );
};

export default Card;