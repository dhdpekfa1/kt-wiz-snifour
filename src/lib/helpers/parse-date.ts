import { parse, startOfMonth, isBefore, isValid } from 'date-fns';

//  날짜 파싱 및 유효성 확인 함수
export const parseDate = (dateString: string | undefined) => {
  if (!dateString) return null;
  const parsedDate = parse(dateString, 'yyyyMMdd', new Date());
  return isValid(parsedDate) ? startOfMonth(parsedDate) : null;
};

// type, queryMonth 결정 함수
export const selectTypeAndMonth = (
  recentMonth: Date | null,
  currentMonth: Date
): { type: 'recent' | 'kt' | 'all'; queryMonth: Date } => {
  if (recentMonth && isBefore(recentMonth, startOfMonth(currentMonth))) {
    return { type: 'recent', queryMonth: recentMonth };
  }
  if (!recentMonth) {
    return { type: 'all', queryMonth: startOfMonth(currentMonth) };
  }
  return { type: 'kt', queryMonth: startOfMonth(currentMonth) };
};
