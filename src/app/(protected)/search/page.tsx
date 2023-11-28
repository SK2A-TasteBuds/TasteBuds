'use client';
import React, { useState, useEffect } from 'react';
import FoodCard from './FoodCard';

// 画像のパス定義

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
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="grid grid-cols-2 gap-4 p-2 pb-20">
        {foodItems.map((name, index) => (
          <FoodCard key={index} name={name} />
        ))}
      </div>
    </div>
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
