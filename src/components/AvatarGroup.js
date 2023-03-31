import React from 'react';
import img from '../assets/Ellipse 95 (1).png'

const AvatarGroup = () => {
    return (

        <div className="avatar-group -space-x-6">
            <div className="avatar">
                <div className="w-10">
                    <img src={img} alt='' />
                </div>
            </div>
            <div className="avatar">
                <div className="w-10">
                    <img src={img} alt='' />
                </div>
            </div>
            <div className="avatar">
                <div className="w-10">
                    <img src={img} alt='' />
                </div>
            </div>
            <div className="avatar">
                <div className="w-10">
                    <img src={img} alt='' />
                </div>
            </div>
        </div>

    );
};

export default AvatarGroup; 