import React, { useContext } from 'react';
import Image from 'next/image';

import images from '../assets';
import { NFTContext } from '../context/NFTMarketContext';

const CreatorCard = ({ rank, creatorImage, creatorName, creatorEths }) => {
  const { nftCurrency } = useContext(NFTContext);
  return (
    <div className="min-w-190 minlg:min-w-240  dark:bg-nft-black-3  bg-nft-gray-1 border dark:border-nft-black-3 border-nft-gray-1 flex flex-col p-4 m-4 rounded-3xl">
      <div className="  h-8 w-8  minlg:h-10  minlg:w-10 flexCenter  bg-nft-red-violet rounded-full">
        <p className="font-poppins font-semibold text-white text-base minlg:text-lg">{rank}</p>
      </div>
      <div className="flex justify-center my-2">
        <div className="relative h-20 w-20 minlg:h-28 minlg:w-28">
          <Image
            src={creatorImage}
            objectFit="cover"
            layout="fill"
            alt="Creator"
            className=" rounded-full"
          />
          <div className="absolute w-4 h-4 minlg:w-7 minlg:h-7 bottom-2 -right-0">
            <Image
              src={images.tick}
              objectFit="contain"
              layout="fill"
              alt="tick"
            />
          </div>
        </div>
      </div>
      <div className=" mt-3 minlg:mt-7 text-center flexCenter flex-col">
        <p className=" font-poppins font-semibold dark:text-white text-nft-black-1 ">{creatorName}</p>
        <p className="mt-1 font-poppins font-semibold dark:text-white text-nft-black-1">{creatorEths.toFixed(2)} <span className="font-normal">{nftCurrency}</span> </p>
      </div>
    </div>
  );
};

export default CreatorCard;
