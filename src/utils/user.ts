import {
  doc,
  getDoc,
  query,
  where,
  collectionGroup,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "@/firebase/configs";

//get user form user session id
export const getUser = async (user_id: string) => {
  try {
    const docRef = doc(db, "users", user_id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.id, docSnap.data());
      return docSnap.data();
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting user:", error);
    // You can throw the error or handle it in some other way based on your requirements
    throw error;
  }
};

export const getUserCreatedReview = async (user_id: string) => {
  const reviewsCollectionGroup = collectionGroup(db, "reviews");

  const q = query(reviewsCollectionGroup, where("user_id", "==", user_id));

  try {
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Assuming there's only one review per user in all stores, otherwise, loop through querySnapshot.docs
      const reviewData = querySnapshot.docs[0].data();
      //console.log("Review Data:", reviewData);
      return reviewData;
    } else {
      console.log("No reviews found for the user with ID:", user_id);
      return null;
    }
  } catch (error) {
    console.error("Error getting reviews:", error);
  }
};

export const getUserKeeps = async (user_id: string) => {
  const docRef = doc(db, "users", user_id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const { keeps } = docSnap.data();
    //console.log(keeps);
    return keeps;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
};

export const addToKeeps = async (user_id: string, store_id: string) => {
  const docRef = doc(db, "users", user_id);
  try {
    const docSnap = await getDoc(docRef);
    const userData = docSnap.data();
    const keepsArray = userData?.keeps || [];
    await updateDoc(docRef, {
      keeps: arrayUnion(keepsArray, store_id),
    });

    console.log("Store added to keeps successfully!");
  } catch (error) {
    console.error("Error adding store to keeps:", error);
  }
};

export const removeFromKeeps = async (user_id: string, store_id: string) => {
  const docRef = doc(db, "users", user_id);
  try {
    await updateDoc(docRef, {
      keeps: arrayRemove(store_id),
    });
    console.log("Store removed from keeps successfully!");
  } catch (error) {
    console.error("Error removing store from keeps:", error);
  }
};
