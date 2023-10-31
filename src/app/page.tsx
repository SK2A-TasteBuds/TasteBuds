import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignOutBtn from "@/app/components/SignOutBtn";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signIn");
  }

  return (
    <>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <SignOutBtn />
    </>
  );
}
