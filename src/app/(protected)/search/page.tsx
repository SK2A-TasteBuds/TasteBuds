'use client';
import React, { useState, useEffect } from 'react';
import FoodCard from './FoodCard';
import Header from '@/app/components/HeaderBar';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import SushiSvg from '@/assets/svg/sushi.svg';
import FruitSandwichSvg from '@/assets/svg/fruit-sandwich.svg';
import Link from 'next/link';

export default function Home() {
  // 食品ジャンルのデータを格納するための状態
  const [foodItems, setItems] = useState([]);
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });
  useEffect(() => {
    // APIからデータを非同期で取得する関数
    async function fetchData() {
      const res = await fetch('/api/genre');
      const data = await res.json();
      console.log(data);
      setItems(data);
    }

    // データ取得関数を呼び出し
    fetchData();
  }, []); // 空の依存配列で効果はコンポーネントのマウント時にのみ実行されます

  // 特集ページのCSS

  type CircleStyle = {
    width: string;
    height: string;
    borderRadius: string;
    WebkitBorderRadius: string;
    MozBorderRadius: string;
    background: string;
    position: 'absolute';
    top: string;
    left: string;
  };

  type TextStyle = {
    textAlign: string;
    background: string;
    fontSize: string;
    fontWeight: string;
    color: string;
    position: 'absolute';
    top: string;
    left: string;
    whiteSpace: string;
  };

  type ContainerStyle = {
    height: string;
    width: string;
    background: string;
  };

  const bestcontainerStyle: ContainerStyle = {
    height: '223px',
    width: '52%',
    background:
      'linear-gradient(90deg, #FFC7B7 0% 60%, #FFAC95 60% 80%, #FE724C 80% 100%)',
  };
  const bestcirclestyle1: CircleStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    WebkitBorderRadius: '50%',
    MozBorderRadius: '50%',
    background: '#FFF',
    position: 'absolute',
    top: '15px',
    left: '110px',
  };
  const bestcirclestyle2: CircleStyle = {
    width: '190px',
    height: '190px',
    borderRadius: '50%',
    WebkitBorderRadius: '50%',
    MozBorderRadius: '50%',
    background: '#FE724C',
    position: 'absolute',
    top: '20px',
    left: '115px',
  };
  const bestcirclestyle3: CircleStyle = {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    WebkitBorderRadius: '50%',
    MozBorderRadius: '50%',
    background: '#FFF',
    position: 'absolute',
    top: '25px',
    left: '120px',
  };
  const besttextstyle: any = {
    textAlign: 'center', // 'left', 'right', 'justify' なども選択可能
    background: '#FFF',
    fontSize: '2.0rem', // フォントサイズの指定
    // fontFamily: 'Arial',
    fontWeight: 'bold', // フォントの太さ
    color: '#FF0F00', // テキストの色
    position: 'absolute',
    top: '60px',
    left: '165px',
    whiteSpace: 'pre-line',
  };

  const hotcontainerStyle: ContainerStyle = {
    height: '223px',
    width: '52%',
    background:
      'linear-gradient(90deg, #FFFCB5 0% 60%, #FFFA77 60% 80%, #F9FE1B 80% 100%)',
  };

  const hotcirclestyle1: CircleStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    WebkitBorderRadius: '50%',
    MozBorderRadius: '50%',
    background: '#FFF',
    position: 'absolute',
    top: '15px',
    left: '110px',
  };
  const hotcirclestyle2: CircleStyle = {
    width: '190px',
    height: '190px',
    borderRadius: '50%',
    WebkitBorderRadius: '50%',
    MozBorderRadius: '50%',
    background: '#FFF854',
    position: 'absolute',
    top: '20px',
    left: '115px',
  };
  const hotcirclestyle3: CircleStyle = {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    WebkitBorderRadius: '50%',
    MozBorderRadius: '50%',
    background: '#FFF',
    position: 'absolute',
    top: '25px',
    left: '120px',
  };
  const hottextstyle: any = {
    textAlign: 'center', // 'left', 'right', 'justify' なども選択可能
    background: '#FFF',
    fontSize: '2.0rem', // フォントサイズの指定
    // fontFamily: 'Noto Sans sans-serif',
    fontWeight: 'bold', // フォントの太さ
    color: '#FFF500', // テキストの色
    position: 'absolute',
    top: '60px',
    left: '165px',
    whiteSpace: 'pre-line',
  };

  const meatstyle = {
    position: 'absolute',
    top: '110px',
    left: '170px',
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    // 次のスライドに切り替えるロジック
    setCurrentSlide((prev) => (prev + 1) % 2); // 例: スライドが2つの場合
  };
  const handleMain = () => {
    <Link href="/"></Link>;
  };
  // コンポーネントのUI部分

  return (
    <>
      <Header name="Search" />
      {/* 特集ページ */}

      {currentSlide === 0 && (
        // スライド1のコンテンツ

        <div className="flex ml-2 items-center relative">
          <button
            onClick={handleNextSlide}
            className="absolute top-24 bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="gray"
              className="w-10 h-10 bg-transparent"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={handleNextSlide}
            className=" absolute top-24 right-0 bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="gray"
              className="w-10 h-10 bg-transparent"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <a href="/">
            <Image src={SushiSvg} alt="sushi" width={175} />
          </a>
          <a href="/" style={bestcontainerStyle}>
            <div style={bestcirclestyle1}></div>
            <div style={bestcirclestyle2}></div>
            <div style={bestcirclestyle3}></div>
            <div style={besttextstyle}>BEST{'\n'}STORE</div>
          </a>
        </div>
      )}
      {currentSlide === 1 && (
        // スライド2のコンテンツ
        <div className="flex ml-2 items-center relative">
          {/* back */}
          <button
            onClick={handleNextSlide}
            className="absolute top-24 bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="gray"
              className="w-10 h-10 bg-transparent"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          {/* next */}
          <button
            onClick={handleNextSlide}
            className=" absolute top-24 right-0 bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="gray"
              className="w-10 h-10 bg-transparent"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <a href="/">
            <Image
              onClick={handleMain}
              src={FruitSandwichSvg}
              alt="sushi"
              width={175}
            />
          </a>
          <a href="/" style={hotcontainerStyle}>
            <div style={hotcirclestyle1}></div>
            <div style={hotcirclestyle2}></div>
            <div style={hotcirclestyle3}></div>
            <div style={hottextstyle}>HOT{'\n'}STORE</div>
          </a>
        </div>
      )}

      {/* フォーム追加 */}

      <div className="shadow-md rounded-lg overflow-hidden flex items-center justify-center px-2 pb-20 mt-2">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 mx-auto ">
          {foodItems.map((item: any, index) => (
            <FoodCard
              key={index}
              name={item.name}
              imgUrl={item.imgUrl}
              genre_code={item.genre_code}
            />
          ))}
        </div>
      </div>
    </>
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
