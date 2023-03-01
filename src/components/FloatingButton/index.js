import React from 'react';
import { ImgWa } from '../../assets';

function FloatingButton() {
    return (
        <button onClick={() => window.location.href = 'https://multicourse.com'} className="floating-button bg-primary w-20 h-20 flex justify-center items-center hover:bg-secondary transition-all duration-700 rounded-full shadow-2xl">
            <img src={ImgWa} alt='' />
        </button>
    );
}

export default FloatingButton;
