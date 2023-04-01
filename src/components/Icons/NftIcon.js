import React from 'react';

const IconBlack = ({ color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 9 14" fill="none">
            <g clipPath="url(#clip0_328_333)">
                <path d="M8.3154 7.13126L4.26572 9.66876L0.213379 7.13126L4.26572 0L8.3154 7.13126ZM4.26572 10.4836L0.213379 7.9461L4.26572 14L8.31806 7.9461L4.26572 10.4836Z" fill={`#${color}`} />
            </g>
            <defs>
                <clipPath id="clip0_328_333">
                    <rect width="8.53125" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default IconBlack;