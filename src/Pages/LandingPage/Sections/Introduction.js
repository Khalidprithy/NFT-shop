import React from 'react';

const Introduction = () => {
    return (
        <div className='bg-gray-100 px-4 py-16 my-6'>
            <div className='grid grid-cols-1 md:grid-cols-3 max-w-screen-xl mx-auto'>
                <h4 className='text-3xl uppercase font-extrabold my-auto'>The amazing NFT art <br /> of the world here</h4>
                <div className=''>
                    <div className='flex items-center gap-2'>

                        <lord-icon
                            src="https://cdn.lordicon.com/ozqvdvoh.json"
                            trigger="loop"
                            delay="2000"
                            colors="outline:#121331,primary :#30e849,secondary :#ee6d66"
                            style={{ width: '50px', height: '50px' }}>
                        </lord-icon>
                        <h6 className='font-semibold'>Fast Transaction</h6>
                    </div>
                    <p className='pl-14 font-light text-sm'>Refers to quick and secure transactions on an NFT app, providing a better user experience, reducing price volatility and fraud risk.</p>
                </div>
                <div>
                    <div className='flex items-center gap-2'>
                        <lord-icon
                            src="https://cdn.lordicon.com/hbwqfgcf.json"
                            trigger="loop"
                            delay="2000"
                            colors="outline:#545454,primary:#7166ee,secondary:#e86830,tertiary:#66ee78"
                            style={{ width: '50px', height: '50px' }}>
                        </lord-icon>
                        <h6 className='font-semibold'>Growth Transaction</h6>
                    </div>
                    <p className='pl-14 font-light text-sm'>Refers to buying NFTs with the potential for long-term growth and profits, by investing in popular or emerging artists, which requires careful research and analysis.</p>
                </div>
            </div>
        </div>
    );
};

export default Introduction;