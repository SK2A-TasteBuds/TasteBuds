export default function Skeleton() {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 ">
      {[...Array(10)].map((_, index) => (
        <li key={index} className="relative animate-pulse">
          <div className="aspect-square h-[100] w-full overflow-hidden rounded-lg bg-gray-300"></div>
          <p className="mt-2 h-2 w-1/2 rounded-lg bg-gray-600"></p>
          <p className="mt-2 block h-2 rounded-lg bg-gray-400 text-sm font-medium"></p>
        </li>
      ))}
    </ul>
  );
}
