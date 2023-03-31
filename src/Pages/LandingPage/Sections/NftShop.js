import React from 'react';
import card11 from '../../../assets/card11.png'
import card06 from '../../../assets/card12.png'
import card09 from '../../../assets/card05.png'

import avatar01 from '../../../assets/Ellipse 95.png'
import avatar02 from '../../../assets/Ellipse 95 (1).png'

const NftShop = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto py-16">
                <div className="hero-content flex-col md:flex-row mx-auto">
                    <div className='w-full md:w-1/2 flex items-center gap-10'>
                        <div className='flex flex-col items-end gap-10'>
                            <div className='relative'>
                                <img className='w-72' src={card11} alt="" />
                                <img className='absolute -right-4 -bottom-4 w-12' src={avatar01} alt="" />
                            </div>
                            <div className='relative'>
                                <img className='w-44' src={card06} alt="" />
                                <img className='absolute -right-4 -bottom-4 w-12' src={avatar02} alt="" />
                            </div>
                        </div>
                        <div className='relative'>
                            <img className='w-60' src={card09} alt="" />
                            <img className='absolute -right-4 -bottom-4 w-12' src={avatar02} alt="" />
                        </div>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <h4 className="text-4xl font-extrabold uppercase">Create and <br /> sell your NFTs</h4>
                        <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
                        <button className="btn btn-primary btn-outline rounded-full">Sign Up Now</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NftShop;