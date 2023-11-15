import Link from "next/link";

function NavBtn({ user_id }: { user_id: string }) {
  return (
    <div className='p-2 max-w-lg w-full flex items-center justify-center mx-auto '>
      <Link
        href={`/user/${user_id}/keeps`}
        className='rounded-md border border-transparent px-3 py-1.5 text-base text-center font-semibold bg-orange-500  w-1/2 sticky top-28'
      >
        Keeps
      </Link>
      <Link
        href={`/user/${user_id}/likes`}
        className='rounded-md border border-transparent px-3 py-1.5 text-base text-center font-semibold bg-orange-500  w-1/2 sticky top-28'
      >
        likes
      </Link>
    </div>
  );
}

export default NavBtn;
