import React from 'react';
import img02 from '../../assets/card02.png'
import profile from '../../assets/Ellipse 95.png'

const SubCard = () => {
    return (
        <div className='flex items-center'>
            <img src={img02} alt="" />
            <div className='flex flex-col items-start gap-3 h-full pl-2'>
                <h4 className='text-lg font-semibold'>The Futr Abstr</h4>
                <div className='flex items-center gap-2'>
                    <img src={profile} alt="" />
                    <span className='flex items-center text-sm text-green-500 rounded-lg p-1 border-2 border-green-500 gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                            <g clip-path="url(#clip0_328_333)">
                                <path d="M8.3154 7.13126L4.26572 9.66876L0.213379 7.13126L4.26572 0L8.3154 7.13126ZM4.26572 10.4836L0.213379 7.9461L4.26572 14L8.31806 7.9461L4.26572 10.4836Z" fill="#00AC4F" />
                            </g>
                            <defs>
                                <clipPath id="clip0_328_333">
                                    <rect width="8.53125" height="14" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        0.25 ETH</span>
                    <span>1 of 8</span>
                </div>
                <button className='btn btn-outline btn-primary rounded-full normal-case'>Place a bid</button>
            </div>
        </div>
    );
};

export default SubCard;