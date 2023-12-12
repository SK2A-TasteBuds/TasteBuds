
'use client'

import { useRouter } from 'next/navigation';
import { Session } from 'next-auth';
import { genreData } from '../api/genre/genre_data'; // genre_data.tsへの正しいパスに置き換えてください

interface HeaderProps {
  session: Session | null;
  genreCode: string; // ジャンルコードを受け取るための引数
}

function Header({ session, genreCode }: HeaderProps) {
  const router = useRouter();

  // ジャンル名を格納する変数
  let genre_name = '未定義';

  // forループを使用してジャンルコードに基づくジャンル名を検索
  for (const genre of genreData) {
    if (genre.genre_code === genreCode) {
      genre_name = genre.name;
      break; // 一致するジャンル名が見つかったらループを終了
    }
  }

  const goBack = () => {
    router.back();
  };

  return (
    <div className="flex justify-between items-center">
      <button className='absolute left-0' onClick={goBack}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
        </svg>
      </button>
      <div className="text-center flex-grow">#{genre_name}</div> {/* ジャンル名を表示 */}
    </div>
  );
}

export default Header;
