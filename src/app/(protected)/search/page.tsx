'use client';
import React, { useState, useEffect } from 'react';
import FoodCard from './FoodCard';
import PageMotion from '@/app/components/PageMotion';


export default function Home() {
  // 食品ジャンルのデータを格納するための状態
  const [foodItems, setItems] = useState([]);

  useEffect(() => {
    // APIからデータを非同期で取得する関数
    async function fetchData() {
      const res = await fetch('http://localhost:3000/api/genre');
      const data = await res.json();
      console.log(data);
      setItems(data);
    }

    // データ取得関数を呼び出し
    fetchData();
  }, []); // 空の依存配列で効果はコンポーネントのマウント時にのみ実行されます

  // コンポーネントのUI部分

  return (
    <PageMotion>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 gap-4 p-2 pb-20">
          {foodItems.map((item: any, index) => (
            <FoodCard key={index} name={item.name} imgUrl={item.imgUrl} genre_code={item.genre_code} />
          ))}
        </div>

      </div>
    </PageMotion>
  );
}

async function getData() {
  const res = await fetch('http://localhost:3000/api/genre');

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

// // =======
// <div className="shadow-md rounded-lg overflow-hidden flex items-center justify-center px-2 pb-20 ">
// <div className="grid grid-cols-2 md:grid-cols-3 gap-1 mx-auto ">
//   {foodItems.map((item: any, index) => (
//     <FoodCard
//       key={index}
//       name={item.name}
//       imgUrl={item.imgUrl}
//       genre_code={item.genre_code}
//     />
//   ))}
// >>>>>>> d4698e2658163d69ee6d116b587cff4cf5cabad4
