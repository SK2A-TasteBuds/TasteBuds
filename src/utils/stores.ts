import { Coords, Store } from "@/types/types";
import { getUserKeeps } from "@/utils/user";

//位置情報から店舗情報
export const getStores = async ({ lng, lat }: Coords) => {
  const res = await fetch(`http://localhost:3000/api/stores/?lng=${lng}&lat=${lat}`);
  const data = await res.json();
  //console.log(data);
  return data;
};

// store_id から店舗情報
export const getStore = async (store_id: string) => {
  const res = await fetch(`http://localhost:3000/api/stores/${store_id}`);
  const data = res.json();
  //console.log(data);
  return data;
};

export const getUserKeepStore = async (user_id: string) => {
  try {
    const result: Store[] = [];
    const user_keeps = await getUserKeeps(user_id);

    if (user_keeps.length >= 1) {
      // Use Promise.all to await multiple asynchronous operations concurrently
      const storePromises = user_keeps.map(async (item: string) => {
        const response = await fetch(`http://localhost:3000/api/stores/${item}`);
        const store = await response.json();
        return store;
      });

      // Wait for all promises to resolve
      result.push(...(await Promise.all(storePromises)));
    }

    return result;
  } catch (error) {
    console.error("Error fetching user keeps or store data:", error);
    // Handle the error as needed
    throw error; // Rethrow the error to propagate it to the caller
  }
};
