"use client";

import { useGeolocation } from "@/contexts/GeolocationProvider";
import { useSession } from "next-auth/react";
import SignOutBtn from "../components/SignOutBtn";
import { useEffect,useState } from "react";

export default function Main() {
  const { location, error } = useGeolocation();
  const { data: session, status } = useSession();
  // const [store_img,setImg] = useState("https://crea.ismcdn.jp/mwimgs/9/3/1200wm/img_93abdd5347237682a14cf050f2e2a6bd74395.jpg");
  // let sources = [
  //   "https://crea.ismcdn.jp/mwimgs/9/3/1200wm/img_93abdd5347237682a14cf050f2e2a6bd74395.jpg",
  //   "https://www.masale.jp/images/lineup/salonmenu/parfait2020spring.jpg",
  //   "https://okayama-parfait.com/wp/wp-content/uploads/2021/07/38678dd047770dc7c5e843ae786d97af-scaled.jpg",
  //   "https://rimage.gnst.jp/rest/img/grdtt21e0000/s_0n8x.jpg?t=1508901389"
  // ];
  const [store,setStore] = useState({
    name:"ECCパフェ",
    imgs:[
      "https://crea.ismcdn.jp/mwimgs/9/3/1200wm/img_93abdd5347237682a14cf050f2e2a6bd74395.jpg",
      "https://www.masale.jp/images/lineup/salonmenu/parfait2020spring.jpg",
      "https://okayama-parfait.com/wp/wp-content/uploads/2021/07/38678dd047770dc7c5e843ae786d97af-scaled.jpg",
      "https://rimage.gnst.jp/rest/img/grdtt21e0000/s_0n8x.jpg?t=1508901389"
    ],
    address:"中崎町"
  })
  // const [index,setIndex] = useState(0);
  let imgIndex = 0;
  useEffect(()=>{
    const img = document.getElementById('store-img');
    const show = document.getElementById('show-img');
    if(!img || !show)return;
    console.log("ok");
    const ChangeImg = () =>{
      imgIndex++;
      if(imgIndex > store.imgs.length-1)imgIndex=0;
      show.setAttribute("src",store.imgs[imgIndex]);
      console.log(imgIndex);
    }
    img.addEventListener('click',ChangeImg )
    return()=>{
      img.removeEventListener('click',ChangeImg)
    }
  },[store.imgs]);
  const nextStore = (sName:string,sImgs:string[],sAddress:string)=>{
    //仮
    setStore({
      name:sName,
      imgs:sImgs,
      address:sAddress
    })
    document.getElementById('show-img')?.setAttribute("src",store.imgs[0]);
    imgIndex = 0;
  }
  return (
    <div className='main flex flex-col overflow-hidden items-center w-full h-screen'>
      {/* <SignOutBtn /> */}
      <div className='store-img relative h-[75%] w-full  overflow-hidden' id="store-img">
        <div className='swipe flex '>
          <div className='object-cover block h-full w-[20px] bg-[#ffc7b7] rounded-md absolute z-10 left-[90%]'></div>
          <div className='object-cover block h-full w-[20px] bg-[#fe9477] rounded-md absolute z-10 left-[88%]'></div>
          <img
            src="https://crea.ismcdn.jp/mwimgs/9/3/1200wm/img_93abdd5347237682a14cf050f2e2a6bd74395.jpg"
            alt='店舗画像'
            className='object-cover w-[90%] h-full absolute z-10 rounded-md'
            id="show-img"
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
                [
                  "https://nikuzou.jp/blog/wp-content/uploads/2021/07/unnamed-1.jpg",
                  "https://prtimes.jp/i/30283/28/ogp/d30283-28-979529-0.jpg",
                  "https://static.retrip.jp/article/112117/images/11211742e8e32e-a5dd-482f-bd13-229e03835115_l.jpg"
                ],
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
                [
                  "https://nikuzou.jp/blog/wp-content/uploads/2021/07/unnamed-1.jpg",
                  "https://prtimes.jp/i/30283/28/ogp/d30283-28-979529-0.jpg",
                  "https://static.retrip.jp/article/112117/images/11211742e8e32e-a5dd-482f-bd13-229e03835115_l.jpg"
                ],
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