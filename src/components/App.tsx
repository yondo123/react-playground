import { css } from '@emotion/react';
import { useState } from 'react';

export const App = () => {
  type Locate = 'KO' | 'EN' | 'JP';
  const [loc, setLoc] = useState<Locate>('KO');

  const buttonKR = css({
    borderStyle: 'none',
    border: '1px solid black',
    backgroundColor: '#0652DD',
    ':hover': {
      cursor: 'pointer'
    }
  });

  const buttonUSA = css({
    borderStyle: 'none',
    border: '1px solid black',
    backgroundColor: '#d63031',
    color: '#fff',
    ':hover': {
      cursor: 'pointer'
    }
  });

  const buttonJP = css({
    borderStyle: 'none',
    border: '1px solid black',
    backgroundColor: '#FDA7DF',
    color: '#fff',
    ':hover': {
      cursor: 'pointer'
    }
  });

  const handleSetLocate = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    setLoc(value.toUpperCase() as Locate);
  };

  return (
    <div>
      {loc === 'EN' && <h2>Hello React</h2>}
      {loc === 'KO' && <h2>안녕하세요 자랑스러운 React 개발자님 😎</h2>}
      {loc === 'JP' && <h2>こんにちは、誇り高きReact開発者の方😎</h2>}
      <div>
        <button css={buttonKR} value="ko" onClick={handleSetLocate}>
          KO
        </button>
        <button css={buttonUSA} value="en" onClick={handleSetLocate}>
          EN
        </button>
        <button css={buttonJP} value="jp" onClick={handleSetLocate}>
          JP
        </button>
      </div>
      <hr />
      {loc === 'EN' && <p>Feel free to create your beautiful application. 😇</p>}
      {loc === 'KO' && <p>당신의 아름다운 애플리케이션을 마음껏 작성해보세요. 😇</p>}
      {loc === 'JP' && <p>思う存分美しいアプリケーションを作ってください。😇</p>}
    </div>
  );
};
