import { added, loaded } from '../actions';

const addTodo = (todoText) => {
  async (dispatch) => {
    const response = await fetch('http://localhost:9000/todos', {
      method: 'POST',
      body: JSON.stringify({
        text: todoText,
        completed: false,
      }),

      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    });
    const todo = await response.json();

    dispatch(added(todo.text));
  };
};

export default addTodo;
