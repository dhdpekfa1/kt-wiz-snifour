// HTTP 상태 코드별 에러 메시지
export const HTTP_ERROR_MESSAGES = {
  400: '잘못된 요청입니다.',
  401: '인증이 필요합니다.',
  403: '접근 권한이 없습니다.',
  404: '요청하신 페이지를 찾을 수 없습니다.',
  500: '서버 오류가 발생했습니다.',
  502: '게이트웨이 오류가 발생했습니다.',
  503: '서비스를 사용할 수 없습니다.',
} as const;

// API 관련 에러 메시지
export const API_ERROR_MESSAGES = {
  NETWORK_ERROR: '네트워크 연결을 확인해주세요.',
  TIMEOUT_ERROR: '요청 시간이 초과되었습니다.',
  DEFAULT: '오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
  // 뉴스 관련 에러
  NEWS: {
    NOT_FOUND: '뉴스를 찾을 수 없습니다.',
    SEARCH_FAILED: '뉴스 검색에 실패했습니다.',
  },
} as const;

// 에러 타입 정의
export type HttpErrorCode = keyof typeof HTTP_ERROR_MESSAGES;
export type ApiErrorType = keyof typeof API_ERROR_MESSAGES;

// 에러 메시지 가져오는 유틸리티 함수
export const getErrorMessage = (status?: number) => {
  if (!status) return API_ERROR_MESSAGES.DEFAULT;
  return (
    HTTP_ERROR_MESSAGES[status as HttpErrorCode] || API_ERROR_MESSAGES.DEFAULT
  );
};
