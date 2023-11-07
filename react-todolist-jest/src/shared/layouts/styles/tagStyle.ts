import { css } from '@emotion/react';

export const createTagStyle = (color: string) => {
  return css({
    display: 'inline-block',
    padding: '4px 8px',
    backgroundColor: `${color}`,
    color: '#fff',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: 1
  });
};
