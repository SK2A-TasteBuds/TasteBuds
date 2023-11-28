import Frame from '@/app/components/modal/Frame';
import Modal from '@/app/components/modal/Modal';

export default function PhotoPage({
  params,
}: {
  params: { store_id: string; reviewId: string };
}) {
  const { store_id, reviewId } = params;
  console.log('@modal', store_id, reviewId);
  return (
    <Modal>
      <Frame reviewId={reviewId} store_id={store_id} />
    </Modal>
  );
}
