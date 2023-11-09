export async function GET() {
  const res = await fetch(
    "https://webservice.recruit.co.jp/hotpepper/genre/v1/?key=ed7fda0f1bf044c0&format=json"
  );
  const data = await res.json();

  return Response.json(data.results.genre);
}
