import HeaderCard from './HeaderCard';
import Reviews from './Reviews';
import ReviewGrid from './ReviewGrid';
import Link from 'next/link';
import { addToKeeps } from '@/utils/user';
import { useSession } from 'next-auth/react';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';


type PageProps = {
  params: { store_id: string };
};

export default async function Page({ params }: PageProps) {

  

  const session: Session | null = await getServerSession(authOptions);
  const { store_id } = params;

  const handleAddToKeeps = async () => {
    'use server';
    console.log(session?.user.id);
    const user_id = session?.user.id;
    addToKeeps(user_id, store_id);
  };

  return (
    <section className="overflow-y-scroll h-screen overscroll-none pb-20">
      <HeaderCard
        data={fetch(`http://localhost:3000/api/stores/${store_id}`)}
      />
      <div className='display flex flex-col items-center'>
        <form action={handleAddToKeeps} className='w-[90%] text-center'>
        <button type='submit'
              className="w-full text-white border-black border bg-yellow-300  text-center mt-5"
        >KeepListに追加</button>
        </form>
        <Link href={`/stores/${store_id}/postReview`} className='w-[90%] text-center'>
          <p className='w-full text-white border-black border bg-orange-500  text-center mt-3'>レビューを投稿する</p>  
        </Link> 
      </div>
      <ReviewGrid store_id={store_id} />
      <Reviews store_id={store_id} /> 
    </section>
  );
}