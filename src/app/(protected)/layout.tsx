import { GeolocationProvider } from "@/contexts/GeolocationProvider";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      {children}
    </section>
  );
}
