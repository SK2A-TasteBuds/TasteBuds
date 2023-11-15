import List2 from "../List2";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUserKeepStore } from "@/utils/stores";

async function page() {
  const data = await getUserKeepStore("Z5FaMtK2wqNnskIcgfQPxC5nspc2");
  //console.log(data);

  return (
    <>
      <h1>Keep page</h1>

      <List2 items={data} />
    </>
  );
}

export default page;
