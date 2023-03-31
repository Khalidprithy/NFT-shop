import React from 'react';
import image02 from '../../assets/avatar01.png'

const TopCollectionCard = () => {
    return (
        <div className='flex items-center gap-6 p-3'>
            <h4 className='text-2xl font-bold'>1</h4>
            <img src={image02} alt="" />
            <div className='flex flex-col gap-2'>
                <h5 className='font-semibold'>CryptoFunks</h5>
                <span className='flex items-center text-sm gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 9 14" fill="none">
                        <g clip-path="url(#clip0_328_333)">
                            <path d="M8.3154 7.13126L4.26572 9.66876L0.213379 7.13126L4.26572 0L8.3154 7.13126ZM4.26572 10.4836L0.213379 7.9461L4.26572 14L8.31806 7.9461L4.26572 10.4836Z" fill="#000000" />
                        </g>
                        <defs>
                            <clipPath id="clip0_328_333">
                                <rect width="8.53125" height="14" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    19,769.39
                </span>
            </div>
            <h4 className='text-xl font-semibold text-green-500'>+26.52%</h4>
        </div>
    );
};

export default TopCollectionCard;