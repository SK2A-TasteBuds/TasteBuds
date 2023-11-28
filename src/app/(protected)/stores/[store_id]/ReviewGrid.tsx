import Image from 'next/image';
import Link from 'next/link';
import { getReviewsWithImages } from '@/utils/reviews';

function ReviewGridItem(props: any) {
  const { image, store_id, reviewId } = props;

  return (
    <>
      <Link href={`/stores/${store_id}/reviewItem/${reviewId}`}>
        <div className="mx-auto  max-w-sm w-full transform overflow-hidden  bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg ">
          <Image
            width={400}
            height={400}
            className=" w-full md:max-h-80 max-h-48 object-cover object-center"
            src={image}
            alt="Product Image"
          />
        </div>
      </Link>
    </>
  );
}

async function ReviewGrid({ store_id }: { store_id: string }) {
  // fetch data here
  const res = await getReviewsWithImages(store_id);

  const reviewsList = res.map((item, index) => (
    <ReviewGridItem key={index} {...item} index={index} store_id={store_id} />
  ));

  return (
    <>
      <h1 className="max-w-3xl px-2 ">Reviews</h1>
      <div className="grid grid-cols-3 gap-0 mx-auto max-w-3xl p-2 ">
        {reviewsList}
      </div>
    </>
  );
}

export default ReviewGrid;
