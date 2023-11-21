"use client";

import { useGeolocation } from "@/contexts/GeolocationProvider";
import { useSession } from "next-auth/react";
import SignOutBtn from "../components/SignOutBtn";
import { useEffect,useState } from "react";


export default function Main() {
  const { location, error } = useGeolocation();
  const { data: session, status } = useSession();
  
  const [store,setStore] = useState({
    name:"ECCパフェ",
    img:"https://d1ralsognjng37.cloudfront.net/a834c4a6-4e71-4f58-8fb3-a37bd7be5559.jpeg",
    address:"中崎町"
  })
  // const [index,setIndex] = useState(0);
  let imgIndex = 0;
  let show:HTMLElement|null;
  useEffect(()=>{
    const img = document.getElementById('store-img');
    show = document.getElementById('show-img');
    if(!img || !show)return;
    console.log("ok");
    //画像が複数枚の時の処理
    // const ChangeImg = () =>{
    //   imgIndex++;
    //   if(imgIndex > store.imgs.length-1)imgIndex=0;
    //   show.setAttribute("src",store.imgs[imgIndex]);
    //   console.log(imgIndex);
    // }
    const ChangeStore = ()=>{
      nextStore("ECC焼肉","https://nikuzou.jp/blog/wp-content/uploads/2021/07/unnamed-1.jpg","大阪梅田");
    }
    img.addEventListener('click',ChangeStore )
    return()=>{
      img.removeEventListener('click',ChangeStore)
    }
  },[store.img]);
  const nextStore = (sName:string,sImgs:string,sAddress:string)=>{
    //仮
    setStore({
      name:sName,
      img:sImgs,
      address:sAddress
    });
    
      
  }
  return (
    <div className='main flex flex-col overflow-hidden items-center w-full h-screen'>
      {/* <SignOutBtn /> */}
      <div className='store-img relative h-[75%] w-full  overflow-hidden' id="store-img">
        <div className='swipe flex '>
          <div className='object-cover block h-full w-[20px] bg-[#ffc7b7] rounded-md absolute z-10 left-[90%]'></div>
          <div className='object-cover block h-full w-[20px] bg-[#fe9477] rounded-md absolute z-10 left-[88%]'></div>
          <img
            src={store.img}
            alt='店舗画像'
            className='object-cover w-[90%] h-full absolute z-10 rounded-md'
            id="show-img"
            loading="lazy"
          />
          
        </div>


        <div className='absolute bottom-20 left-10  p-2 bg-transparent z-20'>
          <p className='bg-transparent'>{store.name}</p>
          <p className='bg-transparent'>{store.address}</p>
        </div>
      </div>

      <div className="good-bad w-full h-1/5 flex items-center mt-3">
        <div className="object-cover w-full h-full flex justify-center">
          <div className="bad rounded-full bg-gray-400 object-cover w-2/6 h-2/5 justify-center items-center flex">
            <button className="flex"
              onClick={()=>nextStore(
                "ECCラーメン",
                "https://d1ralsognjng37.cloudfront.net/a834c4a6-4e71-4f58-8fb3-a37bd7be5559.jpeg",
                "東京"
              )}
            >
              <img src="https://www.svgrepo.com/show/449596/thumbs-down.svg" alt="" className="bg-transparent object-cover w-full h-full m-auto"/>
            </button>
          </div>
        </div>
        <div className="object-cover w-full h-full flex justify-center">
          <div className="good rounded-full bg-gray-400 object-cover w-2/6 h-2/5 justify-center items-center flex">
            <button className="flex" 
              onClick={()=>nextStore(
                "ECC焼肉",
                "https://nikuzou.jp/blog/wp-content/uploads/2021/07/unnamed-1.jpg",
                "梅田"
              )}
            >
              <img src="https://www.svgrepo.com/show/449597/thumbs-up.svg" alt="" className="bg-transparent object-cover w-full h-full m-auto"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}