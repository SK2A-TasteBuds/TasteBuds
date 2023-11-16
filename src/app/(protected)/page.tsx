"use client";

import { useGeolocation } from "@/contexts/GeolocationProvider";
import { useSession } from "next-auth/react";
import SignOutBtn from "../components/SignOutBtn";

export default function Main() {
  const { location, error } = useGeolocation();
  const { data: session, status } = useSession();

  return (
    <div className='main flex flex-col overflow-hidden items-center w-full h-screen'>
      <SignOutBtn />
      <div className='store-img relative h-3/5 w-4/5  overflow-hidden'>
        <div className='swipe flex '>
          <div className='object-cover block h-full w-[20px] bg-[#ffc7b7] rounded-md absolute z-10 left-[245px]'></div>
          <div className='object-cover block h-full w-[20px] bg-[#fe9477] rounded-md absolute z-10 left-[235px]'></div>
          <img
            src='https://crea.ismcdn.jp/mwimgs/9/3/1200wm/img_93abdd5347237682a14cf050f2e2a6bd74395.jpg'
            alt='店舗画像'
            className='object-cover w-4/5 h-full absolute z-10 rounded-md'
          />
        </div>

        <div className='absolute bottom-20 left-10  p-2 bg-transparent z-20'>
          <p className='bg-transparent'>ECCパフェ</p>
          <p className='bg-transparent'>中崎町</p>
        </div>
      </div>
    </div>
  );
}