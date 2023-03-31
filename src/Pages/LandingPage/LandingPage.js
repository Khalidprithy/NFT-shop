import React from 'react';
import FeaturedNft from './Sections/FeaturedNft';
import Hero from './Sections/Hero';
import Introduction from './Sections/Introduction';
import TopCollections from './Sections/TopCollections';

const LandingPage = () => {
    return (
        <div>
            <Hero />
            <Introduction />
            <TopCollections />
            <FeaturedNft />
        </div>
    );
};

export default LandingPage;