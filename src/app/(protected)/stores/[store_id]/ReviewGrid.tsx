import Image from "next/image";
function ReviewGridItem() {
  return (
    <div className='mx-auto  max-w-sm w-full transform overflow-hidden  bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg'>
      <Image
        width={400}
        height={400}
        className=' w-full max-h-80 object-cover object-center'
        src='https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        alt='Product Image'
      />
    </div>
  );
}

function ReviewGrid() {
  // fetch data here
  const reviewsList = Array.from({ length: 6 }, (_, index) => <ReviewGridItem key={index} />);

  return (
    <>
      <div className='grid grid-cols-3 gap-0 mx-auto max-w-3xl '>{reviewsList}</div>
    </>
  );
}

export default ReviewGrid;
