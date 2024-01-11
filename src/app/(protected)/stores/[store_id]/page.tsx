import HeaderCard from './HeaderCard';
import Reviews from './Reviews';
import ReviewGrid from './ReviewGrid';
import Link from 'next/link';
import { getReviewCount, getLikeRatio } from '@/utils/badge';

type PageProps = {
  params: { store_id: string };
};

export default function Page({ params }: PageProps) {
  const { store_id } = params;
  getReviewCount(store_id);
  getLikeRatio(store_id);
  return (
    <section className="overflow-y-scroll h-screen overscroll-none pb-20">
      <HeaderCard
        data={fetch(`http://localhost:3000/api/stores/${store_id}`)}
      />
      <Link href={`/stores/${store_id}/postReview`}>
        <p className="text-white border-black border bg-orange-500  text-center m-5">
          レビューを投稿する
        </p>
      </Link>
      <ReviewGrid store_id={store_id} />
      <Reviews store_id={store_id} />
    </section>
  );
}
