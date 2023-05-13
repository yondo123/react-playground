import { css } from '@emotion/react';
import React, { ReactNode } from 'react';
import { ErrorBoundaryProps } from 'react-error-boundary';

export const Error = () => {
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h3>☹️ 데이터 요청중에 오류가 발생했어요.</h3>
    </div>
  );
};
