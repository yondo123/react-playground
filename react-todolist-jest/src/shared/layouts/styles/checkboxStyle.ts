import { css } from '@emotion/react';

const BORDER_WITH = '2px';
const BACKGROUND_COLOR = '#66598A';
const BORDER_COLOR = '#9980FA';
const TRANSITION_DURATION = '70ms';

export const checkboxWrapperStyle = css`
  label {
    display: block;
    max-width: 100%;
    margin: 0 auto;
    cursor: pointer;

    &.checked {
      color: red; // 예시로 빨간색을 적용했습니다. 필요에 맞게 변경하세요.
    }
  }
  input[type='checkbox'] {
    -webkit-appearance: none;
    appearance: none;
    vertical-align: middle;
    background: #ffffff;
    border-radius: 2px;
    display: inline-block;
    border: 2px solid ${BORDER_COLOR};
    width: 16px;
    height: 16px;
    position: relative;
  }

  input[type='checkbox']:before,
  input[type='checkbox']:after {
    content: '';
    position: absolute;
    background: ${BACKGROUND_COLOR};
    width: 6px;
    height: 2px;
    top: 50%;
    left: 10%;
    transform-origin: left center;
  }

  input[type='checkbox']:before {
    transform: rotate(45deg) translate(calc(${BORDER_WITH} / -2), calc(${BORDER_WITH} / -2)) scaleX(0);
    transition: transform ${TRANSITION_DURATION} ease-in ${TRANSITION_DURATION};
  }

  input[type='checkbox']:after {
    width: calc(${BORDER_WITH} * 5);
    transform: rotate(-45deg) translateY(calc(${BORDER_WITH} * 2)) scaleX(0);
    transition: transform ${TRANSITION_DURATION} ease-in;
  }

  input[type='checkbox']:checked:before {
    transform: rotate(45deg) translate(calc(${BORDER_WITH} / -2), calc(${BORDER_WITH} / -2)) scaleX(1);
    transition: transform ${TRANSITION_DURATION} ease-in;
  }

  input[type='checkbox']:checked:after {
    transform: rotate(-45deg) translateY(calc(${BORDER_WITH} * 2)) scaleX(1);
    transition: transform ${TRANSITION_DURATION} ease-out ${TRANSITION_DURATION};
  }

  input[type='checkbox']:focus {
    outline: calc(${BORDER_WITH} / 2) dotted rgba(0, 0, 0, 0.25);
  }
  span {
    margin-left: 8px;
  }
`;

export const checkboxTextStyle = css({
  display: 'inline-block',
  fontSize: '14px'
});
