import Image from "next/image";

async function Headercard({ data }: { data: Promise<Response> }) {
  const store = await data.then((res) => res.json());
  console.log(store.photo);
  const photo = store.photo;
  return (
    <div>
      <div className=" flex flex-col md:flex-row items-center justify-center bg-blue-100  px-2 py-4">
        <Image
          src={photo}
          alt={store.name}
          height={320}
          width={320}
          priority={true}
          className="rounded-lg "
        />
        <div className="w-full">
          <p>{store.name}</p>
          <p>{store.catch}</p>
          <p>{store.genre.name}</p>
          <p>{store.budget.name}</p>
        </div>
      </div>
    </div>
  );
}

async function HeaderCard_2({ data }: { data: Promise<Response> }) {
  const store = await data.then((res) => res.json());
  return (
    <div className="mx-auto mt-11 max-w-sm w-full md:max-w-xl transform overflow-hidden rounded-lg bg-whiteshadow-md duration-300 hover:scale-105 hover:shadow-lg border shadow-xl ">
      <Image
        className="h-60 w-full object-cover object-center rounded-2xl"
        src={store.photo}
        height={320}
        width={320}
        priority={true}
        alt="Product Image"
      />
      <div className="p-4 m-1">
        <h3 className="text-xs">{store.genre.name}</h3>
        <h2 className=" text-lg font-bold text-gray-900">{store.name}</h2>
        <p className=" text-sm text-gray-700 py-1">{store.catch}</p>
        <div className="flex py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-yellow-500"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9.624 7.084a.75.75 0 00-1.248.832l2.223 3.334H9a.75.75 0 000 1.5h2.25v1.5H9a.75.75 0 000 1.5h2.25v1.5a.75.75 0 001.5 0v-1.5H15a.75.75 0 000-1.5h-2.25v-1.5H15a.75.75 0 000-1.5h-1.599l2.223-3.334a.75.75 0 10-1.248-.832L12 10.648 9.624 7.084z"
              clipRule="evenodd"
            />
          </svg>
          <p className=" text-base font-semibold text-gray-900 ">
            {store.budget.name}
          </p>
        </div>

        <p className="text-xs font-light text-gray-400 pl-1">
          {store.budget.average}
        </p>
        <div className="flex py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 fill-red-400"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>

          <p className="text-base font-medium">{store.address}</p>
        </div>
      </div>
    </div>
  );
}
export default HeaderCard_2;
