import { css } from '@emotion/react';
import type { ButtonSize } from '../types/buttonType';

export const buttonStyle = (color: string, size: ButtonSize) => {
  let fontSize;
  let fontWeight;

  switch (size) {
    case 'small':
      fontSize = '12px';
      fontWeight = '400';
      break;
    case 'large':
      fontSize = '18px';
      fontWeight = '700';
      break;
    default:
      fontSize = '16px'; // 기본값 설정
      fontWeight = '700';
      break;
  }

  return css({
    width: 'fit-content',
    padding: '8px 0',
    border: 'none',
    fontWeight: `${fontWeight}`,
    backgroundColor: 'transparent',
    color: `${color}`,
    fontSize: `${fontSize}`,
    cursor: 'pointer',
    ':disabled': {
      color: '#e0e0e0',
      cursor: 'not-allowed'
    }
  });
};
