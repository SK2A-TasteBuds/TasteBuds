'use client';
import { useSession, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';

const SignOutBtn = () => {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });
  return (
    <button
      onClick={() => signOut()}
      className="px-2 py-1 border border-red-700 rounded-lg bg-red-500 text-white font-bold cursor-pointer"
    >
      Sign Out
    </button>
  );
};

export default SignOutBtn;
