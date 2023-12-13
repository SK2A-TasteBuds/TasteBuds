'use client';

import React from 'react';
import Image from 'next/image';

//画像  名前 lg
//store.name、sotre.img、store.id

const Card = ({ store }: { store: any }) => {
  if (!store) {
    // Render loading state or alternative content
    return <p>Loading...</p>;
  }

  //console.log(store);
  const { address, name, photo, discription, genre } = store;

  return (
    <>
      <div className=" max-w-md w-full  border border-gray-200 rounded-lg  store-img relative p-4 m-5  ">
        <Image
          src={photo}
          alt="store_img"
          className="h-64 w-full rounded-xl md:h-72 lg:h-80 "
          width={320}
          height={320}
        />

        <div className="py-4 max-w-md w-full">
          <div className="flex justify-between ">
            <h3 className="text-xs">{genre.name}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 fill-orange-500"
            >
              <path
                fillRule="evenodd"
                d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="mb-2  text-xl font-bold tracking-tight text-gray-900 ">
            {name}
          </p>

          <p className="mb-3 text-xs font-normal text-gray-700 ">{address}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
