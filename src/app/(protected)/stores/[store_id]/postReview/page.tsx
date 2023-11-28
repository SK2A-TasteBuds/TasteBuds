'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';

export function Page({ params }: { params: { store_id: string } }) {
  const { store_id } = params;

  console.log(store_id);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [reviewContent, setReviewContent] = useState<string>('');
  const [isLikeActive, setIsLikeActive] = useState(false);
  const [isDislikeActive, setIsDislikeActive] = useState(false);

  const [store_name, set_store_setName] = useState('');

  fetch(`/api/stores/${store_id}`)
    .then((response) => response.json())
    .then((data) => {
      // JSONデータから'name'プロパティを取得
      const name = data.name;
      // 取得した'name'をコンソールに出力
      console.log(name);
      set_store_setName(name); // ステートを直接更新
    })
    .catch((error) => console.error(error));

  const onFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const fileObject = e.target.files[0];

    try {
      const imageUrl = window.URL.createObjectURL(fileObject);
      setProfileImage(imageUrl);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleLikeButtonClick = () => {
    setIsLikeActive(!isLikeActive);
    setIsDislikeActive(false); // dislike ボタンの状態をリセット
  };

  const handleDislikeButtonClick = () => {
    setIsDislikeActive(!isDislikeActive);
    setIsLikeActive(false); // like ボタンの状態をリセット
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // レビューの内容や写真などを配列に追加
    const reviewData: (string | File)[] = [
      isLikeActive ? 'like' : 'dislike',
      reviewContent,
      profileImage || '', // 画像がない場合は空文字列を設定
    ];

    // 配列の内容を次のページに送信する処理を追加
    // ここで何かしらの処理を行う（例: ページ遷移など）

    //ここでフェッチ
    // stores/store_id/に送る？
    fetch(`stores/${store_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    // 送信後にフォームの状態をリセット
    setIsLikeActive(false);
    setIsDislikeActive(false);
    setReviewContent('');
    setProfileImage(null);
  };

  return (
    <div className="flex min-h-full  flex-col justify-center items-start px-6 py-12 lg:px-8 ">
      <div className="text-center">{store_name}</div>
      <p className="inline-flex items-center mr-3 py-2 text-sm text-gray-900  font-semibold">
        <Image
          width={120}
          height={120}
          className="mr-2 w-6 h-6 rounded-full"
          src=""
          alt="{user_name}"
        />
        user_name
      </p>
      <div className="flex max-w-3xl w-full py-2">
        <button
          className={`w-1/2  border-b-4 ${
            isLikeActive ? 'border-orange-400' : 'border-none'
          } `}
          onClick={handleLikeButtonClick}
        >
          like
        </button>
        <button
          className={`w-1/2  border-b-4 ${
            isDislikeActive ? 'border-orange-400' : 'border-none'
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
          className=""
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="text-center">
          <button
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
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

export default Page;
