import React from 'react';
import card01 from '../../assets/Card01.png'
import card07 from '../../assets/card07.png'
import card06 from '../../assets/card06.png'
import card09 from '../../assets/card09.png'
import avatar from '../../assets/Ellipse 95.png'

const FeaturedCard = () => {
    return (
        <div className='mx-auto'>
            <div className='flex'>
                <img className='w-8/12' src={card01} alt="" />
                <div className='w-4/12 flex flex-col justify-between gap-2'>
                    <img className='w-36 px-2' src={card07} alt="" />
                    <img className='w-36 px-2' src={card06} alt="" />
                    <img className='w-36 px-2' src={card09} alt="" />
                </div>
            </div>
            <h4 className='text-xl font-semibold mt-5 mb-4'>Amazing Collection</h4>
            <div className='flex items-center justify-between px-2'>
                <div className='flex items-center gap-2'>
                    <img className='' src={avatar} alt="" />
                    <h4 className='font-semibold'>by Arkhan</h4>
                </div>
                <button className='btn btn-sm btn-primary btn-outline rounded-full text-sm normal-case'>Total 54 Items</button>
            </div>
        </div>
    );
};

export default FeaturedCard;