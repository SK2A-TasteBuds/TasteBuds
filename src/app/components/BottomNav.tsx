'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';

function BottomNav({ session }: { session: Session | null }) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: _session, status } = useSession();
  const user_id = session?.user.id;

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className=" fixed z-50 w-full h-12 max-w-xs -translate-x-1/2 bottom-4 left-1/2  rounded-full border ">
      <div className=" flex justify-center h-full max-w-sm  mx-auto  rounded-full shadow-xl ">
        <button
          onClick={() => handleNavigation('/')}
          className={`inline-flex flex-col items-center justify-center px-5 group border-b-4 ${
            pathname === '/' ? 'border-orange-400' : 'border-none'
          } `}
          id="home-nav"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-6 h-6 text-zinc-400 ${
              pathname === '/' ? 'fill-orange-400' : 'fill-current'
            }`}
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
        </button>

        <button
          onClick={() => handleNavigation('/search')}
          type="button"
          className={`inline-flex flex-col items-center justify-center px-5 group border-b-4 ${
            pathname === '/search' ? 'border-orange-400' : 'border-none'
          } `}
          id="search-nav"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 text-zinc-400  ${
              pathname === '/search' ? 'stroke-orange-400' : 'stroke-current'
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>

        <button
          onClick={() => handleNavigation(`/map/${user_id}`)}
          className={`inline-flex flex-col items-center justify-center px-5 group border-b-4 ${
            pathname === `/map/${user_id}` ? 'border-orange-400' : 'border-none'
          } `}
          id="map-nav"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-6 h-6 text-zinc-400  ${
              pathname === `/map/${user_id}`
                ? 'fill-orange-400'
                : 'fill-current'
            }`}
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button
          onClick={() => handleNavigation(`/user/${session?.user.name}/keeps`)}
          className={`inline-flex flex-col items-center justify-center px-5 group border-b-4 ${
            pathname === `/user/${session?.user.name}/keeps` ||
            pathname === `/user/${session?.user.name}/likes`
              ? 'border-orange-400'
              : 'border-none'
          } `}
          id="user-nav"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-6 h-6 text-zinc-400  ${
              pathname === `/user/${session?.user.name}/keeps` ||
              pathname === `/user/${session?.user.name}/likes`
                ? 'fill-orange-400'
                : 'fill-current'
            }`}
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default BottomNav;
