import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SessionProvider from "@/contexts/SessionProvider";
import { GeolocationProvider } from "@/contexts/GeolocationProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TasteBuds",
  description: "TasteBuds app",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <body className={inter.className}>
        <SessionProvider session={session}>
          <GeolocationProvider>{children}</GeolocationProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
