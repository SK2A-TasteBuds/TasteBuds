'use client';

import { useGeolocation } from '@/contexts/GeolocationProvider';
import { useSession } from 'next-auth/react';
import SignOutBtn from '../components/SignOutBtn';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import thumbs_up from '@/assets/svg/thumbs-up.svg';
import thumbs_down from '@/assets/svg/thumbs-down.svg';
import { addToKeeps } from '@/utils/user';
import Card from '@/app/components/cards/card'

export default function Main(request: any) {
  const { location, error } = useGeolocation();
  const { data: session, status } = useSession();
  console.log(session?.user);
  const genre = request.searchParams['genre_code'];

  const [data, setData] = useState(null);
  interface StoreState {
    name: string;
    img: string;
    address: string;
    id: string;
  }
  const [store, setStore] = useState<StoreState>({
    name: 'ECCパフェ',
    img: 'https://d1ralsognjng37.cloudfront.net/a834c4a6-4e71-4f58-8fb3-a37bd7be5559.jpeg',
    address: '中崎町',
    id: 'Store_id',
  });

  //storeに入っているdataの要素番号
  const [showIndex, setIndex] = useState<number>(0);
  const [start, setStart] = useState<number>(1);
  let url = `/api/stores?lat=${location?.lat}&lng=${location?.lng}&start=${start}`;
  if (genre) url += `&genre=${genre}`;

  useEffect(() => {
    if (location) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
          setStore({
            name: data['data'][showIndex]['name'],
            img: data['data'][showIndex]['photo'],
            address: data['data'][showIndex]['address'],
            id: data['data'][showIndex]['id'],
          });
          console.log(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [location, start]);

  useEffect(() => {
    const img = document.getElementById('store-img');
    if (!img) return;
    const test = () => {
      nextStore(showIndex + 1);
    };
    img.addEventListener('click', test);
    return () => {
      img.removeEventListener('click', test);
    };
  }, [store.img]);

  //usestateは非同期のためuseEffectでshowIndexの値が変化したのを検知してその時にstoreの値を変更している
  useEffect(() => {
    if (!data) return;
    setStore({
      name: data['data'][showIndex]['name'],
      img: data['data'][showIndex]['photo'],
      address: data['data'][showIndex]['address'],
      id: data['data'][showIndex]['id'],
    });
    console.log('after', showIndex);
  }, [showIndex]);

  const nextStore = (i: number) => {
    //dataがないときは処理しない
    if (!data) return;

    console.log('before', showIndex);
    setIndex(i);
    console.log(showIndex, 'datas', Object.keys(data['data']).length);

    if (showIndex >= Object.keys(data['data']).length - 1) {
      //データを初期化
      setIndex(0);
      setData(null);
      setStart(start + 10);
    }
  };

  const handleAddToKeeps = async () => {
    console.log(session?.user.id);
    console.log(store.id);
    const user_id = session?.user.id;
    const store_id = store.id;
    addToKeeps(user_id, store_id);
  };

  return (
    
    <div className="main flex flex-col overflow-hidden items-center w-full h-screen">
      {/* <SignOutBtn /> */}
      <Card store={store}/>

      <div className="good-bad w-full h-1/8 flex items-center mt-3 mx-auto">
        <div className="bad rounded-full bg-transparent object-cover  justify-center items-center flex mx-auto">
          <button
            className="flex shadow-lg px-2 py-1  bg-transparent text-lg text-white font-semibold rounded-full bg-gradient-to-t from-transparent to-blue-100"
            onClick={() => nextStore(showIndex + 1)}
          >
            <Image
              src={thumbs_down}
              alt=""
              className="bg-transparent object-cover w-full h-full m-auto"
            />
          </button>
        </div>

        <div className="good rounded-full bg-transparent object-cover w-2/6 h-2/5 justify-center items-center flex">
          <button
            className="flex shadow-lg px-2 py-1  bg-transparent text-lg text-white font-semibold rounded-full bg-gradient-to-t from-transparent to-red-100"
            onClick={() => {
              nextStore(showIndex + 1);
              handleAddToKeeps();
            }}
          >
            <Image
              src={thumbs_up}
              alt=""
              className="bg-transparent object-cover w-full h-full m-auto"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
