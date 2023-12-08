'use client';

import React from 'react';
import Image from 'next/image';

//画像  名前 lg
//store.name、sotre.img、store.id

const Card = ({ store }: { store: any }) => {
  const { address, name, img, discription } = store;

  return (
    <>
      <div className=" max-w-lg  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 store-img relative h-[80%] w-full  overflow-hidden">
        <a href="#">
          <Image
            src={img}
            alt="store_img"
            className="w-full h-full px-4  rounded-md max-w-md max-h-96 "
            width={400}
            height={400}
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2  text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
            {address}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
