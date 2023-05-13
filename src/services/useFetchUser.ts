import { useQuery, QueryFunction } from 'react-query';
import { useErrorBoundary } from 'react-error-boundary';
import type { UserInfo, UserAuth } from '../types/user';

const fetchUserCheck = async (userId: string): Promise<UserAuth> => {
  const res = await fetch('/auth', {
    method: 'POST',
    body: JSON.stringify({ userId }),
    headers: { 'Content-Type': 'application/json' }
  });

  return res.json();
};

const fetchUserInfo: QueryFunction<UserInfo, [string, string]> = async ({ queryKey }) => {
  const token = queryKey[1];
  const res = await fetch('/userInfo', {
    method: 'POST',
    body: JSON.stringify({ token }),
    headers: { 'Content-Type': 'application/json' }
  });

  return res.json();
};

const useFetchUser = (userId: string) => {
  const { showBoundary } = useErrorBoundary();
  try {
    const { data } = useQuery('userCheck', () => {
      return fetchUserCheck(userId);
    });
    const token = data?.data.token;
    const { data: response } = useQuery(['userInfo', token ?? ''], fetchUserInfo, {
      enabled: !!token,
      refetchOnWindowFocus: false,
      suspense: true
    });

    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    showBoundary(error);
  }
};

export default useFetchUser;
