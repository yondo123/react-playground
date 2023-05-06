import { useQuery } from 'react-query';
import { useErrorBoundary } from 'react-error-boundary';
import type { FollowerList } from '../types/follower';

const fetchFollowersApi = async (): Promise<FollowerList> => {
  const res = await fetch('/followers');
  return res.json();
};

const useAsyncFollowApi = () => {
  const { showBoundary } = useErrorBoundary();

  try {
    const { data: response } = useQuery('followers', fetchFollowersApi, {
      refetchOnWindowFocus: false,
      suspense: true
    });
    if (response && response.data) {
      return response.data;
    }
    throw 'API 통신에 실패하였습니다.';
  } catch (error) {
    showBoundary(error);
  }
};

export default useAsyncFollowApi;
