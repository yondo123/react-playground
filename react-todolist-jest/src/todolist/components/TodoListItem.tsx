import { useTodo } from '../hooks/useTodo';
import { calculateDaysUntil } from '@shared/utils/date';
import { todoListItemStyle } from '../styles';
import { Checkbox } from '@shared/layouts/components/Checkbox';
import { Button } from '@shared/layouts/components/Button';
import { Tag } from '@shared/layouts/components/Tag';
import type { TodoItem } from '../types';

export const TodoListItem = ({ title, id, completed, dueDate }: TodoItem) => {
  const { completeTodo, incompleteTodo, removeTodo } = useTodo();
  const daysUntil = calculateDaysUntil(dueDate);
  const tagMessage = daysUntil === 0 ? 'today' : `D-${daysUntil}`;
  const handleClickRemoveTodo = () => {
    removeTodo(id);
  };

  const handleToggleChecked = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.checked) {
      completeTodo(id);
      return;
    }
    incompleteTodo(id);
  };

  return (
    <li css={todoListItemStyle}>
      <Checkbox checkboxText={title} onChange={handleToggleChecked} checked={completed} />
      <Button size="small" color="#FFA07D" onClick={handleClickRemoveTodo}>
        REMOVE
      </Button>
      <Tag color="#FFA07D">{tagMessage}</Tag>
    </li>
  );
};
