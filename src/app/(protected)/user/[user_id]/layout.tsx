import Header from './Header';
import NavBtn from './NavBtn';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session: Session | null = await getServerSession(authOptions);
  //console.log(session?.user.name);
  if (!session) {
    redirect('/login');
  }
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Header session={session} />
      <NavBtn user_id={session?.user.name} />
      {children}
    </section>
  );
}
