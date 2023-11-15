import { Coords } from "@/types/types";
import { getUserKeeps } from "@/utils/user";

//位置情報から店舗情報
export const getStores = async ({ lng, lat }: Coords) => {
  const res = await fetch(
    `http://localhost:3000/api/stores/?lng=${lng}&lat=${lat}`
  );
  const data = await res.json();
  //console.log(data);
  return data;
};

// store_id から店舗情報
export const getStore = async (store_id: string) => {
  const res = await fetch(`http://localhost:3000/api/stores/${store_id}`);
  const data = res.json();
  console.log(data);
  return data;
};

export const getUserKeepStore = async (user_id: string) => {
  try {
    const user_keeps = await getUserKeeps(user_id);

    if (user_keeps) {
      // user_keeps is an array of store IDs
      const storePromises = user_keeps.map(async (store_id) => {
        const storeData = await getStore(store_id); // use fetch instead
        // console.log(`Store Data for ${store_id}:`, storeData);
        // Do something with storeData, e.g., display it or process it further
        return storeData;
      });
    } else {
      console.log("No keeps for the user.");
    }
  } catch (error) {
    console.error("Error fetching user keeps or store data:", error);
    // Handle the error as needed
  }
};
