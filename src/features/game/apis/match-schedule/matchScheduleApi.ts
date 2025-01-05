import instance from '@/lib/axios/instance';
import { ApiRoutes } from '@/constants/route';
import { GameScheduleResponse } from '@/features/game/types/match-schedule';

export const scheduleApi = {
  // 월 스케줄
  getMonthSchedule: async (
    yearMonth: string
  ): Promise<GameScheduleResponse> => {
    const response = await instance.get(ApiRoutes.GameSchedule, {
      params: { yearMonth },
    });
    return response.data;
  },

  // 모든 팀 월 스케줄
  getAllMonthSchedule: async (
    yearMonth: string
  ): Promise<GameScheduleResponse> => {
    const response = await instance.get(ApiRoutes.AllGameSchedule, {
      params: { yearMonth },
    });
    return response.data;
  },

  // 오늘 스케줄
  getTodaySchedule: async (): Promise<GameScheduleResponse> => {
    const response = await instance.get(ApiRoutes.TodayGameSchedule);
    return response.data;
  },
};
