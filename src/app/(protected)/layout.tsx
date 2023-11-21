import BottomNav from "../components/BottomNav";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Session, getServerSession } from "next-auth";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session: Session | null = await getServerSession(authOptions);
  const user = session?.user; // ログインしていなければnullになる。
  return (
    <section>
      {/* Debug用 */}
      {/* {session && (
        <>
          <p className="text-xs">{user.id}</p>
          <p className="text-xs">{user.name}</p>
          <p className="text-xs">{user.email}</p>
          <p className="text-xs overflow-scroll">{user.image}</p>
        </>
      )} */}

      {/* Include shared UI here e.g. a header or sidebar */}

      {children}
      <BottomNav session={session} />
    </section>
  );
}
