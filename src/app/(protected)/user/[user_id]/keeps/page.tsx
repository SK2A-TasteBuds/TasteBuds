import List from "../List";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUserKeepStore } from "@/utils/stores";

async function page() {
  const res = await getUserKeepStore("Z5FaMtK2wqNnskIcgfQPxC5nspc2");
  //const data = res.json();
  const items = [
    {
      id: 0,
      title: "Keep_01",
      imgUrl:
        "https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore sunt rem iusto amet, odio delectus aut dolorem quas architecto perspiciatis in nesciunt fugiat a! Nam aspernatur sapiente similique nulla iure?",
    },
  ];

  return (
    <>
      <h1>Keep page</h1>
      <List items={items} />
    </>
  );
}

export default page;
