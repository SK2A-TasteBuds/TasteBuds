import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  DocumentData,
} from 'firebase/firestore';
import { db } from '@/firebase/configs';
import { reviewData } from '@/types/types';

export const getReviews = async (store_id: string): Promise<DocumentData[]> => {
  const q = query(collection(db, 'stores', store_id, 'reviews'));
  const reviewsData: DocumentData[] = [];

  try {
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      reviewsData.push(doc.data());
    });

    return reviewsData;
  } catch (error) {
    console.error('Error getting reviews:', error);
    throw error;
  }
};

export const getReviewsWithNoImages = async (
  store_id: string
): Promise<DocumentData[]> => {
  const q = query(
    collection(db, 'stores', store_id, 'reviews'),
    where('image', '==', '')
  );

  const reviewsData: DocumentData[] = [];

  try {
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      reviewsData.push(doc.data());
    });

    return reviewsData;
  } catch (error) {
    console.error('Error getting reviews with images:', error);
    throw error;
  }
};

export const getReviewsWithImages = async (
  store_id: string
): Promise<DocumentData[]> => {
  const q = query(
    collection(db, 'stores', store_id, 'reviews'),
    where('image', '!=', '')
  );

  const reviewsData: DocumentData[] = [];

  try {
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      reviewsData.push(doc.data());
    });

    return reviewsData;
  } catch (error) {
    console.error('Error getting reviews with images:', error);
    throw error;
  }
};

export const getReviewFromId = async (store_id: string, reviewId: string) => {
  try {
    const reviewsCollection = collection(db, 'stores', store_id, 'reviews');

    const querySnapshot = await getDocs(
      query(reviewsCollection, where('reviewId', '==', reviewId))
    );

    if (querySnapshot.empty) {
      console.log('null');
      return null; // No matching documents
    }

    const reviewData = querySnapshot.docs[0].data();
    return reviewData;
  } catch (error) {
    console.error('Error fetching review:', error);
    throw error;
  }
};

//レビュー投稿
export const postReview = async (reviewData: reviewData, store_id: string) => {
  const reviewsCollectionRef = collection(db, 'stores', store_id, 'reviews');

  try {
    // Generate a new review ID
    const newReviewDocRef = doc(reviewsCollectionRef);

    // Add the new review to the reviews collection
    await setDoc(newReviewDocRef, reviewData);

    console.log('Review added successfully:', newReviewDocRef.id);
    return newReviewDocRef.id;
  } catch (error) {
    console.error('Error adding review:', error);
    throw error;
  }
};
