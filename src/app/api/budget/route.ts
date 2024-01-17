import { NextResponse } from 'next/server';

export async function GET() {
  const url =
    'https://webservice.recruit.co.jp/hotpepper/budget/v1/?key=ed7fda0f1bf044c0&format=json';
  const res = await fetch(url);
  const data = await res.json();
  const { budget } = data.results;

  return NextResponse.json(budget);
}
