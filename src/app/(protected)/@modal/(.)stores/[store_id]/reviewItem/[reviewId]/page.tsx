import Frame from '@/app/components/modal/Frame';
import Modal from '@/app/components/modal/Modal';

export default function PhotoPage({
  params,
}: {
  params: { reviewId: string };
}) {
  const { reviewId } = params;
  console.log('@modal', reviewId);
  return (
    <Modal>
      <Frame />
    </Modal>
  );
}
