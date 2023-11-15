import List from "../List";

async function page() {
  const items = [
    {
      id: 0,
      title: "Likes",
      imgUrl:
        "https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore sunt rem iusto amet, odio delectus aut dolorem quas architecto perspiciatis in nesciunt fugiat a! Nam aspernatur sapiente similique nulla iure?",
    },
  ];

  return (
    <>
      <h1>Likes page</h1>
      <List items={items} />
    </>
  );
}

export default page;
