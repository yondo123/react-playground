import { flexChildren } from '@styles/createFlexStyle';
import fetchFollowers from '../services/useFetchFollowers';

export const Followers = () => {
  const follwerList = fetchFollowers();
  return (
    <div css={flexChildren}>
      <h2>Followers</h2>
      {follwerList?.map(follower => {
        return (
          <div key={follower.id}>
            <p>
              <strong>{follower.name}</strong>
            </p>
            <img
              alt={follower.name}
              src={follower.avatar}
              css={{ width: '64px', height: '64px', border: '1px solid #ededed', borderRadius: '50%' }}
            />
          </div>
        );
      })}
    </div>
  );
};
