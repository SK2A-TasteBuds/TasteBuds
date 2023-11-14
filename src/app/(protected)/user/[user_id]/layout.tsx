import Header from "./Header";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
export default async function MainLayout({ children }: { children: React.ReactNode }) {
  const session: Session | null = await getServerSession(authOptions);

  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Header session={session} />
      {children}
    </section>
  );
}
