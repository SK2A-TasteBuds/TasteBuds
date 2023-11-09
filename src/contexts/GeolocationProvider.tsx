"use client";
import { useState, useEffect } from "react";

const GeolocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [geolocation, setGeolocation] = useState(null);
  useEffect(() => {
    // Get user's current lng lat
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
        },
        (error) => {
          console.log("Error retrieving location:", error.message);
        }
      );
    }
  }, []);
  return <div>{children}</div>;
};

export default GeolocationProvider;
