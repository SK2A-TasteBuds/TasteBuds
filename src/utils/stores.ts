//位置情報から店舗情報
export const getStores = async ({ lng, lat }: Coords) => {
  const res = await fetch(`/api/stores/?lng=${lng}&lat=${lat}`);
  const data = await res.json();
  console.log(data);
  return data;
};

// store_id から店舗情報
export const getStore = async (store_id: string) => {
  const res = await fetch(`/api/stores/${store_id}`);
  const data = await res.json();
  console.log(data);
  return data;
};

export const getUserKeepStore = () => {};
