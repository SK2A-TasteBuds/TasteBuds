// 画像は仮です
//name気に入らなかったら変えてもらって構いません
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import SignOutBtn from "../components/SignOutBtn";
export default async function Main() {
  const session = await getServerSession(authOptions);
  //console.log("session called form mainPage", session);
  if (!session?.user.isNewUser) {
    console.log(session?.user.isNewUser);
    //redirect("/getting-started");
  }
  return (
    <div className='main flex flex-col overflow-hidden items-center w-full h-screen'>
      <div className='store-img relative h-3/5 w-4/5  overflow-hidden'>
        <div className='swipe flex '>
          <div className='object-cover block h-full w-[20px] bg-[#ffc7b7] rounded-md absolute z-10 left-[245px]'></div>
          <div className='object-cover block h-full w-[20px] bg-[#fe9477] rounded-md absolute z-10 left-[235px]'></div>
          <img
            src='https://crea.ismcdn.jp/mwimgs/9/3/1200wm/img_93abdd5347237682a14cf050f2e2a6bd74395.jpg'
            alt='店舗画像'
            className='object-cover w-4/5 h-full absolute z-10 rounded-md'
          />
        </div>

        <div className='absolute bottom-20 left-10  p-2 bg-transparent z-20'>
          <p className='bg-transparent'>ECCパフェ</p>
          <p className='bg-transparent'>中崎町</p>
        </div>
      </div>

      <div className='good-bad flex flex-row h-10 justify-center'>
        <button className='mr-20'>
          <img
            src='https://www.svgrepo.com/show/421162/bad-dislike-thumbs-down.svg'
            alt='good'
            className=' object-cover w-full h-full'
          />
        </button>
        <button className=''>
          <img
            src='https://www.svgrepo.com/show/478767/good-job-hand-2.svg'
            alt='good'
            className='object-cover w-full h-full'
          />
        </button>
      </div>

      <div className='under-menu-bar flex flex-row bg-gray'>
        <div className='w-1/5'>
          <img
            src='https://www.svgrepo.com/show/527754/home-1.svg'
            alt=''
            className='w-full h-auto'
          />
        </div>
        <div className='w-1/5'>
          <img
            src='https://www.svgrepo.com/show/527754/home-1.svg'
            alt=''
            className='w-full h-auto'
          />
        </div>
        <div className='w-1/5'>
          <img
            src='https://www.svgrepo.com/show/527754/home-1.svg'
            alt=''
            className='w-full h-auto'
          />
        </div>
        <div className='w-1/5'>
          <img
            src='https://www.svgrepo.com/show/527754/home-1.svg'
            alt=''
            className='w-full h-auto'
          />
        </div>
        <div className='w-1/5'>
          <img
            src='https://www.svgrepo.com/show/527754/home-1.svg'
            alt=''
            className='w-full h-auto'
          />
        </div>
      </div>
      <SignOutBtn></SignOutBtn>
    </div>
  );
}
