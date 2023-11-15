async function getData() {
  const res = await fetch("http://localhost:3000/api/genre");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  console.log(res);
  return res.json();
}
async function Search() {
  const data = await getData();
  console.log(data);
  return (
    <div>
      Search page
      {data.map((item: string, index: number) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default Search;
