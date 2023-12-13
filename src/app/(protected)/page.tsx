'use client';

import { useGeolocation } from '@/contexts/GeolocationProvider';
import { useSession } from 'next-auth/react';
import { useEffect, useState, useMemo, createRef, useRef } from 'react';
import { addToKeeps } from '@/utils/user';
import Card from '@/app/components/cards/card';
import { Store } from '@/types/types';
import TinderCard from 'react-tinder-card';

export default function Main(request: any) {
  const { location, error } = useGeolocation();
  const { data: session, status } = useSession();
  const genre = request.searchParams['genre_code'];

  const [data, setData] = useState<Store[] | null>(null);
  const [store, setStore] = useState<Store | null>(null);

  const [showIndex, setIndex] = useState<number>(0);
  const [start, setStart] = useState<number>(1); // for fetching

  let url = `/api/stores?lat=${location?.lat}&lng=${location?.lng}&start=${start}`;
  if (genre) url += `&genre=${genre}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (location) {
          const response = await fetch(url);
          const responseData = await response.json();

          setData(responseData['data']);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]); // Set data to an empty array or handle the error accordingly
      }
    };

    fetchData();
  }, [location, url]);

  useEffect(() => {
    if (!data) return;
    setStore(data[showIndex]);
  }, [showIndex, data]);

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
  console.log('data', data);
  const handleAddToKeeps = async () => {
    if (session && store) {
      console.log(session.user.id);
      console.log(store.id);
      const user_id = session.user.id;
      const store_id = store.id;
      addToKeeps(user_id, store_id);
    }
  };

  return (
    <div className="main flex flex-col overflow-hidden items-center w-full h-screen">
      <Card store={store} />
      <div className="flex items-center justify-around p-2 max-w-md w-full">
        <button
          className="rounded-full"
          onClick={() => {
            nextStore(showIndex + 1);
          }}
        >
          <svg
            width="27"
            height="24"
            viewBox="0 0 27 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10  bg-zinc-400 rounded-full"
          >
            <path
              d="M4.9998 10.1111L4.61679 10.445L4.23376 10.1111L4.61679 9.77715L4.9998 10.1111ZM22.8748 17.6666C22.8748 17.9274 22.6322 18.1388 22.3331 18.1388C22.034 18.1388 21.7915 17.9274 21.7915 17.6666L22.8748 17.6666ZM10.0335 15.1672L4.61679 10.445L5.38281 9.77715L10.7995 14.4993L10.0335 15.1672ZM4.61679 9.77715L10.0335 5.05493L10.7995 5.72275L5.38281 10.445L4.61679 9.77715ZM4.9998 9.63884L15.8331 9.63884L15.8331 10.5833L4.9998 10.5833L4.9998 9.63884ZM22.8748 15.7777L22.8748 17.6666L21.7915 17.6666L21.7915 15.7777L22.8748 15.7777ZM15.8331 9.63884C19.7221 9.63884 22.8748 12.3873 22.8748 15.7777L21.7915 15.7777C21.7915 12.9089 19.1239 10.5833 15.8331 10.5833L15.8331 9.63884Z"
              fill="#FFF8F8"
            />
          </svg>
        </button>
        <button
          className="rounded-full"
          onClick={() => {
            nextStore(showIndex + 1);
            handleAddToKeeps();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 p-1 bg-[#FE724C] rounded-full text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
