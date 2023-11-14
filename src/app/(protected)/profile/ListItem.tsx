function ListItem(props: any) {
  const { imgUrl, title, desc } = props;

  return (
    <div className='max-w-xs  max-h-fit md:max-w-md rounded-xl  overflow-hidden shadow-sm border '>
      <img className='w-full max-h-min ' src={imgUrl} alt='Sunset in the mountains' />
      <div className='p-2 h-1/2 bg-blue-200'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-700 text-base truncate ...'>{desc}</p>
      </div>
    </div>
  );
}

export default ListItem;
