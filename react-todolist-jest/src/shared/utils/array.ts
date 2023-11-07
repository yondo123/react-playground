export const findTodoItemById = (array: { id: string }[], targetId: string) => {
  array.findIndex(item => item.id === targetId);
};
