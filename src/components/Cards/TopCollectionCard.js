import React from 'react';
import image02 from '../../assets/avatar01.png'

const TopCollectionCard = ({ item, index }) => {
    return (
        <div className={`flex items-center justify-between gap-6 p-3 ${index === 4 ? 'border-b-0' : 'border-b border-gray-300'}`}>
            <div className='flex items-center gap-4'>
                <h4 className='text-2xl font-bold'>{index + 1}</h4>
                <img src={image02} alt="" />
                <div className='flex flex-col gap-2'>
                    <h5 className='font-semibold'>{item?.title}</h5>
                    <span className='flex items-center text-sm gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 9 14" fill="none">
                            <g clipPath="url(#clip0_328_333)">
                                <path d="M8.3154 7.13126L4.26572 9.66876L0.213379 7.13126L4.26572 0L8.3154 7.13126ZM4.26572 10.4836L0.213379 7.9461L4.26572 14L8.31806 7.9461L4.26572 10.4836Z" fill="#000000" />
                            </g>
                            <defs>
                                <clipPath id="clip0_328_333">
                                    <rect width="8.53125" height="14" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        {item.nft_points}
                    </span>
                </div>
            </div>
            <h4 className={`text-xl font-semibold ${item.sell_direction === 'up' ? 'text-green-500' : 'text-red-500'}`}>+{item.sales_percentage}%</h4>
        </div>
    );
};

export default TopCollectionCard;