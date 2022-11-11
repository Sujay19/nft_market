import React from 'react';

const Banner = ({ name, parentStyles, childStyles }) => (
  <div className={`w-full relative flex items-center  overflow-hidden  z-0 nft-gradient ${parentStyles}`}>
    <p className={`font-poppins font-bold leading-70 dark:text-white text-nft-black-1 text-5xl ${childStyles} `}> {name}</p>
    <div className="absolute w-48 h-48 sm:w-32 sm:h-32 -top-9 -left-16 rounded-full  white-bg  -z-5" />
    <div className="absolute w-72 h-72 sm:w-56 sm:h-56 -bottom-24 -right-14 rounded-full  white-bg -z-5" />
  </div>
);

export default Banner;

