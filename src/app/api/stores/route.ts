import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log("Location API was HIT !");
  const { searchParams } = new URL(request.url);
  const lng = searchParams.get("lng");
  const lat = searchParams.get("lat");

  const res = await fetch(
    `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ed7fda0f1bf044c0&lat=${lat}&lng=${lng}&range=3&order=4&format=json`
  );
  const data = await res.json();

  return NextResponse.json({ data });
}
