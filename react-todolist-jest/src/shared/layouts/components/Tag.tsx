import { createTagStyle } from '../styles/tagStyle';

interface TagProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  color?: string;
}
export const Tag = ({ children, color = '#9980FA' }: TagProps) => {
  return (
    <span css={createTagStyle(color)} role="mark">
      {children}
    </span>
  );
};
