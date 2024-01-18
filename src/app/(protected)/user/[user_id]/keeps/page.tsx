import List from './List';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getUserKeepStore } from '@/utils/stores';
import { redirect } from 'next/navigation';

async function page() {
  const session: Session | null = await getServerSession(authOptions);
  const user = session?.user; // ログインしていなければnullになる。
  const data = await getUserKeepStore(user.id);
  if (!session) {
    redirect('/signin?callbackUrl=/(protected)/');
  }

  return (
    <>
      <h1>Keep page</h1>

      <List items={data} />
    </>
  );
}

export default page;
