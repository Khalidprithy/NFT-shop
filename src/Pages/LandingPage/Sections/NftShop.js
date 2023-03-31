import React from 'react';
import card11 from '../../../assets/card11.png'
import card06 from '../../../assets/card12.png'
import card09 from '../../../assets/card05.png'

import avatar01 from '../../../assets/Ellipse 95.png'
import avatar02 from '../../../assets/Ellipse 95 (1).png'

const NftShop = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-full md:w-1/2 flex items-center gap-10 '>
                        <div className='flex flex-col items-end gap-10'>
                            <div className='relative'>
                                <img className='w-72 h-72' src={card11} alt="" />
                                <img className='absolute -right-4 -bottom-4 w-12' src={avatar01} alt="" />
                            </div>
                            <div className='relative'>
                                <img className='w-44 h-44' src={card06} alt="" />
                                <img className='absolute -right-4 -bottom-4 w-12' src={avatar02} alt="" />
                            </div>
                        </div>
                        <div className='relative'>
                            <img className='w-60 h-60' src={card09} alt="" />
                            <img className='absolute -right-4 -bottom-4 w-12' src={avatar02} alt="" />
                        </div>


                    </div>
                    <div className='w-full md:w-1/2'>
                        <h4 className="text-3xl font-bold uppercase">Create and <br /> sell your NFTs</h4>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary btn-outline rounded-full">Sign Up Now</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NftShop;