import { ResponseData } from './response';
export type Menu = {
  id: number;
  name: string;
};

export interface MenuList extends ResponseData {
  data: Menu[];
}
