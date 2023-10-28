import {signOut, useSession} from 'next-auth/react';
import { Redirect } from 'next'; 

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="text-5xl bg-orangePrimary text-white">Primary</h1>
      
    </main>
  );
}
