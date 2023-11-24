'use client';
import React, { useState, useEffect } from 'react';
import FoodCard from './FoodCard';
// import dining_img from "@/assets/img/asia.svg"
// import izakaya_img from "@/assets/img/izakaya.svg"
// import create_img from "@/assets/img/create.svg"
// import wasyoku_img from "@/assets/img/wasyoku.svg"
// import yousyoku_img from "@/assets/img/yousyoku.svg"
// import italian_img from "@/assets/img/italian.svg"
// import tyuuka_img from "@/assets/img/tyuuka.svg"
// import yakiniku_img from "@/assets/img/yakiniku.svg"
// import korean_img from "@/assets/img/korean.svg"
// import asia_img from "@/assets/img/asia.svg"
// import country_img from "@/assets/img/country.svg"
// import karaoke_img from "@/assets/img/karaoke.svg"
// import bar_img from "@/assets/img/bar.svg"
// import ramen_img from "@/assets/img/ramen.svg"
// import okonomiyaki_img from "@/assets/img/okonomiyaki.jpg"
// import cafe_img from "@/assets/img/cafe.svg"
// import other_img from "@/assets/img/other.svg"
// 画像のパス定義

export default function Home() {
  // 食品ジャンルのデータを格納するための状態
  const [foodItems, setItems] = useState([]);
  // const foodimg = [
  //   dining_img ,izakaya_img,create_img,wasyoku_img,yousyoku_img,italian_img,tyuuka_img,yakiniku_img,korean_img,asia_img,country_img,karaoke_img,bar_img,ramen_img,okonomiyaki_img,cafe_img,other_img
  // ]

  useEffect(() => {
    // APIからデータを非同期で取得する関数
    async function fetchData() {
      const res = await fetch('http://localhost:3000/api/genre');
      const data = await res.json();
      console.log(data);
      setItems(data);
      //0 居酒屋, 3 和 ,4洋,5イタリアン,6中華,7焼肉,8韓国,12バー,13 ラーメン,15 カフェ,16 その他
      //const sendData=[data[0], data[3], data[4], data[5], data[6],data[7], data[8], data[12], data[13], data[15], data[16]];
    }

    // データ取得関数を呼び出し
    fetchData();
  }, []); // 空の依存配列で効果はコンポーネントのマウント時にのみ実行されます

  // コンポーネントのUI部分
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* <img src={asia} alt="" /> */}
      <div className="grid grid-cols-2 gap-4">
        {/* foodItemsの各要素をFoodCardコンポーネントで表示 */}
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
async function Search() {
  const data = await getData();
  console.log(data);
  return (
    <div>
      Search page
      {data.map((item: string, index: number) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
