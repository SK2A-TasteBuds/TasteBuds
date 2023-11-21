"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBtn({ user_id }: { user_id: string }) {
  const pathname = usePathname();
  return (
    <div className='p-2 max-w-4xl w-full flex items-center justify-center gap-2 mx-auto sticky top-[112px] '>
      <Link
        href={`/user/${user_id}/keeps`}
        className={` border-b-4 px-3 py-1.5  text-base text-center font-semibold  w-1/2 ${
          pathname === `/user/${user_id}/keeps` ? "border-orange-400" : "border-none "
        }  `}
      >
        Keeps
      </Link>
      <Link
        href={`/user/${user_id}/likes`}
        className={` border-b-4 px-3 py-1.5  text-base text-center font-semibold  w-1/2  ${
          pathname === `/user/${user_id}/likes` ? "border-orange-400" : "border-none"
        }  `}
      >
        likes
      </Link>
    </div>
  );
}

export default NavBtn;
