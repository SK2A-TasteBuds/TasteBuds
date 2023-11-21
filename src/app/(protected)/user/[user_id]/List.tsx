import Image from "next/image";
import Link from "next/link";
function ListItem(props: any) {
  const { id, photo, desc, name } = props;

  return (
    <div className=' max-w-[200px] md:max-w-lg rounded-xl overflow-hidden shadow-sm border mt-7'>
      <Link href={`/stores/${id}`}>
        <Image
          className=' w-full h-36 lg:h-80'
          width={320}
          height={320}
          src={photo}
          alt='Store pciture'
        />
      </Link>
      <div className='py-2 '>
        <div className='font-extrabold text-sm text-center truncate my-1'>{name}</div>
      </div>

      <div className='flex items-center justify-around p-2'>
        <div className='rounded-full'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-8 h-8  bg-slate-400 rounded-full'
          >
            <path
              fillRule='evenodd'
              d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <div className=''>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-8 h-8 p-1 bg-red-500 rounded-full text-white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function List({ items }: { items: any }) {
  return (
    <div className='flex items-center justify-center px-2 pb-20'>
      <div className=' grid grid-cols-2 md:grid-cols-3 gap-1 mx-auto '>
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
