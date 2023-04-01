import React from 'react';
import img1 from '../../../assets/card11.png'
import img2 from '../../../assets/card05.png'
import img3 from '../../../assets/card12.png'
import circle from '../../../assets/Group 83.png'
import avatar from '../../../assets/Ellipse 95.png'
import dot from '../../../assets/Dot.png'
import Timer from '../../../components/Timer';
import NFTIcon from '../../../components/NFTIcon';
import StatesAnimation from '../../../components/StatesAnimation';


const Hero = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="flex flex-col mr-auto place-self-center lg:col-span-7 relative">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white uppercase">Discover, and collect Digital Art  NFTs </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
                    <button className="btn btn-primary rounded-full px-6 w-44 z-30">Explore Now</button>

                    <div className="w-80 grid grid-cols-3 justify-items-end pt-2 z-30">
                        <div className="mx-2">
                            <div className="stat-value">
                                <StatesAnimation end={98} />K+
                            </div>
                        </div>

                        <div className="mx-2">
                            <div className="stat-value">
                                <StatesAnimation end={12} />K+
                            </div>
                        </div>

                        <div className="mx-2">
                            <div className="stat-value">
                                <StatesAnimation end={15} />K+
                            </div>
                        </div>
                    </div>
                    <div className="w-80 grid grid-cols-3 justify-items-start z-30 ml-2">
                        <div className="text-base">Artwork</div>
                        <div className="text-base">Auction</div>
                        <div className="text-base">Artist</div>
                    </div>
                    <img className='absolute -bottom-7 -left-4 z-10' src={dot} alt="" />
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <div className='relative w-[400px]'>
                        <img className='w-[350px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30' src={img1} alt="" />
                        <img className='w-[290px] absolute top-1/2 left-[210px] transform -translate-x-1/3 -translate-y-1/2 z-20 animate-pulse' src={img2} alt="" />
                        <img className='w-[260px] absolute top-1/2 left-[235px] transform -translate-x-1/4 -translate-y-1/2 z-10 animate-pulse' src={img3} alt="" />
                        <div className='absolute top-[200px] left-[0px] transform -translate-x-1/4 -translate-y-1/2 z-40'>
                            <img className='w-[100px] h-[100px] animate-spin-slow' src={circle} alt="" />
                        </div>

                        <div className='w-[300px] absolute top-[50px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-lg p-2'>
                            <h4 className='text-2xl font-semibold text-white mb-2'>Abstr Gradient NFT</h4>
                            <div className='flex items-center gap-2'>
                                <img className='w-7' src={avatar} alt="" />
                                <h4 className='text-white'>Arkhan17</h4>
                            </div>
                        </div>

                        <div className='w-[300px] absolute -bottom-[25px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-lg p-2 px-4 bg-gray-100 flex justify-between backdrop-blur-md bg-white/20 text-white'>
                            <div>
                                <h4 className='text-sm mb-1'>Current Bid</h4>
                                <div className='flex items-center gap-2'>
                                    <NFTIcon color={'ffffff'} />
                                    <span>0.25 ETH</span>
                                </div>
                            </div>
                            <div>
                                <h4 className='text-sm mb-1'>Ends in</h4>
                                <Timer hours={1} minutes={30} seconds={0} color={'white'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;