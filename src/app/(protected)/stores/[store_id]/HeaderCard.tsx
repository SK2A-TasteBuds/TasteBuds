import Image from "next/image";

async function Headercard({ data }: { data: Promise<Response> }) {
  const store = await data.then((res) => res.json());
  console.log(store.photo);
  const photo = store.photo;
  return (
    <div>
      <div className=' flex flex-col md:flex-row items-center justify-center bg-blue-100  px-2 py-4'>
        <Image
          src={photo}
          alt={store.name}
          height={320}
          width={320}
          priority={true}
          className='rounded-lg '
        />
        <div className='w-full'>
          <p>{store.name}</p>
          <p>{store.catch}</p>
          <p>{store.genre.name}</p>
          <p>{store.budget.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Headercard;
