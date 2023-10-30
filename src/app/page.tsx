"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signIn");
    },
  });

  if (!session.data?.user) {
    return <div>Loading...</div>;
  }
  console.log(session.data);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-5xl bg-orangePrimary text-white">Home Page</h1>
      <p>{session.data.user.email}</p>
      <button
        className="border-orangePrimary border-2 m-2"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </main>
  );
}

Home.requireAuth = true;
