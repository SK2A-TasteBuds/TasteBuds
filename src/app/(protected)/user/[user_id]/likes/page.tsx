import { getUserLikesStore } from '@/utils/stores';
import List from './List';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Session, getServerSession } from 'next-auth';
import SignOutBtn from '@/app/components/SignOutBtn';
import { redirect } from 'next/navigation';
async function page() {
  const session: Session | null = await getServerSession(authOptions);
  const user = session?.user; // ログインしていなければnullになる。
  const data = await getUserLikesStore(user.id);
  if (!session) {
    redirect('/signin?callbackUrl=/(protected)/');
  }
  return (
    <>
      <h1>Likes page</h1>
      <List items={data} />
    </>
  );
}

export default page;
