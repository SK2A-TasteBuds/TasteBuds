"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';

export function Page({params}: {params:{store_id: string}}) {
  const {store_id} = params;
  
  console.log(store_id);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [reviewContent, setReviewContent] = useState<string>("");
  const [isLikeActive, setIsLikeActive] = useState(false);
  const [isDislikeActive, setIsDislikeActive] = useState(false);

  const [store_name, set_store_setName] = useState("");
   
  fetch(`/api/stores/${store_id}`)
  .then(response => response.json())
  .then(data => {
    // JSONデータから'name'プロパティを取得
    const name = data.name;
    // 取得した'name'をコンソールに出力
    console.log(name);
    set_store_setName(name); // ステートを直接更新
  })
  .catch(error => console.error(error));


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
      isLikeActive ? "like" : "dislike",
      reviewContent,
      profileImage || "", // 画像がない場合は空文字列を設定
    ];

    // 配列の内容を次のページに送信する処理を追加
    // ここで何かしらの処理を行う（例: ページ遷移など）

    //ここでフェッチ
    // stores/store_id/に送る？
    fetch(`stores/${store_id}`,{
      method : "POST",
      headers : {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(reviewData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

    // 送信後にフォームの状態をリセット
    setIsLikeActive(false);
    setIsDislikeActive(false);
    setReviewContent("");
    setProfileImage(null);
  };

  return (
    <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm rounded-lg shadow px-6 py-8 mx-auto">

      <div className='text-center'>
        {store_name}
      </div>
      username
      <div className="flex">
        <button
          className={`w-1/2 bg-pink-500 border-b-4 ${isLikeActive ? "border-orange-400" : "border-none"} `}
          onClick={handleLikeButtonClick}
        >
          like
        </button>
        <button
          className={`w-1/2 bg-blue-500 border-b-4 ${isDislikeActive ? "border-orange-400" : "border-none"}`}
          onClick={handleDislikeButtonClick}
        >
          dislike
        </button>
      </div>
      <div>
        Review
      </div>
      <MyTextareaComponent value={reviewContent} onChange={(e) => setReviewContent(e.target.value)} />
      <div>
        <img src={profileImage || ""} alt="" />
        <input type="file" accept="image/*" onChange={onFileInputChange} className="pl-4" />
      </div>
        <form onSubmit={handleSubmit}>
          <div className='text-center'>
            <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">投稿する</button>
          </div>
        </form>
      </div>
  )
}

interface MyTextareaProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const MyTextareaComponent: React.FC<MyTextareaProps> = ({ value, onChange }) => {
  return (
    <textarea
      name="review"
      id="review"
      cols={43}
      rows={10}
      className="border border-gray-500"
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

export default Page;
