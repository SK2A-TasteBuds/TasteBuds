'use client';

import { useGeolocation } from '@/contexts/GeolocationProvider';
import { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getUserKeepStore } from '@/utils/stores';

function Map() {
  // const session: Session | null = await getServerSession(authOptions);
  // const user = session?.user; // ログインしていなければnullになる。
  // const data = await getUserKeepStore(user.id);

  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_BOX_TOKEN as string;
  const { location, error } = useGeolocation();
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(8);
  const [LoadedLocation, setLoadedLocation] = useState(false); //最初のlat lng取得した判定

  useEffect(() => {
    // Get user's current lng lat
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          map.current = new mapboxgl.Map({
            container: mapContainer.current!,
            style: 'mapbox://styles/mapbox/light-v11',
            center: [longitude, latitude],
            zoom: zoom,
          });
          console.log(map.current);
          
          
          new mapboxgl.Marker()
            .setLngLat([34.7042676549,35.5025718865])
            .addTo(map.current);
          
          
        },
        (error) => {
          console.log('Error retrieving location:', error.message);
        }
      );
    }
  }, [location]); // Empty dependency array ensures this effect runs only once
  useEffect(()=>{
    //テスト用
    if (map.current) {
        map.current.on('move', () => {
          setLng(map.current?.getCenter().lng as number);
          setLat(map.current?.getCenter().lat as number);
          setZoom(map.current?.getZoom() as number);
        });
    }
  },[map.current])
  return (
    <div className="h-screen">
      <div>
        {lat} {lng} {zoom}
      </div>
      <div ref={mapContainer} className=" object-cover h-full" />
    </div>
  );
}

export default Map;
