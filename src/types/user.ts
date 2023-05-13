import { ResponseData } from './response';
export type UserType = {
  id: string;
  name: string;
  avatar: string;
};

export type AuthType = {
  auth: boolean;
  token: string;
};

export interface UserInfo extends ResponseData {
  data: UserType | null;
}

export interface UserAuth extends ResponseData {
  data: AuthType;
}
