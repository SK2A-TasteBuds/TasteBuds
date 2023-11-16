import Image from "next/image";
import Link from "next/link";
function ListItem(props: any) {
  const { id, photo, desc, name } = props;

  return (
    <div className=" max-w-xs rounded-xl overflow-hidden shadow-sm border  ">
      <Link href={`/store/${id}`}>
        <Image
          className="w-full"
          width={320}
          height={320}
          src={photo}
          alt="Sunset in the mountains"
        />
      </Link>
      <div className="p-2 bg-blue-200">
        <div className="font-bold truncate my-1">{name}</div>
      </div>

      <div className="flex items-center justify-center">
        <button className="w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 bg-blue-200 "
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button className="w-1/2 ml-28">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 bg-blue-200 text-red-500"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function List({ items }: { items: any }) {
  return (
    <div className="flex items-center justify-center px-2 pb-20">
      <div className=" grid grid-cols-2 md:grid-cols-3 gap-1 mx-auto ">
        {items.map((item: any, index: number) => (
          <ListItem
            key={index}
            photo={item.photo}
            desc={item.catch}
            name={item.name}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
