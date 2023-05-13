import { ResponseData } from './response';
export type FollowerType = {
  id: string;
  name: string;
  avatar: string;
};
export interface FollowerList extends ResponseData {
  data: FollowerType[];
}
