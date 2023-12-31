'use client';

import { useGeolocation } from '@/contexts/GeolocationProvider';
import { useSession } from 'next-auth/react';

import { useEffect, useState, useRef } from 'react';
import mapboxgl, { MapMouseEvent, Marker } from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import "./svg.css"


import { getUserKeepStore,getUserReviewStore } from '@/utils/stores';

function Map() {
  // ユーザーがログインしている場合、データを取得してピンを追加
  const { data: session, status } = useSession();

  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_BOX_TOKEN as string;

  const { location, error } = useGeolocation();
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(15);
  const [LoadedLocation, setLoadedLocation] = useState(false); //最初のlat lng取得した判定
  const LocationColor = "#0000FF";
  const LikeListColor = "#fb923c";
  const KeepListColor = "#ffff00";
  useEffect(() => {
    // Get user's current lng lat
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { longitude, latitude } = position.coords;
          if (!map.current) {
            map.current = new mapboxgl.Map({
              container: mapContainer.current!,
              style: 'mapbox://styles/mapbox/light-v11',
              center: [longitude, latitude],
              zoom: zoom,
            });
            new mapboxgl.Marker({ color: LocationColor })
              .setLngLat([longitude, latitude])
              .addTo(map.current);
            //↓テスト用  
            map.current.on('move', () => {
              if (map.current == null) return;
              setLng(Number(map.current.getCenter().lng.toFixed(4)));
              setLat(Number(map.current.getCenter().lat.toFixed(4)));
              setZoom(Number(map.current.getZoom().toFixed(4)));
            })
          }
          setLat(latitude);
          setLng(longitude);


        },
        (error) => {
          console.log('Error retrieving location:', error.message);
        }
      );
    }
  }, [location]); // Empty dependency array ensures this effect runs only once



  useEffect(() => {
    if (session != null && map.current != null) {
      const getKeepList = async () => {
        return await getUserKeepStore(session.user.id)
      }
      const getLikeList = async () =>{
        return await getUserReviewStore(session.user.id);
      }
      const KeepMarkers = getKeepList();
      KeepMarkers.then((data) => {
        data.forEach(element => {
          if (map.current != null) {
            const popup = new mapboxgl.Popup({ offset: 25 })
              .setHTML(`
                        <div>
                          <a href=/stores/${element["id"]}>
                            <img src=${element["photo"]} alt="store-img">
                            ${element["name"]}
                          </a>  
                        </div>  
                      `)
            const pin = new mapboxgl.Marker({ color: KeepListColor })
              .setLngLat([element["lng"], element["lat"]])
              .setPopup(popup)
              .addTo(map.current);
          }
        });
      })
      const LikeMarkers = getLikeList();
      LikeMarkers.then((data)=>{
        data.forEach(element => {
          if (map.current != null) {
            const popup = new mapboxgl.Popup({ offset: 25 })
              .setHTML(`
                        <div>
                          <a href=/stores/${element["id"]}>
                            <img src=${element["photo"]} alt="store-img">
                            ${element["name"]}
                          </a> 
                        </div>  
                      `)
            const pin = new mapboxgl.Marker({ color: LikeListColor })
              .setLngLat([element["lng"], element["lat"]])
              .setPopup(popup)
              .addTo(map.current);
          }
        });
      })
    }
  }, [map.current])
  return (
    <div className="h-screen">
      {/*↓テスト用 */}
      <div>
        lat:{lat}lang:{lng}zoom:{zoom}
      </div>

      <div ref={mapContainer} className=" object-cover h-full" >

      </div>
    </div>
  );
}

export default Map;
