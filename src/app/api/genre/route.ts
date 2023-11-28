import { Genre } from '@/types/types';
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const images: string[] = [];
  const imageDirectory = path.join(process.cwd(), 'src/assets/img');
  const imageFilenames = await fs.readdir(imageDirectory);

  // Map filenames to full paths
  const imagePaths = imageFilenames.map((filename) =>
    path.join(imageDirectory, filename)
  );

  images.push(...imagePaths); // Spread the array into the images array
  console.log(images);
  const result: any[] = [];
  const res = await fetch(
    'https://webservice.recruit.co.jp/hotpepper/genre/v1/?key=ed7fda0f1bf044c0&format=json'
  );
  const data = await res.json();

  const genre = data.results.genre;
  for (let i = 0; i < genre.length; i++) {
    result.push({ name: genre[i].name, image: images[i] });
  }

  return NextResponse.json(result);
}
