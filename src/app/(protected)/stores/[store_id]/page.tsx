import HeaderCard from './HeaderCard';
import Reviews from './Reviews';
import ReviewGrid from './ReviewGrid';

type PageProps = {
  params: { store_id: string };
};

export default function Page({ params }: PageProps) {
  const { store_id } = params;
  return (
    <section className='overflow-y-scroll h-screen overscroll-none'>
      <HeaderCard data={fetch(`http://localhost:3000/api/stores/${store_id}`)} />
      <ReviewGrid store_id={store_id} />
      <Reviews store_id={store_id} />
    </section>
  );
}
