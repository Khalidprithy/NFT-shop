import React from 'react';
import CountUp from 'react-countup';

const StatesAnimation = ({ end }) => {
    return (
        <CountUp start={0} end={end} duration={2} separator="," decimal="." prefix="" />
    );
};

export default StatesAnimation;