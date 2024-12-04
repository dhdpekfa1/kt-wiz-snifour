import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import {
  // biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
  Map,
  MapMarker,
  MapTypeId,
  ZoomControl,
} from 'react-kakao-maps-sdk';
import useKakaoLoader from '../../assets/hooks/useKakaoLoader';

function ParkLocation() {
  useKakaoLoader();
  const position = { lat: 37.299759, lng: 127.009781 };

  return (
    <div className="flex flex-col items-center m-5 gap-5">
      <Map // 지도를 표시할 Container
        id="map"
        center={position}
        style={{
          // 지도의 크기
          width: '600px',
          height: '400px',
        }}
        level={3} // 지도의 확대 레벨
      >
        <MapMarker position={position}>
          {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
          {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
          <div>
            <a
              href="https://map.kakao.com/link/to/수원 KT 위즈파크,37.299759,127.009781"
              target="_blank"
              rel="noreferrer"
              className="text-red-600 m-5"
            >
              빠른길찾기
            </a>
          </div>
        </MapMarker>
        <ZoomControl position={'RIGHT'} />
        {/* 실시간 교통 정보 표시 */}
        <MapTypeId type={'TRAFFIC'} />
      </Map>
      <div className="flex">
        <p>
          주소 : 경기도 수원시 장안구 경수대로 893(조원동) 수원 케이티 위즈 파크
          (구 : 경기도 수원시 장안구 조원동 775)
        </p>
      </div>
      <div className="flex">
        <Card>
          <CardHeader>
            <CardTitle>버스 이용 시</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>일반: 25, 25-2, 27, 36, 55, 62-1, 99, 99-2, 300-1</li>
              <li>일반: 310, 777</li>
              <li>직행: 2007, 3000, 7770</li>
              <li>좌석: 300, 900</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>지하철 이용시</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>화서역 하차 (택시로 10분)</li>
              <li>37, 39번 버스이용: 수성중 사거리 하차 후 도보 3분</li>
              <li>55분 버스이용 종합운동장 하차 수원역하차 (택시로 20분) </li>
              <li>1번, 5번, 8번 버스이용: 수성중 사거리 하차 후 도보 3분</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ParkLocation;
