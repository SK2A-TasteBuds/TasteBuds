import { Store } from '@/types/types';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { store_id: string } }
) {
  const id = params.store_id; //

  const res = await fetch(
    `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ed7fda0f1bf044c0&id=${id}&format=json`
  );
  const data = await res.json();

  const filteredData: Store | {} = data.results.shop
    ? {
        id: data.results.shop[0].id,
        name: data.results.shop[0].name,
        name_kana: data.results.shop[0].name_kana,
        address: data.results.shop[0].address,
        lng: data.results.shop[0].lng,
        lat: data.results.shop[0].lat,
        genre: {
          name: data.results.shop[0].genre.name,
          catch: data.results.shop[0].genre.catch,
          code: data.results.shop[0].genre.code,
        },
        budget: {
          code: data.results.shop[0].budget.code,
          name: data.results.shop[0].budget.name,
          average: data.results.shop[0].budget.average,
        },
        open: data.results.shop[0].open,
        close: data.results.shop[0].close,
        catch: data.results.shop[0].catch,
        photo: data.results.shop[0].photo.pc.l,
      }
    : {};

  return NextResponse.json(filteredData);
}
