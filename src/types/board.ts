import { ResponseData } from './response';
export type BoardType = {
  id: string;
  writer: string;
  title: string;
  content: string;
};

export interface BoardList extends ResponseData {
  data: BoardType[];
}
