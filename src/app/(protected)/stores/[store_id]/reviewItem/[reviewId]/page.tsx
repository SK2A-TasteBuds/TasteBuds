import Frame from '@/app/components/modal/Frame';

export default function PhotoPage({
  params,
}: {
  params: { store_id: string; reviewId: string };
}) {
  const { store_id, reviewId } = params;
  console.log(store_id, reviewId);
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Frame reviewId={reviewId} store_id={store_id} />
      </div>
    </div>
  );
}
