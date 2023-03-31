import React from 'react';
import MainCard from '../../../components/Cards/MainCard';
import SubCard from '../../../components/Cards/SubCard';
import TopCollectionCard from '../../../components/Cards/TopCollectionCard';

const TopCollections = () => {

    const data = [
        {
            "id": '1614dsasad',
            "profile_image": "https://example.com/profile-image1.jpg",
            "sales_percentage": 26.52,
            "title": "CryptoFunks",
            "nft_points": 19769.39,
            "sell_direction": "up"
        },
        {
            "id": '1654sad',
            "profile_image": "https://example.com/profile-image2.jpg",
            "sales_percentage": 10.52,
            "title": "Cryptix",
            "nft_points": 2769.39,
            "sell_direction": "down"
        },
        {
            "id": '164sad',
            "profile_image": "https://example.com/profile-image2.jpg",
            "sales_percentage": 2.52,
            "title": "Frensware",
            "nft_points": 9232.39,
            "sell_direction": "up"
        },
        {
            "id": '1614sad',
            "profile_image": "https://example.com/profile-image2.jpg",
            "sales_percentage": 1.52,
            "title": "PunkArt",
            "nft_points": 3769.39,
            "sell_direction": "up"
        },
        {
            "id": '1654sd',
            "profile_image": "https://example.com/profile-image2.jpg",
            "sales_percentage": 2.52,
            "title": "Art Crypto",
            "nft_points": 10769.39,
            "sell_direction": "down"
        },
        {
            "id": '16gf54sad',
            "profile_image": "https://example.com/profile-image2.jpg",
            "sales_percentage": 0.15,
            "title": "Photographer",
            "nft_points": 750,
            "sell_direction": "down"
        },
        {
            "id": '1654sfdsfad',
            "profile_image": "https://example.com/profile-image2.jpg",
            "sales_percentage": 0.15,
            "title": "Photographer",
            "nft_points": 750,
            "sell_direction": "down"
        }
    ]

    const topNFt = data.slice(0, 5)


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between max-w-screen-xl mx-auto py-4 my-10'>
            <MainCard />
            <div className='flex flex-col justify-between gap-5 mx-auto py-4'>
                <SubCard />
                <SubCard />
                <SubCard />
            </div>
            <div className='py-4 lg:border-l-2 border-gray-100 px-6 mx-auto'>
                <h3 className='text-2xl font-bold uppercase'>Top Collections Over</h3>
                <h6 className='text-lg font-medium text-violet-600'>Last 7 days</h6>
                <div className='p-4'>
                    {
                        topNFt.map((item, index) => <TopCollectionCard
                            key={item.id}
                            item={item}
                            index={index}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopCollections;