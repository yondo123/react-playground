import useFetchBoard from '../services/useFetchBoard';
import { flexChildren } from '@styles/createFlexStyle';

export const Board = () => {
  const posts = useFetchBoard();
  return (
    <div css={flexChildren}>
      <h2>Posts</h2>
      <ol css={{ listStyle: 'none', padding: '0' }}>
        {posts?.map(post => {
          return (
            <li key={post.id} css={{ borderBottom: '1px solid #ededed' }}>
              <p>
                <h3>{post.title}</h3>
                <p>
                  WriteBy. <strong>{post.writer}</strong>
                </p>
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
