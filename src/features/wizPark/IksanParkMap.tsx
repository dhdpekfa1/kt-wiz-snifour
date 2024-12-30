import useKakaoLoader from '@/hooks/useKakaoLoader';
import {
  // biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
  Map,
  MapMarker,
  MapTypeId,
  ZoomControl,
} from 'react-kakao-maps-sdk';

function IksanParkMap() {
  useKakaoLoader();
  const position = { lat: 35.96755, lng: 127.0063 };

  return (
    <>
      <Map // 지도를 표시할 Container
        id="map"
        center={position}
        style={{
          // 지도의 크기
          width: '100%',
          height: 'calc(42vh)',
        }}
        level={3} // 지도의 확대 레벨
      >
        <MapMarker position={position} />
        <ZoomControl position={'RIGHT'} />
        {/* 실시간 교통 정보 표시 */}
        <MapTypeId type={'TRAFFIC'} />
      </Map>
    </>
  );
}

export default IksanParkMap;
