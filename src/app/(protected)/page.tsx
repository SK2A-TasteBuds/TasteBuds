'use client';

import { useGeolocation } from '@/contexts/GeolocationProvider';
import { useSession } from 'next-auth/react';
import { useEffect, useState, useMemo, createRef, useRef } from 'react';
import { addToKeeps } from '@/utils/user';
import TinderCard from 'react-tinder-card';
import React from 'react';
import Image from 'next/image';
import MainSkeleton from '../components/MainSkeleton';
import Header from '../components/HeaderBar';
import MainFilter from '../components/MainFilter';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export default function Main(request: any) {
  const { location, error } = useGeolocation();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });
  const genre = request.searchParams['genre_code'];
  const budget = request.searchParams['budget'];
  const keyword = request.searchParams['keyword'];
  const range = request.searchParams['range'];

  console.log(session);

  const [data, setData] = useState<any[] | null>(null);
  const [store, setStore] = useState<any | null>(null);

  const [showIndex, setIndex] = useState<number>(0);
  const [start, setStart] = useState<number>(1); // for fetching

  let url = `/api/stores?lat=${location?.lat}&lng=${location?.lng}&start=${start}`;
  if (genre) url += `&genre=${genre}`;
  if (budget) url += `&budget=${budget}`;
  if (keyword) url += `&keyword=${keyword}`;
  if (range) url += `&range=${range}`;

  console.log(url);

  //locationかurlが変動した時の処理
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (location) {
          const response = await fetch(url);
          const responseData = await response.json();

          if (responseData['data'] && responseData['data'].length > 0) {
            setData(responseData['data']);
          } else {
            setData([]); // Set data to an empty array
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]); // Set data to an empty array or handle the error accordingly
      }
    };

    fetchData();
  }, [location, url]);

  //showindexが変動した時の処理
  useEffect(() => {
    if (!data) return;
    setStore(data[showIndex]);
  }, [showIndex]);

  //test
  useEffect(() => {
    console.log('data', data);
    if (data) {
      console.log(data[0]);
    }
  }, [data]);

  //現在のdataに入っている次の店
  const nextStore = (i: number) => {
    if (!data) return;
    setIndex(i);
    if (showIndex >= data.length - 1) {
      setIndex(0);
      setData(null);
      setStart(start + 10);
    }
    console.log('index', i);
  };

  const handleAddToKeeps = async () => {
    if (session && store) {
      console.log(session.user.id);
      console.log(store.id);
      const user_id = session.user.id;
      const store_id = store.id;
      addToKeeps(user_id, store_id);
      // revalidatePath('/users/${user_}')
    }
  };

  //react tinder card
  const showIndexRef = useRef(showIndex);

  const childRefs = useMemo<any>(
    () =>
      Array(data?.length)
        .fill(0)
        .map((i) => React.createRef()),
    [data?.length]
  );

  const onSwipe = async (direction: string) => {
    console.log('swiped ' + direction, showIndex);
    if (direction === 'right') {
      handleAddToKeeps();
    }
    await childRefs[showIndex].current.swipe(direction);
  };

  //タッチでスワイプされたとき
  const onSwiped = (direction: string) => {
    if (direction === 'right') {
      handleAddToKeeps();
    }
  };
  return (
    <div className="flex flex-col overflow-hidden items-center justify-start w-full h-screen">
      <Header name="Home" />
      <MainFilter />

      {data === null ? (
        <MainSkeleton />
      ) : (
        <div
          style={{ height: '428px' }}
          className="relative max-w-md w-full overflow-hidden flex justify-center mt-5  p-4 my-2 "
        >
          {data
            ?.slice()
            .reverse()
            .map((store, index) => (
              <TinderCard
                ref={childRefs[9 - index]}
                key={9 - index}
                onSwipe={(dir) => onSwiped(dir)}
                onCardLeftScreen={() => nextStore(9 - index + 1)}
                className={`absolute z-${-index} object-cover w-full `}
              >
                <Image
                  src={store.photo}
                  alt="store_img"
                  className="h-72 w-full rounded-xl md:h-72 lg:h-80 "
                  width={320}
                  height={320}
                  priority
                />

                <div className="py-4 max-w-md w-full">
                  <div className="flex justify-between ">
                    <h3 className="text-xs">{store.genre?.name}</h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 fill-orange-500"
                    >
                      {/* SVG path here */}
                    </svg>
                  </div>
                  <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                    {store.name}
                  </p>
                  <p className="mb-3 text-xs font-normal text-gray-700 ">
                    {store.address}
                  </p>
                </div>
              </TinderCard>
            ))}
        </div>
      )}

      <div className="flex items-center justify-around max-w-md w-full  pt-2">
        <button
          className="rounded-full"
          onClick={() => {
            onSwipe('left');
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-14 h-14 rounded-full bg-zinc-400 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <button
          className="rounded-full"
          onClick={() => {
            onSwipe('right');
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-14 h-14 rounded-full bg-yellow-400 text-white p-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
