import List from './List';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getUserKeepStore } from '@/utils/stores';
import { getUserReviewStore } from '@/utils/stores';

async function page() {
  const session: Session | null = await getServerSession(authOptions);
  const user = session?.user; // ログインしていなければnullになる。
  console.log(user);
  const data = await getUserKeepStore(user.id);

  return (
    <>
      <h1>Keep page</h1>

      <List items={data} />
    </>
  );
}

export default page;
