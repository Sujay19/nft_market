import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';
import { Banner, CreatorCard, NFTCard } from '../components';
import { makeid } from '../utils/makeId';

const Home = () => {
  const [hideButtons, setHideButtons] = useState(false);
  const { theme } = useTheme();
  const parentref = useRef(null);
  const scrollref = useRef(null);

  const handleScroll = (direction) => {
    const { current } = scrollref;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;
    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };
  const isScrollable = () => {
    const { current } = scrollref;
    const { current: parent } = parentref;
    if (current?.scrollWidth >= parent?.offsetWidth) {
      return setHideButtons(false);
    }
    return setHideButtons(true);
  };
  useEffect(() => {
    isScrollable();
    window.addEventListener('resize', isScrollable);

    return () => {
      window.removeEventListener('resize', isScrollable);
    };
  });
  return (
    <div className="flex justify-center p-12 sm:px-4">
      <div className="w-full  minmd:w-4/5  ">
        <Banner
          name="Discover,collect and sell extraordinary NFTs"
          childStyles="md:text-4xl sm:text-2-xl xs:text-xl text-left"
          parentStyles="mb-6 justify-start h-72 sm:h-60 p-12 xs:p-4 xs:h-44  rounded-3xl"
        />
        <div>
          <h1 className="font-poppins  font-semibold dark:text-white text-nft-black-1 text-2xl minlg:text-4xl sm:ml-0 ml-4">Best Creators</h1>
          <div className="flex-1 relative max-w-full flex mt-3" ref={parentref}>
            <div className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none" ref={scrollref}>
              {
                [6, 7, 8, 9, 10].map((id) => (
                  <CreatorCard
                    key={`creator-${id}`}
                    rank={id}
                    creatorImage={images[`creator${id}`]}
                    creatorName={`0x${makeid(3)}...${makeid(3)}`}
                    creatorEths={10 - id * 0.5}
                  />
                ))
                }
              { !hideButtons && (
              <>
                <div onClick={() => handleScroll('left')} className=" absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 left-0 cursor-pointer">
                  <Image
                    src={images.left}
                    objectFit="contain"
                    layout="fill"
                    alt="left-arrow"
                    className={theme === 'light' && 'filter invert'}
                  />
                </div>
                <div onClick={() => handleScroll('right')} className=" absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 right-0 cursor-pointer">
                  <Image
                    src={images.right}
                    objectFit="contain"
                    layout="fill"
                    alt="right-arrow"
                    className={theme === 'light' && 'filter invert'}
                  />
                </div>
              </>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flexBetween  mx-4 minlg:mx-8 xs:mx-0  sm:flex-col sm:items-start">
            <h1 className="font-poppins flex-1  sm:mb-4 font-semibold dark:text-white text-nft-black-1 text-2xl minlg:text-4xl sm:ml-0 ml-4">Hot Bids</h1>
            <div>SearchBar</div>
          </div>
          <div className="flex flex-wrap w-full mt-3  justify-start md:justify-center">
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <NFTCard
                  key={`nft-${i}`}
                  nft={{
                    i,
                    name: `NIFTY nft ${i}`,
                    price: (10 - i * 0.543).toFixed(2),
                    seller: `0x${makeid(3)}...${makeid(3)}`,
                    owner: `0x${makeid(3)}...${makeid(3)}`,
                    description: 'Cool NFT on sale',
                  }}

                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
