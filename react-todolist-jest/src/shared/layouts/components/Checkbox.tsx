import React from 'react';
import { checkboxWrapperStyle, checkboxTextStyle } from '../styles/checkboxStyle';
import { Hidden } from '../styles/displayStyle';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checkboxText: string;
}
export const Checkbox = (props: CheckboxProps) => {
  const { checkboxText, id, ...restProps } = props;
  return (
    <div css={checkboxWrapperStyle}>
      <label htmlFor={id}>
        <Hidden>todo Item</Hidden>
        <input id={id} type="checkbox" {...restProps} />
        <span className="checked" css={checkboxTextStyle}>
          {checkboxText}
        </span>
      </label>
    </div>
  );
};
