import { Store } from "@/types/types";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { store_id: string } }
) {
  const id = params.store_id; //
  console.log(id);

  const res = await fetch(
    `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ed7fda0f1bf044c0&id=${id}&format=json`
  );
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

  return NextResponse.json(filteredData);
}
