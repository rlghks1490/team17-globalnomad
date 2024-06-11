import Script from 'next/script';
import { Map } from 'react-kakao-maps-sdk';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=9cc2180d1a6fff2ed649d23c22fe9e83&autoload=false`;

const KakaoMap = () => {
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map center={{ lat: 33.450701, lng: 126.570667 }} style={{ width: '100%', height: '100%' }}>
      </Map>
    </>
  );
};

export default KakaoMap;