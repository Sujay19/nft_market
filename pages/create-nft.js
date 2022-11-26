import React, { useState, useMemo, useCallback, useContext } from 'react';

import { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import { Button, Input } from '../components';
import images from '../assets';

const CreateNFT = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, setFormInput] = useState({ Price: '', name: '', description: '' });
  const { theme } = useTheme();

  const ondrop = useCallback(() => {
    // upload files to IPFS
  }, []);
  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    ondrop,
    accept: 'image/*',
    maxSize: 5000000,
  });

  const fileStyles = useMemo(() => (
    ` dark:bg-nft-black-1 bg-white border border-dashed dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm
      ${isDragActive && 'border - file - active'}
      ${isDragAccept && 'border - file - accept'}
      ${isDragReject && 'border - file - reject'}`
  ), [isDragActive, isDragAccept, isDragReject]);

  return (
    <div className="flex justify-center px-12 sm:px-4 mt-8">
      <div className=" w-3/5 md:w-full">
        <h1 className="font-poppins  font-semibold dark:text-white text-nft-black-1 text-2xl minlg:text-4xl sm:ml-0 ml-4">Create new NFT</h1>
        <div className="mt-16">
          <p className="font-poppins  font-semibold dark:text-white text-nft-black-1 text-xl">Upload File</p>
          <div className="mt-4">
            <div {...getRootProps()} className={fileStyles}>
              <input {...getInputProps()} />
              <div className="flexCenter flex-col  text-center">
                <p className="font-poppins  font-semibold dark:text-white text-nft-black-1 text-xl">PNG,GIF,SVG,WEBM Max 100mb</p>
                <div className="flex justify-center my-12 w-full">
                  <Image
                    src={images.upload}
                    width={100}
                    height={100}
                    objectFit="contain"
                    alt="Upload file"
                    className={theme === 'light' && 'filter invert'}
                  />
                </div>
                <p className="font-poppins  font-semibold dark:text-white text-nft-black-1 text-sm">Drag and Drop file here</p>
                <p className="font-poppins  font-semibold dark:text-white text-nft-black-1 text-sm mt-2">or Browse from your device</p>
              </div>
            </div>
            {fileUrl
            && (
            <aside>
              <div>
                <img
                  src={fileUrl}
                  alt="uploaded_image"
                />
              </div>
            </aside>
            )}
          </div>
        </div>
        <Input
          inputType="input"
          title="Name"
          placeholder="Asset Name"
          handleClick={(e) => setFormInput({ ...formInput, name: e.target.value })}
        />

        <Input
          inputType="textarea"
          title="Description"
          placeholder="Asset Description"
          handleClick={(e) => setFormInput({ ...formInput, description: e.target.value })}
        />

        <Input
          inputType="number"
          title="Price"
          placeholder="Asset Price"
          handleClick={(e) => setFormInput({ ...formInput, price: e.target.value })}
        />
        <div className="mt-7 flex justify-end w-full">
          <Button btnName="Create NFT" handleClick={() => {}} classStyles="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;
