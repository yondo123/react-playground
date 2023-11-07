import { css } from '@emotion/react';

export const inputTextStyle = css({
  width: '100%',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '16px',
  boxSizing: 'border-box',
  outline: 'none',
  '&:focus': {
    borderColor: '#9980FA'
  }
});
