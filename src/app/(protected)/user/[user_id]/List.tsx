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
        <p className="text-gray-700 truncate">{desc}</p>
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
