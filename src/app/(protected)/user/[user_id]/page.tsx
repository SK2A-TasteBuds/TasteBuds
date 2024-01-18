import { Session, getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

async function UserPage({ params }: { params: { user_id: string } }) {
  const session: Session | null = await getServerSession(authOptions);
  if (!session) {
    redirect('/login');
  }
  return <></>;
}

export default UserPage;
