'use client';

import { useRouter } from 'next/navigation';

function Header({ name }: { name: string }) {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className="flex justify-between items-center">
      <button className="absolute left-0" onClick={goBack}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
      </button>
      <div className="text-center flex-grow">#{name}</div>
    </div>
  );
}

export default Header;
