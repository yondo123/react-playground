import { useState } from 'react';
import { todoAdderContainerStyle } from '../styles';
import { useTodo } from '../hooks/useTodo';
import { formatDate, formatStringToDate } from '@shared/utils/date';
import { Button } from '@shared/layouts/components/Button';
import { Date } from '@shared/layouts/components/Date';
import { InputText } from '@shared/layouts/components/InputText';

interface TodoAdderProps {
  onClose: () => void;
}

export const TodoAdder = ({ onClose }: TodoAdderProps) => {
  const { addTodo } = useTodo();
  const formattedToday = formatDate();
  const [dueDate, setDueDate] = useState<string>(formattedToday);
  const [todo, setTodo] = useState<string | null>(null);
  const isDisabled = !dueDate || !todo;

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDueDate(e.target.value);
  };

  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value.trim());
  };

  const addTodoItem = () => {
    if (dueDate && todo) {
      const formattedDueDate = formatStringToDate(dueDate);
      addTodo(formattedDueDate, todo);
      onClose();
    }
  };
  return (
    <section css={todoAdderContainerStyle}>
      <p>만료 날짜를 선택해주세요.</p>
      <Date min={formattedToday} onChange={handleDateChange} defaultValue={formattedToday} />
      <p>해야할 일을 입력해주세요.</p>
      <InputText onChange={handleTodoChange} />
      <Button color="#FFA07D" disabled={isDisabled} onClick={addTodoItem}>
        추가하기
      </Button>
    </section>
  );
};
