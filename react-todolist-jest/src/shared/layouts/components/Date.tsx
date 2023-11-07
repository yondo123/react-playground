import React, { useId } from 'react';
import { inputDateStyle } from '../styles/inputDateStyle';
import { Hidden } from '../styles/displayStyle';

interface DateProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeDate?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Date = (props: DateProps) => {
  const { onChange, id, ...restProps } = props;
  const uuid = useId();
  const dateId = id ?? uuid;

  return (
    <React.Fragment>
      <Hidden>
        <label htmlFor={dateId}>date</label>
      </Hidden>
      <input id={dateId} name="dueDate" type="date" css={inputDateStyle} onChange={props.onChange} {...restProps} />
    </React.Fragment>
  );
};
