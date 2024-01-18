import { Store } from '@/types/types';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  console.log('Location API was HIT !');
  const { searchParams } = new URL(request.url);
  //budget=B008&keyword=エビ&range=4
  const lng = searchParams.get('lng');
  const lat = searchParams.get('lat');
  const start = searchParams.get('start');
  const genre = searchParams.get('genre');
  const budget = searchParams.get('budget');
  const keyword = searchParams.get('keyword');
  const range = searchParams.get('range');

  let url = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ed7fda0f1bf044c0&lat=${lat}&lng=${lng}&start=${start}&range=3&order=4&format=json`;

  if (genre) url += `&genre=${genre}`;
  if (budget) url += `&budget=${budget}`;
  if (keyword) url += `&keyword=${keyword}`;
  if (range) url += `&range=${range}`;

  console.log(url);

  const res = await fetch(url);
  const data = await res.json();
  const filteredData = data.results.shop //if data.results.shop map else empty arr
    ? data.results.shop.map((item: Store) => ({
        id: item.id,
        name: item.name,
        name_kana: item.name_kana,
        address: item.address,
        lng: item.lng,
        lat: item.lat,
        station: item.station,
        genre: item.genre,
        budget: item.budget,
        open: item.open,
        close: item.close,
        catch: item.catch,
        photo: item.photo.pc.l,
      }))
    : [];

  return NextResponse.json({ data: filteredData });
}
