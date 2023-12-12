'use client';


import { useGeolocation } from "@/contexts/GeolocationProvider";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Header from "@/app/components/Header";


export default function PageList() {
  const { location, error } = useGeolocation();
  const { data: session, status } = useSession();

  const [data, setData] = useState(null);
  interface StoreState {
    name: string,
    img: string,
    address: string
  }
  const [store, setStore] = useState<StoreState>({
    name: "ECCパフェ",
    img: "https://d1ralsognjng37.cloudfront.net/a834c4a6-4e71-4f58-8fb3-a37bd7be5559.jpeg",
    address: "中崎町"
  })
  //storeに入っているdataの要素番号
  const [showIndex,setIndex] = useState<number>(0);
  const [start,setStart] = useState<number>(1);
  useEffect(() => {
    if (location) {
      fetch(`/api/stores?lat=${location.lat}&lng=${location.lng}&start=${start}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
          setStore({
            name:data["data"][showIndex]["name"],
            img: data["data"][showIndex]["photo"],
            address:data["data"][showIndex]["address"]
          });
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [location,start]);

  // const [index,setIndex] = useState(0);
  //let imgIndex = 0;
  //店の画像を押された時の処理：storeに次の店のデータを入れる
  useEffect(() => {
    const img = document.getElementById('store-img');
    if (!img) return;
    const test = ()=>{
      nextStore(showIndex+1);
    }
    img.addEventListener('click', test)
    return () => {
      img.removeEventListener('click', test)
    }
     //画像が複数枚の時の処理
    // const ChangeImg = () =>{
    //   imgIndex++;
    //   if(imgIndex > store.imgs.length-1)imgIndex=0;
    //   show.setAttribute("src",store.imgs[imgIndex]);
    //   console.log(imgIndex);
    // }
  }, [store.img]);

  //usestateは非同期のためuseEffectでshowIndexの値が変化したのを検知してその時にstoreの値を変更している
  useEffect(()=>{
    if(!data)return;
    setStore({
      name: data["data"][showIndex]["name"],
      img: data["data"][showIndex]["photo"],
      address: data["data"][showIndex]["address"]
    });
    console.log("after" + showIndex);
  },[showIndex]);

  useEffect(()=>{
    console.log("setData");
  },[data])
  const nextStore = (i:number) => {
    //dataがないときは処理しない
    if(!data)return;

    console.log("before" + showIndex);
    setIndex(i);
    console.log(showIndex + "datas" + Object.keys(data["data"]).length);
    
    if(showIndex >= Object.keys(data["data"]).length-1){
      setIndex(0);
      //データを初期化
      setData(null);
      setStart(start+10);
    }
    
  }

  
  

  return (
    <div className='main flex flex-col overflow-hidden items-center w-full h-screen'>
      {/* <SignOutBtn /> */}

      {genre && <Header session={session} />}

      <div className='store-img relative h-[75%] w-full  overflow-hidden' id='store-img'>
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
          <p className='bg-transparent text-white'>{store.name}</p>
          <p className='bg-transparent text-white'>{store.address}</p>
        </div>
      </div>


      <div className="good-bad w-full h-1/5 flex items-center mt-3">
        <div className="object-cover w-full h-full flex justify-center">
          <div className="bad rounded-full bg-gray-400 object-cover w-2/6 h-2/5 justify-center items-center flex">
            <button className="flex" onClick={() => nextStore(showIndex+1)}>
              <img src="https://www.svgrepo.com/show/449596/thumbs-down.svg" alt="" className="bg-transparent object-cover w-full h-full m-auto" />
            </button>
          </div>
        </div>
        <div className="object-cover w-full h-full flex justify-center">
          <div className="good rounded-full bg-gray-400 object-cover w-2/6 h-2/5 justify-center items-center flex">
            <button className="flex" onClick={() => nextStore(showIndex+1)}>
              <img src="https://www.svgrepo.com/show/449597/thumbs-up.svg" alt="" className="bg-transparent object-cover w-full h-full m-auto" />

            </button>
          </div>
        </div>
      </div>
    </div>
  );
}