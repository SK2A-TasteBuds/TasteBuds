type Coords = {
  lng: Number;
  lat: Number;
};
export const getStore = async ({ lng, lat }: Coords) => {
  const res = await fetch(`/api/stores/?lng=${lng}&lat=${lat}`);
  const data = await res.json();
  console.log(data);
  return data;
};
