import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  address: string;
}

const KakaoMap = ({ address }: KakaoMapProps) => {
  useEffect(() => {
    const kakaoMapScript = document.createElement("script");

    kakaoMapScript.async = true;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=9cc2180d1a6fff2ed649d23c22fe9e83&autoload=false&libraries=services`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(address, function (result: any, status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x,
            );

            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });

            const infowindow = new window.kakao.maps.InfoWindow({
              content: `<div class="rounded-2xl text-center p-2">${address}</div>`,
            });
            infowindow.open(map, marker);

            map.setCenter(coords);
          }
        });
      });
    };
    kakaoMapScript.addEventListener("load", onLoadKakaoMap);

    return () => kakaoMapScript.removeEventListener("load", onLoadKakaoMap);
  }, [address]);
  return (
    <div
      id="map"
      className="h-[400px] w-full tablet:h-[276px] mobile:h-[450px]"
    ></div>
  );
};

export default KakaoMap;
