import HeaderCard from "./HeaderCard";
import ReviewGridItem from "./ReviewGrid";
import ReviewItem from "./Reviews";
export default function Page({ params }: { params: { store_id: string } }) {
  const { store_id } = params;
  return (
    <>
      <HeaderCard data={fetch(`http://localhost:3000/api/stores/${store_id}`)} />
    </>
  );
}
