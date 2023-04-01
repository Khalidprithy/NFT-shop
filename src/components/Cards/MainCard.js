import React from 'react';
import image from '../../assets/Card01.png'
import profile from '../../assets/Ellipse 95.png'

const MainCard = () => {
    return (
        <div className='p-4 mx-auto'>
            <img className='max-w-xl md:w-full' src={image} alt="" />
            <div>
                <div className='flex items-center justify-between py-6'>
                    <div className='flex items-center gap-1'>
                        <img className='w-10' src={profile} alt="" />
                        <div className=''>
                            <h4 className='text-lg font-semibold'>The Futr Abstr</h4>
                            <p className='text-sm font-light'>10 in the stock</p>
                        </div>
                    </div>
                    <div>
                        <h6 className='text-sm font-semibold'>Highest Bid</h6>
                        <p className='text-lg font-semibold flex items-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                                <g clipPath="url(#clip0_328_333)">
                                    <path d="M8.3154 7.13126L4.26572 9.66876L0.213379 7.13126L4.26572 0L8.3154 7.13126ZM4.26572 10.4836L0.213379 7.9461L4.26572 14L8.31806 7.9461L4.26572 10.4836Z" fill="#000000" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_328_333">
                                        <rect width="8.53125" height="14" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            0.25 ETH</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainCard;