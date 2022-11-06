import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

import images from '../assets';
import { Button } from './index.js';

const MenuItems = ({ isMobile, active, setActive }) => {
  const generateLinks = (i) => {
    switch (i) {
      case 0: return '/';
      case 1: return '/created-nft';
      case 2: return '/my-nfts';
      default: return '/';
    }
  };
  return (
    <ul className={`flexCenter flex-row list-none ${isMobile && 'flex-col h-full'}`}>
      { ['Explore NFTs', 'Listed NFTs', 'My NFTs'].map((items, i) => (
        <li
          key={i}
          onClick={() => setActive(items)}
          className={`flex flex-row items-center font-poppins font-semibold text-base  hover:text-nft-black-1 dark:hover:text-white mx-3
          ${active === items ? 'dark:text-white  text-nft-black-1' : 'dark:text-nft-gray-3 text-nft-gray-2'}`}
        >
          <Link href={generateLinks(i)}>{items}</Link>
        </li>
      ))}
    </ul>
  );
};

const ButtonGroup = ({ router, setActive }) => {
  const hasConnected = true;
  return (
    hasConnected ? (
      <Button
        btnName="Create"
        classStyles="mx-2 rounded-xl"
        handleClick={() => {
          setActive('');
          router.push('/create-nft');
        }}
      />
    )
      : <Button btnName="Connect" classStyles="mx-2 rounded-xl" />
  );
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [active, setActive] = useState('Explore NFTs');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" flex justify-between items-center w-full fixed z-10 p-4 flex-row  border-b-2 dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
      <div className="flex flex-1 flex-row justify-start">
        <Link href="/">
          <div className="flex justify-center items-center md:hidden cursor-pointer" onClick={() => {}}>
            <Image
              src={images.logo02}
              objectFit="contain"
              height={32}
              width={32}
              alt="logo2"
            />
            <p className="dark:text-white text-nft-black-1 font-semibold  text-lg  ml-1 ">CryptoKet</p>
          </div>
        </Link>
        <Link href="/">
          <div className="hidden  md:flex" onClick={() => {}}>
            <Image
              src={images.logo02}
              objectFit="contain"
              height={32}
              width={32}
              alt="logo2"
            />
          </div>
        </Link>
      </div>

      <div className="flex flex-initial justify-end">
        <div className="flex items-center mr-2">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
          <label htmlFor="checkbox" className="flexBetween w-8 h-4 bg-black  rounded-2xl relative p-1 label">
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <div className="w-3 h-3 absolute rounded-full ball bg-white" />
          </label>
        </div>
        <div className="flex md:hidden">
          <MenuItems active={active} setActive={setActive} />
          <div className="ml-4">
            <ButtonGroup router={router} setActive={setActive} />
          </div>
        </div>
      </div>

      <div className="hidden md:flex ml-2">

        {
          isOpen ? (
            <Image
              src={images.cross}
              alt="close"
              objectFit="contain"
              width={20}
              height={20}
              onClick={() => { setIsOpen(false); }}
              className={theme === 'light' && 'filter invert'}
            />

          ) : (

            <Image
              src={images.menu}
              alt="menu"
              objectFit="contain"
              width={25}
              height={25}
              onClick={() => { setIsOpen(true); }}
              className={theme === 'light' && 'filter invert'}
            />
          )
        }

        {
            isOpen && (
            <div className="fixed inset-0 top-65 dark:bg-nft-dark bg-white z-10 nav-h flex justify-between flex-col">
              <div className="flex-1 p-4">
                <MenuItems active={active} setActive={setActive} isMobile />
              </div>
              <div className="p-4 border-t  dark:border-nft-black-1 border-nft-gray-1 ">
                <ButtonGroup router={router} setActive={setActive} />
              </div>
            </div>
            )
          }

      </div>

    </nav>
  );
};

export default Navbar;
