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
