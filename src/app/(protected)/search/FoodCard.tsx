import React from 'react';
import Link from 'next/link';
// import dining_img from "@/assets/img/dining.jpg"
// import izakaya_img from "@/assets/img/izakaya.svg"
// import create_img from "@/assets/img/create.jpg"
// import wasyoku_img from "@/assets/img/wasyoku.svg"
// import yousyoku_img from "@/assets/img/yousyoku.svg"
// import italian_img from "@/assets/img/italian.svg"
// import tyuuka_img from "@/assets/img/tyuuka.svg"
// import yakiniku_img from "@/assets/img/yakiniku.svg"
// import korean_img from "@/assets/img/korean.svg"
// import asia_img from "@/assets/img/asia.jpg"
// import country_img from "@/assets/img/country.svg"
// import karaoke_img from "@/assets/img/karaoke.svg"
// import bar_img from "@/assets/img/bar.svg"
// import ramen_img from "@/assets/img/ramen.svg"
// import okonomiyaki_img from "@/assets/img/okonomiyaki.jpg"
// import cafe_img from "@/assets/img/cafe.svg"
// import other_img from "@/assets/img/other.svg"
const create =
  'https://media.istockphoto.com/id/1765140558/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E9%B6%8F%E8%82%89%E3%81%A8%E3%81%95%E3%81%A4%E3%81%BE%E3%81%84%E3%82%82%E3%81%A8%E3%82%8C%E3%82%93%E3%81%AE%E3%83%90%E3%82%BF%E3%83%BC%E7%82%92%E3%82%81%E3%81%A8%E9%86%A4%E6%B2%B9.webp?b=1&s=170667a&w=0&k=20&c=XUDmRyi7igncLZQ6oaPo9hjJeghy05QsrmflrEcSNHw=';

function FoodCard({ name }: { name: string }) {
  return (
    <Link href="/genreFlick">
      <div className="food-card relative box">
        <img
          className="rounded-lg ... w-full h-auto object-cover"
          src={create}
        ></img>
        <p className="rounded-lg absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-50 text-black font-bold text-xs">
          #{name}
        </p>
        {/* その他のUI要素 */}
      </div>
    </Link>
  );
}

export default FoodCard;
