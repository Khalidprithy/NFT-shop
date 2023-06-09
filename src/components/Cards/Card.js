import React from 'react';
import card01 from '../../assets/Card01.png'
import AvatarGroup from '../AvatarGroup';
import NFTIcon from '../NFTIcon';
import Timer from '../Timer';
import TimerUpdated from '../TimerUpdated';


const Card = ({ nft }) => {

    return (
        <div className='p-3 rounded-2xl shadow bg-white mx-auto hover:shadow-lg transition-all ease-in-out duration-300'>
            <div className='relative z-10'>
                <img className='w-[300px] h-[300px]' src={card01} alt="" />
                <div className='absolute -bottom-9 left-3'>
                    <AvatarGroup />
                </div>
            </div>
            <h4 className='text-xl font-semibold p-1 mt-5'>{nft?.title}</h4>
            <div className='flex justify-between border-b border-gray-300 pb-4'>
                <div className='flex items-center gap-2'>
                    <NFTIcon color={'28B463'} />
                    <span className='text-green-500'> {nft?.nftPoints} ETH</span>
                </div>
                <h3 className='text-gray-500'>1 of {nft?.bidPercentage}</h3>
            </div>

            <div className='flex justify-between pt-4'>
                <div className='bg-gray-200 px-2 py-1 rounded-full'>
                    <TimerUpdated endDate={nft?.timer} />
                    {/* <Timer hours={1} minutes={30} seconds={0} color={'black'} /> */}
                </div>
                <h4 className='text-lg text-primary font-medium cursor-pointer'>Place a bid</h4>
            </div>
        </div>
    );
};

export default Card;