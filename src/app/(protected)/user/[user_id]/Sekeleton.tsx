export default function Skeleton() {
  return (
    <div className="flex items-center justify-center px-2 pb-20">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 mx-auto">
        {[...Array(10)].map((_, index) => (
          <div
            role="status"
            className="max-w-sm md:max-w-lg  animate-pulse"
            key={index}
          >
            <div className="flex items-center justify-center h-64 w-64 bg-gray-300 rounded"></div>
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
            <p className="mt-2 h-2 w-1/2 rounded-lg bg-gray-600"></p>
            <p className="mt-2 block h-2 rounded-lg bg-gray-400 text-sm font-medium"></p>
          </div>
        ))}
      </div>
    </div>
  );
}
