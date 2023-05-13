import useFetchUser from '../services/useFetchUser';
export const Profile = () => {
  const userProfile = useFetchUser('jiny');
  return (
    <div>
      <h2>Profile</h2>
      {userProfile && (
        <div css={{ display: 'flex', flexDirection: 'column' }}>
          <span>{userProfile.name}님 환영해요.</span>
          <img
            alt={userProfile.id}
            src={userProfile.avatar}
            css={{ width: '64px', height: '64px', border: '1px solid #ededed', borderRadius: '50%' }}
          />
        </div>
      )}
    </div>
  );
};
