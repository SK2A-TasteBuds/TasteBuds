import HeaderCard from './HeaderCard';
import Reviews from './Reviews';
import ReviewGrid from './ReviewGrid';
import Link from 'next/link';
import PageMotion from '@/app/components/PageMotion';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Header from '@/app/components/HeaderBar';
import { getReviewCount, getLikeRatio } from '@/utils/badge';
import { redirect } from 'next/navigation';

type PageProps = {
  params: { store_id: string };
};

export default async function Page({ params }: PageProps) {
  const session: Session | null = await getServerSession(authOptions);
  const { store_id } = params;
  const reviewCount = await getReviewCount(store_id);
  const ratio = await getLikeRatio(store_id);
  if (!session) {
    redirect('/login');
  }

  return (
    <PageMotion>
      <Header name="Store" />
      <section className="overflow-y-scroll h-screen overscroll-none pb-20">
        <HeaderCard
          data={fetch(`http://localhost:3000/api/stores/${store_id}`)}
          ratio={ratio}
          reviewCount={reviewCount}
        />
        <Link href={`/stores/${store_id}/postReview`}>
          <p className="text-white border-black border bg-orange-500  text-center m-5">
            レビューを投稿する
          </p>
        </Link>
        <ReviewGrid store_id={store_id} />
        <Reviews store_id={store_id} />
      </section>
    </PageMotion>
  );
}
