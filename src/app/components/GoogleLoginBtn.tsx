'use client';
import Image from 'next/image';
import googleIcon from '@/assets/svg/googleIcon.svg';
import { signIn } from 'next-auth/react';

export const GoogleLoginBtn = () => {
  const handleGoogleSignIn = async () => {
    const result = await signIn('google', { callbackUrl: '/' });
  };

  return (
    <button
      className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indorangeigo-400 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-orange-500 "
      onClick={() => handleGoogleSignIn()}
    >
      <Image
        src={googleIcon}
        alt="My SVG"
        width={24}
        height={24}
        className="bg-inherit mx-2"
      />
      Continue with Google
    </button>
  );
};

export default GoogleLoginBtn;
