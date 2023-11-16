import HeaderCard from "./Headercard";
import ReviewGridItem from "./ReviewGrid";
import ReviewItem from "./Reviews";
export default function Page({ params }: { params: { store_id: string } }) {
  const { store_id } = params;
  return (
    <>
      store id {store_id}
      <HeaderCard />
      <ReviewGridItem />
      <ReviewItem />
    </>
  );
}
