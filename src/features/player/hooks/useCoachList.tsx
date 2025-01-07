import { useGetCoachList } from '../apis/playerApi.query';

const useCoachList = () => {
  const { data: coachList, isLoading, isError, error } = useGetCoachList();

  return { coachList, isLoading, isError, error };
};

export default useCoachList;
