import { getUserReviewStore } from '@/utils/stores';
import List from './List';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Session, getServerSession } from 'next-auth';
import SignOutBtn from '@/app/components/SignOutBtn';

async function page() {
  const session: Session | null = await getServerSession(authOptions);
  const user = session?.user; // ログインしていなければnullになる。
  console.log(user);
  const data = await getUserReviewStore(user.id);
  

  return (
    <>
      <h1>Likes page</h1>
      <List items={data} />
      <SignOutBtn/>
    </>
  );
}

export default page;
