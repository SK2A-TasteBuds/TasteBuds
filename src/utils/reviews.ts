import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/configs";
import { reviewData } from "@/types/types";

//客店舗のレビュー
export const getReviews = async (store_id: string) => {
  const q = query(collection(db, "stores", store_id, "reviews"));

  try {
    const querySnapshot = await getDocs(q);

    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });
    console.log(querySnapshot);
  } catch (error) {
    console.error("Error getting reviews:", error);
    throw error;
  }
};

//レビュー投稿
export const postReview = async (reviewData: reviewData, store_id: string) => {
  const reviewsCollectionRef = collection(db, "stores", store_id, "reviews");

  try {
    // Generate a new review ID
    const newReviewDocRef = doc(reviewsCollectionRef);

    // Add the new review to the reviews collection
    await setDoc(newReviewDocRef, reviewData);

    console.log("Review added successfully:", newReviewDocRef.id);
    return newReviewDocRef.id;
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
};
