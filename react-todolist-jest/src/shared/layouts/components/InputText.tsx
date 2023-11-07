import React, { useId } from 'react';
import { Hidden } from '../styles/displayStyle';
import { inputTextStyle } from '../styles/inputTextStyle';

export const InputText = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const id = useId();
  const textId = props.id ?? id;
  return (
    <React.Fragment>
      <Hidden>
        <label htmlFor={textId}>todo item</label>
      </Hidden>
      <input type="text" name="task" id={textId} css={inputTextStyle} {...props} />
    </React.Fragment>
  );
};
