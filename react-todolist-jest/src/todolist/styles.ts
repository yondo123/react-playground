import { css } from '@emotion/react';

export const containerStyle = css({
  paddingTop: '16px',
  height: '480px'
});

export const todoListItemStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  ':not(:first-of-type)': {
    marginTop: '8px'
  }
});

export const todoSummaryWrapperStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  span: {
    color: '#c1b5fd'
  }
});

export const todoControlWrapperStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
});

export const todoAdderContainerStyle = css({
  p: {
    marginBottom: '8px',
    fontWeight: '700',
    color: '#9980FA'
  },

  button: {
    marginTop: '8px'
  }
});
