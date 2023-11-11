import { NextResponse } from "next/server";

export async function GET() {
  const result: string[] = [];
  const res = await fetch(
    "https://webservice.recruit.co.jp/hotpepper/genre/v1/?key=ed7fda0f1bf044c0&format=json"
  );
  const data = await res.json();

  data.results.genre.map((item: Genre) => {
    result.push(item.name);
  });

  return NextResponse.json(result);
}
