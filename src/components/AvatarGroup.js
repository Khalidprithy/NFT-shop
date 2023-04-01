import React from 'react';
import img from '../assets/Ellipse 95 (1).png'

const AvatarGroup = () => {
    return (

        <div className="flex mb-5 -space-x-3">
            <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={img} alt="" />
            <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={img} alt="" />
            <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={img} alt="" />
            <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={img} alt="" />
        </div>

    );
};

export default AvatarGroup; 