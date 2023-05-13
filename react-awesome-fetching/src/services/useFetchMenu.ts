import { useQuery } from 'react-query';
import { useErrorBoundary } from 'react-error-boundary';
import type { MenuList } from '../types/menu';

const fetchMenuApi = async (): Promise<MenuList> => {
  const res = await fetch('/menulist');
  return res.json();
};

const useFetchMenu = () => {
  const { showBoundary } = useErrorBoundary();

  try {
    const { data: response } = useQuery('menu', fetchMenuApi, {
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

export default useFetchMenu;
