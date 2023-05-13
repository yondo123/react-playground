import { useQuery } from 'react-query';
import { useErrorBoundary } from 'react-error-boundary';
import { BoardList } from '../types/board';

const fetchPostsApi = async (): Promise<BoardList> => {
  const res = await fetch('/board');
  return res.json();
};

const useFetchBoard = () => {
  const { showBoundary } = useErrorBoundary();
  try {
    const { data: response } = useQuery('board', fetchPostsApi, {
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

export default useFetchBoard;
