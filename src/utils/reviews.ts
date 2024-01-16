import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  DocumentData,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { db, storage } from '@/firebase/configs';
import { reviewData } from '@/types/types';
import { Timestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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
export const postReview = async (
  reviewData: reviewData,
  store_id: string,
  imageFile: File | null
) => {
  try {
    const storageRef = ref(
      storage,
      `review_images/${store_id}/${new Date().toISOString()}`
    );

    let imageUrl = '';

    if (imageFile) {
      // Upload the image to Firebase Storage
      await uploadBytes(storageRef, imageFile);
      imageUrl = await getDownloadURL(storageRef);
    }

    // Add the new review to the reviews collection
    const reviewsCollectionRef = collection(db, 'stores', store_id, 'reviews');
    const newReviewDocRef = doc(reviewsCollectionRef);

    // Add the review ID and created_at field to reviewData
    const reviewWithTimestamp = {
      ...reviewData,
      image: imageUrl,
      reviewId: newReviewDocRef.id,
      created_at: Timestamp.now(),
    };

    await setDoc(newReviewDocRef, reviewWithTimestamp);

    // Update the review counter
    await updateReviewCounter(store_id);

    console.log('Review added successfully:', newReviewDocRef.id);
    return newReviewDocRef.id;
  } catch (error) {
    console.error('Error adding review:', error);
    throw error;
  }
};

const updateReviewCounter = async (store_id: string) => {
  const counterRef = doc(db, 'stores', store_id);
  const counterDoc = await getDoc(counterRef);

  if (!counterDoc.exists()) {
    // If counter document doesn't exist, create it with initial count 1
    await setDoc(counterRef, { review_count: 1 });
  } else {
    // If counter document exists, update the count
    const currentCount = counterDoc.data().count;
    await updateDoc(counterRef, { review_count: currentCount + 1 });
  }
};
