import { NextResponse } from 'next/server';
import { genreData } from './genre_data';

export async function GET() {

  return NextResponse.json(genreData);

}
