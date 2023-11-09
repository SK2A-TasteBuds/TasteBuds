export async function GET(lng: number, lat: number) {
  try {
    //get from lng lat
    const res = await fetch(
      `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ed7fda0f1bf044c0&lat=${lat}&lng=${lng}&range=3&order=4&format=json&count=100`
    );
    const data = await res.json();

    return Response.json(data.results.shop);
  } catch (error) {
    return new Response(`Error: ${error}`);
  }
}
