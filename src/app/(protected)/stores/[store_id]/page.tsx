import HeaderCard_2 from "./HeaderCard";
import Reviews from "./Reviews";
import ReviewGrid from "./ReviewGrid";
export default function Page({ params }: { params: { store_id: string } }) {
  const { store_id } = params;
  return (
    <section className="overflow-y-scroll h-screen overscroll-none">
      <HeaderCard_2
        data={fetch(`http://localhost:3000/api/stores/${store_id}`)}
      />
      <ReviewGrid store_id={store_id} />
      <Reviews store_id={store_id} />
    </section>
  );
}
