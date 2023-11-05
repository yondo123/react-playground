import { Inter } from 'next/font/google';
import { GlobalStyle } from '../layout/components/GlobalStyle';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '☀️ Weather App',
  description: '날씨를 알려드려요~!!'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ko">
    <GlobalStyle>
      <body className={inter.className}>{children}</body>
    </GlobalStyle>
  </html>
);

export default RootLayout;
