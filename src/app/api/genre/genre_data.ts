// pages/api/genres.ts

import { Genre } from '@/types/types';

// Import the TypeScript interface

// Example data, replace with your actual data or database query
export const genreData: Genre[] =  [
    
		{
			"imgUrl": "https://firebasestorage.googleapis.com/v0/b/hazel-mote-361706.appspot.com/o/genre%2F0.jpg?alt=media&token=7505a8ba-f861-4686-9dd5-1d55eb842cb5",
			"name": "居酒屋",
			"genre_code": "G001"
		},
		{
			"imgUrl": "https://firebasestorage.googleapis.com/v0/b/hazel-mote-361706.appspot.com/o/genre%2F1.jpg?alt=media&token=8fbab0bd-a2d6-48e4-989b-5ffd38931ffd",
			"name": "ダイニングバー・バル",
			"genre_code": "G002"
		},
		{
			"imgUrl": "https://firebasestorage.googleapis.com/v0/b/hazel-mote-361706.appspot.com/o/genre%2F2.jpg?alt=media&token=68f2b095-4a54-4a6a-86cb-ad90de6165cf",
			"name": "創作料理",
			"genre_code": "G003"
		},
		{
			"imgUrl": "https://firebasestorage.googleapis.com/v0/b/hazel-mote-361706.appspot.com/o/genre%2F3.jpg?alt=media&token=da9d12bd-fa72-400a-812b-6f57d2ddbb2d",
			"name": "和食",
			"genre_code": "G004"
		},
		{
			"imgUrl": "https://firebasestorage.googleapis.com/v0/b/hazel-mote-361706.appspot.com/o/genre%2F4.jpg?alt=media&token=dcb7a6f3-d70e-4e21-a960-f34882cef1b8",
			"name": "洋食",
			"genre_code": "G005"
		},
		{
			"imgUrl": "https://firebasestorage.googleapis.com/v0/b/hazel-mote-361706.appspot.com/o/genre%2F5.jpg?alt=media&token=1a67d33d-a46c-4b9c-b523-668585cb3343",
			"name": "イタリアン・フレンチ",
			"genre_code": "G006"
		},
		{
			"imgUrl": "https://firebasestorage.googleapis.com/v0/b/hazel-mote-361706.appspot.com/o/genre%2F6.jpg?alt=media&token=d27acdcd-e302-430b-87c7-0f167ee3d662",
			"name": "中華",
			"genre_code": "G007"
		},
		{
			"imgUrl": "https://firebasestorage.googleapis.com/v0/b/hazel-mote-361706.appspot.com/o/genre%2F7.jpg?alt=media&token=2d3fa944-8b40-4dec-91e7-4d1c25838f31",
			"name": "焼肉・ホルモン",
			"genre_code": "G008"
		},
		{
			"imgUrl": "https://firebasestorage.googleapis.com/v0/b/hazel-mote-361706.appspot.com/o/genre%2F8.jpg?alt=media&token=cc5a1b3b-fa8a-49dc-b0f1-348ab47a7a71",
			"name": "韓国料理",
			"genre_code": "G017"
		},
		{
			"imgUrl": "https://firebasestorage.googleapis.com/v0/b/hazel-mote-361706.appspot.com/o/genre%2F9.jpg?alt=media&token=a3cf5d5d-c8e8-45b2-b3c2-3b86078818e7",
			"name": "アジア・エスニック料理",
			"genre_code": "G009"
		},
		{
			"imgUrl": "https://firebasestorage.googleapis.com/v0/b/hazel-mote-361706.appspot.com/o/genre%2F10.jpg?alt=media&token=43566857-f88e-4b9c-b3fb-d6a09d65872b",
			"name": "各国料理",
			"genre_code": "G010"
		},
		{
			"imgUrl": "https://firebasestorage.googleapis.com/v0/b/hazel-mote-361706.appspot.com/o/genre%2F11.jpg?alt=media&token=7611d95a-aa25-4f2e-83c3-1ee06160076d",
			"name": "カラオケ・パーティ",
			"genre_code": "G011"
		},
		{
			"imgUrl": "https://firebasestorage.googleapis.com/v0/b/hazel-mote-361706.appspot.com/o/genre%2F12.jpg?alt=media&token=f347477a-c8ba-4bde-96a8-fd0c8a2a11be",
			"name": "バー・カクテル",
			"genre_code": "G012"
		},
		{
			"imgUrl": "https://firebasestorage.googleapis.com/v0/b/hazel-mote-361706.appspot.com/o/genre%2F13.jpg?alt=media&token=0ea92fb5-2bf5-4905-a22f-10c4b720127a",
			"name": "ラーメン",
			"genre_code": "G013"
		},
		{
			"imgUrl": "https://firebasestorage.googleapis.com/v0/b/hazel-mote-361706.appspot.com/o/genre%2F14.jpg?alt=media&token=fa934ab3-a2db-40b8-b77d-606c9104e671",
			"name": "お好み焼き・もんじゃ",
			"genre_code": "G016"
		},
		{
			"imgUrl": "https://firebasestorage.googleapis.com/v0/b/hazel-mote-361706.appspot.com/o/genre%2F15.jpg?alt=media&token=e6a303d1-0180-400b-a3c8-ea40afe00657",
			"name": "カフェ・スイーツ",
			"genre_code": "G014"
		},
		{
			"imgUrl": "https://firebasestorage.googleapis.com/v0/b/hazel-mote-361706.appspot.com/o/genre%2F16.jpg?alt=media&token=fc69e23f-73a7-4405-a539-a22870b8155e",
			"name": "その他グルメ",
			"genre_code": "G015"
		}
  ];
