'use client';
import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { postReview } from '@/utils/reviews';
import { addToLikes, removeFromKeeps } from '@/utils/user';
import { reviewData } from '@/types/types';
import { useRouter, redirect } from 'next/navigation';

function Home({ params }: { params: { store_id: string } }) {
  const router = useRouter();
  const { store_id } = params;
  const { data } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null); // Create a file input ref

  const [reviewContent, setReviewContent] = useState<string>('');
  const [toggleLike, setToggleLike] = useState<string>('like'); //btn toggle
  const [likeData, setLikeData] = useState<boolean>(true); // data toggle
  const [store_name, setstoreName] = useState<string>('');

  fetch(`/api/stores/${store_id}`)
    .then((response) => response.json())
    .then((data) => {
      const name = data.name; // JSONデータから'name'プロパティを取得
      setstoreName(name); // ステートを直接更新
    })
    .catch((error) => console.error(error));

  const handleLikeButtonClick = () => {
    setToggleLike('like');
    setLikeData(true);
  };

  const handleDislikeButtonClick = () => {
    setToggleLike('dislike');
    setLikeData(false);
  };

  const onFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const fileObject = e.target.files[0];
    // You can handle the file input change if needed
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log('submit');
    const user_name = data?.user.name;
    const user_image = data?.user.image;
    const user_id = data?.user.id;
    const like = likeData;
    const image = '';
    const comment = reviewContent;
    const imageFile = fileInputRef.current?.files?.[0] || null; // Access the file input ref to get the selected file

    const reviewData: reviewData = {
      user_name: user_name || '',
      user_img: user_image || '',
      user_id: user_id || '',
      like: like,
      image: '', // Empty string for now, get the URL after uploading
      comment: comment || '',
    };

    console.log(reviewData);

    try {
      const reviewId = await postReview(reviewData, store_id, imageFile);
      await addToLikes(user_id, store_id);
      await removeFromKeeps(user_id, store_id);
      console.log('Review ID:', reviewId);
      router.push(`/stores/${store_id}`);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="flex min-h-full  flex-col justify-center items-start px-6 py-12 lg:px-8 ">
      <div className="text-center">{store_name}</div>
      <p className="inline-flex items-center mr-3 py-2 text-sm text-gray-900  font-semibold">
        <Image
          width={120}
          height={120}
          className="mr-2 w-6 h-6 rounded-full"
          src={data?.user.image}
          alt="User Image"
        />
        {data?.user.name}
      </p>
      <form>
        <div className="flex max-w-3xl w-full py-2">
          <button
            type="button"
            className={`w-1/2  border-b-4 ${
              toggleLike === 'like' ? 'border-orange-400' : 'border-none'
            } `}
            onClick={handleLikeButtonClick}
          >
            like
          </button>
          <button
            type="button"
            className={`w-1/2  border-b-4 ${
              toggleLike === 'dislike' ? 'border-orange-400' : 'border-none'
            }`}
            onClick={handleDislikeButtonClick}
          >
            dislike
          </button>
        </div>
        <div>Review</div>
        <MyTextareaComponent
          value={reviewContent}
          onChange={(e) => setReviewContent(e.target.value)}
        />
        <div className="flex flex-col items-start justify-start py-2">
          <input
            type="file"
            accept="image/*"
            onChange={onFileInputChange}
            ref={fileInputRef}
            className=""
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={handleSubmit}
          >
            投稿する
          </button>
        </div>
      </form>
    </div>
  );
}

interface MyTextareaProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const MyTextareaComponent: React.FC<MyTextareaProps> = ({
  value,
  onChange,
}) => {
  return (
    <textarea
      name="review"
      id="review"
      cols={43}
      rows={8}
      className="border border-gray-500 rounded-lg"
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

export default Home;
