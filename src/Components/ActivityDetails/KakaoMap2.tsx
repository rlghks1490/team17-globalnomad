import { useEffect } from "react";

interface KakaoMap2Props {
  address: string;
}

const KakaoMap2 = ({ address }: KakaoMap2Props) => {
  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=9cc2180d1a6fff2ed649d23c22fe9e83&autoload=false&libraries=services`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      if (!window.kakao || !window.kakao.maps || !window.kakao.maps.services) {
        console.error("Kakao maps library is not loaded properly");
        return;
      }

      window.kakao.maps.load(() => {
        var container = document.getElementById("map");
        var options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        if (!container) {
          return;
        }

        var map = new window.kakao.maps.Map(container, options);

        var geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(address, function (result, status) {
          if (status === window.kakao.maps.services.Status.OK) {
            var coords = new window.kakao.maps.LatLng(
              parseFloat(result[0].y),
              parseFloat(result[0].x),
            );

            map.setCenter(coords);

            new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });
          } else {
            console.error("Geocoder failed due to: " + status);
          }
        });
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);

    return () => {
      kakaoMapScript.removeEventListener("load", onLoadKakaoAPI);
      document.head.removeChild(kakaoMapScript);
    };
  }, [address]);

  return <div id="map" className="h-[450px] w-[790px]"></div>;
};

export default KakaoMap2;
