import Image from "next/image";
import Link from "next/link";
function ListItem(props: any) {
  const { id, photo, desc, name } = props;

  return (
    <div className=' max-w-[200px] md:max-w-lg rounded-xl overflow-hidden shadow-sm border mx-1 my-1'>
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
            width='27'
            height='24'
            viewBox='0 0 27 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 bg-zinc-400 rounded-full'
          >
            <path
              d='M4.9998 10.1111L4.61679 10.445L4.23376 10.1111L4.61679 9.77715L4.9998 10.1111ZM22.8748 17.6666C22.8748 17.9274 22.6322 18.1388 22.3331 18.1388C22.034 18.1388 21.7915 17.9274 21.7915 17.6666L22.8748 17.6666ZM10.0335 15.1672L4.61679 10.445L5.38281 9.77715L10.7995 14.4993L10.0335 15.1672ZM4.61679 9.77715L10.0335 5.05493L10.7995 5.72275L5.38281 10.445L4.61679 9.77715ZM4.9998 9.63884L15.8331 9.63884L15.8331 10.5833L4.9998 10.5833L4.9998 9.63884ZM22.8748 15.7777L22.8748 17.6666L21.7915 17.6666L21.7915 15.7777L22.8748 15.7777ZM15.8331 9.63884C19.7221 9.63884 22.8748 12.3873 22.8748 15.7777L21.7915 15.7777C21.7915 12.9089 19.1239 10.5833 15.8331 10.5833L15.8331 9.63884Z'
              fill='#FFF8F8'
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
            className='w-8 h-8 p-1 bg-[#FE724C] rounded-full text-white'
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
