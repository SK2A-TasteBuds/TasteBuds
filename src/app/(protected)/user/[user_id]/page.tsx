function UserPage({ params }: { params: { user_id: string } }) {
  return (
    <>
      <p>{JSON.stringify(params)}</p>
    </>
  );
}

export default UserPage;
