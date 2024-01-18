'use client';

import { useGeolocation } from '@/contexts/GeolocationProvider';
import { useSession } from 'next-auth/react';
import { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './svg.css';
import { getUserKeepStore, getUserLikesStore } from '@/utils/stores';
import { getUser } from '@/utils/user';
import { redirect } from 'next/navigation';

type PageProps = {
  params: { user_id: string };
};
function Map({ params }: PageProps) {
  // ユーザーがログインしている場合、データを取得してピンを追加
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_BOX_TOKEN as string;
  const { user_id } = params;
  const { location, error } = useGeolocation();
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);

  const [zoom, setZoom] = useState(15);
  const LikeListColor = '#fb923c';
  const KeepListColor = '#ffff00';

  //ユーザー情報取得
  const [user_data, setUserData] = useState({ name: 'null', image: 'null' });
  const getUserParams = async () => {
    return await getUser(user_id);
  };
  useEffect(() => {
    if (user_data.name == 'null') {
      getUserParams().then((e) => {
        const name = e?.name;
        const image = e?.image;
        setUserData({ name: name, image: image });
      });
      console.log(user_data);
    }
  }, [user_data]);

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
            setLat(latitude);
            setLng(longitude);
            //現在地のピン(mapboxのcontrolに似たようなのがあったので削除)
            // new mapboxgl.Marker({ color: LocationColor })
            //   .setLngLat([longitude, latitude])
            //   .addTo(map.current);

            //↓テスト用
            // map.current.on('move', () => {
            //   if (map.current == null) return;
            //   setLng(Number(map.current.getCenter().lng.toFixed(4)));
            //   setLat(Number(map.current.getCenter().lat.toFixed(4)));
            //   setZoom(Number(map.current.getZoom().toFixed(4)));
            // });

            //ズーム機能(ズームするとポップアップが正常に動かないため削除)
            // map.current.addControl(
            //   new mapboxgl.GeolocateControl({
            //     positionOptions: {
            //       enableHighAccuracy: true,
            //     },
            //   })
            // );
          }
        },
        (error) => {
          console.log('Error retrieving location:', error.message);
        }
      );
    }
  }, [location]); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    const fetchData = async () => {
      if (user_id != null && map.current != null) {
        try {
          const getKeepList = async () => {
            return await getUserKeepStore(user_id);
          };

          const getLikeList = async () => {
            return await getUserLikesStore(user_id);
          };

          const keepMarkers = await getKeepList();
          keepMarkers.forEach((element) => {
            if (map.current != null) {
              const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
                <div>
                  <a href=/stores/${element['id']}>
                    <img src=${element['photo']} alt="store-img">
                    ${element['name']}
                  </a>  
                </div>  
              `);
              const pin = new mapboxgl.Marker({ color: KeepListColor })
                .setLngLat([element['lng'], element['lat']])
                .setPopup(popup)
                .addTo(map.current);
            }
          });

          const likeMarkers = await getLikeList();
          likeMarkers.forEach((element) => {
            if (map.current != null) {
              const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
                <div>
                  <a href=/stores/${element['id']}>
                    <img src=${element['photo']} alt="store-img">
                    ${element['name']}
                  </a> 
                </div>  
              `);
              const pin = new mapboxgl.Marker({ color: LikeListColor })
                .setLngLat([element['lng'], element['lat']])
                .setPopup(popup)
                .addTo(map.current);
            }
          });
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [map.current, user_id]);
  const setZoomatButton = () => {
    console.log('clicked');
    map.current?.flyTo({
      center: [lng, lat],
      zoom: 12,
    });
  };
  return (
    <div className="h-screen">
      <div className="flex">
        <img
          src={`${user_data.image}`}
          alt={`${user_data.name}`}
          width={120}
          height={120}
          className="mr-2 w-6 h-6 rounded-full"
        />
        {user_data.name}
      </div>

      <div ref={mapContainer} className=" object-cover h-full">
        <div className="mapboxgl-ctrl-top-right">
          <div className="mapboxgl-ctrl mapboxgl-ctrl-group">
            <button
              className="mapboxgl-ctrl-geolocate"
              onClick={() => setZoomatButton()}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
