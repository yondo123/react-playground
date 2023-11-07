import { css } from '@emotion/react';

export const overlayStyle = css({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.5)'
});

export const modalStyle = css({
  position: 'fixed',
  top: '50%',
  left: '50%',
  width: '400px',
  padding: '16px',
  background: '#fff',
  borderRadius: '4px',
  transform: 'translate(-50%, -50%)',
  '> button': {
    position: 'absolute',
    top: '16px',
    right: '16px'
  }
});
