'use client';

import { useRouter } from 'next/navigation';

export const HomeButton = async () => {
  const router = useRouter();
  const moveToHome = () => {
    router.push('/');
  };

  return (
    <button type="button" onClick={moveToHome}>
      돌아가기
    </button>
  );
};
