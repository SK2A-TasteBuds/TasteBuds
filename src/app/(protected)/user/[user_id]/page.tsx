import List from "./List";

function UserPage({ params }: { params: { user_id: string } }) {
  console.log(params);
  return (
    <>
      <List />
    </>
  );
}

export default UserPage;
