'use client';

import { Global } from '@emotion/react';
import globalStyle from '../reset';

interface Props {
  children: React.ReactNode;
}

export const GlobalStyle = ({ children }: Props) => (
  <>
    <Global styles={globalStyle} />
    {children}
  </>
);
