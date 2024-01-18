'use client';
import { signIn } from 'next-auth/react';
import type { SignInResponse } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { GoogleLoginBtn } from '@/app/components/GoogleLoginBtn';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignIn = async () => {
    const result: SignInResponse | undefined = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result && 'status' in result && result.status === 200 && result.ok) {
      router.push('/');
    } else {
      console.log('error : ', result);
    }
  };

  return (
    <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm rounded-lg shadow px-6 py-8 mx-auto ">
      <div className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-black"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="example@email.com"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full rounded-md border bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:outline-1 sm:text-sm sm:leading-6 p-2"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-black"
            >
              Password
            </label>
            <div className="text-sm">
              <div
                onClick={() => console.log('forgot-password')}
                className="cursor-pointer font-semibold text-orange-400 hover:text-orange-300"
              >
                Forgot password?
              </div>
            </div>
          </div>

          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full rounded-md border bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:outline-1 sm:text-sm sm:leading-6 p-2"
            />
          </div>
        </div>

        <div>
          <button
            onClick={() => handleSignIn()}
            disabled={!email || !password}
            className="disabled:opacity-40 flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 "
          >
            Login
          </button>
        </div>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-8 bg-gray-400 border-0 dark:bg-gray-700"></hr>
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 g-gray-400 left-1/2">
            or
          </span>
        </div>
        <GoogleLoginBtn />
      </div>
      <p className="mt-10 text-center text-sm text-gray-400">
        Not a member?{' '}
        <button
          onClick={() => router.push('register')}
          className="font-semibold leading-6 text-orange-400 hover:text-orange-300"
        >
          Register
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
