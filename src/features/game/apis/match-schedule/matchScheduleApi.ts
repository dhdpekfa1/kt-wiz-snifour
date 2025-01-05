import axios from "axios";
import { API_URL } from "@/constants/api-url";

// 공통 API 요청 함수
const fetchApi = async (url: string, params?: Record<string, string>) => {
  try {
    const res = await axios.get(`${API_URL}${url}`, { params });

    if (res.status !== 200) {
      throw new Error(`Failed to fetch data. Status code: ${res.status}`);
    }

    return res.data.data.list;
  } catch (err) {
    console.error(`API fetch error on ${url}:`, err);
    throw err;
  }
};

export const scheduleApi = {
  // 월 스케줄
  getMonthSchedule: (yearMonth: string) =>
    fetchApi("/game/monthschedule", { yearMonth }),

  // 모든 팀 월 스케줄
  getAllMonthSchedule: (yearMonth: string) =>
    fetchApi("/game/allgameschedule", { yearMonth }),

  // 오늘 스케줄
  getTodaySchedule: () => fetchApi("/game/dayschedule"),
};
