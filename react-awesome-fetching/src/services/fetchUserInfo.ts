import { UserInfo } from '../types/user';
const fetchUserInfo = async (userId: string, callback: (data: UserInfo | null) => void) => {
  try {
    const userCheck = await fetch('/auth', {
      method: 'POST',
      body: JSON.stringify({ userId }),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json());

    const userInfo: UserInfo = await fetch('/userInfo', {
      method: 'POST',
      body: JSON.stringify({ token: userCheck.data.token }),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json());
    callback(userInfo);
  } catch (e) {
    callback({ data: null, errorMessage: '로그인에 실패하였습니다.', success: false });
  }
};

export default fetchUserInfo;
