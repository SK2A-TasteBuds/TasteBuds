import { getUserReviewStore } from "@/utils/stores";
import List from "../List";

async function page() {
  const data = await getUserReviewStore("Z5FaMtK2wqNnskIcgfQPxC5nspc2");
  return (
    <>
      <h1>Likes page</h1>
      <List items={data} />
    </>
  );
}

export default page;
