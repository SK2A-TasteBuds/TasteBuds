function ListItem(props: any) {
  const { id, photo, desc, name } = props;

  return (
    <div className='max-w-xs  max-h-fit  rounded-xl overflow-hidden shadow-sm border  '>
      <img className='w-full max-h-40 ' src={photo} alt='Sunset in the mountains' />
      <div className='p-2 h-1/2 bg-blue-200'>
        <div className='font-bold text-xl mb-2'>{name}</div>
        <p className='text-gray-700 text-base truncate ...'>{desc}</p>
      </div>
    </div>
  );
}

function List2({ items }: { items: any }) {
  return (
    <div className='flex items-center justify-center pb-20'>
      <div className=' grid grid-cols-2 md:grid-cols-3 gap-2 mx-auto '>
        {items.map((item: any, index: number) => (
          <ListItem key={index} photo={item.photo} desc={item.catch} name={item.name} />
        ))}
      </div>
    </div>
  );
}

export default List2;
