import React, { useState } from 'react';
import { useTodo } from '../hooks/useTodo';
import { todoSummaryWrapperStyle, todoControlWrapperStyle } from '../styles';
import { TodoAdder } from './TodoAdder';
import { Button } from '@shared/layouts/components/Button';
import { Modal } from '@shared/layouts/components/Modal';

export const TodoListControls = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { redoTodo, undoTodo, getTodoList } = useTodo();
  const todoList = getTodoList();

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <div css={todoSummaryWrapperStyle}>
        <span role="log">{todoList.filter(({ completed }) => !completed).length} TASKS</span>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          ADD NEW +
        </Button>
      </div>
      <div css={todoControlWrapperStyle}>
        <Button onClick={undoTodo} color="#FFA07D">
          UNDO
        </Button>
        <Button onClick={redoTodo} color="#FFA07D">
          REDO
        </Button>
      </div>
      <Modal open={open} onClose={closeModal}>
        <TodoAdder onClose={closeModal} />
      </Modal>
    </React.Fragment>
  );
};
