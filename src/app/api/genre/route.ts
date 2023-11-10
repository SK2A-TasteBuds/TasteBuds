import { NextResponse } from "next/server";

type Genre = {
  name: string;
};

export async function GET() {
  const res = await fetch(
    "https://webservice.recruit.co.jp/hotpepper/genre/v1/?key=ed7fda0f1bf044c0&format=json"
  );
  const data = await res.json();
  const filteredData = data.results.genre.map((item: Genre) => ({
    name: item.name,
  }));

  return NextResponse.json(filteredData);
}
