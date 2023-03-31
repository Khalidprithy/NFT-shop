import React from 'react';
import DiscoverNft from './Sections/DiscoverNft';
import FeaturedNft from './Sections/FeaturedNft';
import Hero from './Sections/Hero';
import Introduction from './Sections/Introduction';
import NftShop from './Sections/NftShop';
import TopCollections from './Sections/TopCollections';

const LandingPage = () => {
    return (
        <div>
            <Hero />
            <Introduction />
            <TopCollections />
            <FeaturedNft />
            <NftShop />
            <DiscoverNft />
        </div>
    );
};

export default LandingPage;