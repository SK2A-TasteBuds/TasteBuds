import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FoodCardProps {
  genre_code: string;
  name: string;
  imgUrl: string;
}

function FoodCard({ name, imgUrl, genre_code }: FoodCardProps) {
  return (
    <Link href={`/?genre_code=${encodeURIComponent(genre_code)}`}>
      <div className="food-card relative box">
        <Image
          width={400}
          height={400}
          className="w-full h-32 md:h-72 md:max-w-xl max-h-full object-cover rounded-lg"
          src={imgUrl}
          alt={name}
        />
        <p className="rounded-lg absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-50 text-black font-bold text-xs">
          #{name}
        </p>
        {/* その他のUI要素 */}
      </div>
    </Link>
  );
}

export default FoodCard;
