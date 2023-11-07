import { buttonStyle } from '../styles/buttonStyle';
import type { ButtonSize } from '../types/buttonType';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

export const Button = ({
  children,
  onClick,
  size = 'medium',
  disabled = false,
  type = 'button',
  color = '#9980FA',
  ...restProps
}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} css={buttonStyle(color, size)} {...restProps}>
      {children}
    </button>
  );
};
