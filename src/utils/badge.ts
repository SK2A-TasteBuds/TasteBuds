import { db } from '@/firebase/configs';
import { collection, query, where, getDocs, doc } from 'firebase/firestore';

//badge -Like/Bad%  投稿数 保存

export const getLikeRatio = async (store_id: string) => {
  const q = query(
    collection(db, 'stores', store_id, 'reviews'),
    where('like', '==', true)
  );

  try {
    const querySnapshot = await getDocs(q);
    const likeCount = querySnapshot.size; // Count of reviews where 'like' is true

    const allReviewsQuery = query(
      collection(db, 'stores', store_id, 'reviews')
    );
    const allReviewsSnapshot = await getDocs(allReviewsQuery);
    const totalReviews = allReviewsSnapshot.size; // Total number of reviews

    // Calculate like ratio
    const likeRatio = totalReviews > 0 ? (likeCount / totalReviews) * 100 : 0;

    console.log(`Like Ratio for Store ${store_id}: ${likeRatio}%`);
    return likeRatio;
  } catch (error) {
    console.error(`Error getting like ratio for Store ${store_id}:`, error);
    throw error;
  }
};
