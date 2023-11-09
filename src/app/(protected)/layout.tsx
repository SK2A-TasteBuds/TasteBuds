"use client";

import { useGeolocation } from "@/contexts/GeolocationProvider";

export default function MainLayout({
  children,
  value,
}: {
  children: React.ReactNode;
  value: any;
}) {
  console.log(value);
  const getStore = async () => {
    const res = await fetch(
      `/api/stores/?lat=${location?.lat}&lng=${location?.lng}`
    );
    const data = await res.json();
    console.log(data);
    return data;
  };
  getStore();
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}

      {children}
    </section>
  );
}
