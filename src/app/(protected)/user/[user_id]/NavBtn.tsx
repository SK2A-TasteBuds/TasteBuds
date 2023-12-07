'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavBtn({ user_id }: { user_id: string }) {
  const pathname = usePathname();
  return (
    <div className="p-2 max-w-4xl w-full flex items-center justify-center gap-2 mx-auto sticky top-[112px] z-20 ">
      <Link
        href={`/user/${user_id}/keeps`}
        className={` border-b-4 px-3 py-1.5  text-base text-center font-semibold  w-1/2 ${
          pathname === `/user/${user_id}/keeps`
            ? 'border-orange-400'
            : 'border-none '
        }  `}
      >
        <div className="flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-amber-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>

          <p> Keeps</p>
        </div>
      </Link>
      <Link
        href={`/user/${user_id}/likes`}
        className={` border-b-4 px-3 py-1.5  text-base text-center font-semibold  w-1/2  ${
          pathname === `/user/${user_id}/likes`
            ? 'border-orange-400'
            : 'border-none'
        }  `}
      >
        <div className="flex items-center justify-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 4.34243C10.0007 1.84731 6.65975 1.07622 4.1547 3.36099C1.64964 5.64577 1.29697 9.46578 3.2642 12.168C4.89982 14.4147 9.84979 19.1532 11.4721 20.6869C11.6536 20.8585 11.7443 20.9443 11.8502 20.978C11.9426 21.0073 12.0437 21.0073 12.1361 20.978C12.242 20.9443 12.3327 20.8585 12.5142 20.6869C14.1366 19.1532 19.0865 14.4147 20.7221 12.168C22.6894 9.46578 22.3797 5.62174 19.8316 3.36099C17.2835 1.10025 13.9993 1.84731 12 4.34243Z"
              stroke="#FE724C"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p> Likes</p>
        </div>
      </Link>
    </div>
  );
}

export default NavBtn;
