export const saveLocalStorage = (value) => {
  localStorage.setItem('todos', JSON.stringify(value));
};
