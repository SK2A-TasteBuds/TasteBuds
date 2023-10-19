import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="text-5xl bg-orangePrimary text-white">Primary</h1>
      <h2 className="text-3xl bg-orangeSecondary text-black">Secondary</h2>
      <h3 className="text-xl bg-orangeAccent text-black">Accent</h3>
    </main>
  );
}
