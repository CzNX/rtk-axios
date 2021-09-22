import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todolist: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add: (state, { payload }) => {
      state.todolist.push(payload);
    },
    deletes: (state, { payload }) => {
      // return {
      //   ...state,
      //   todolist: state.todolist.filter((i) => i.id !== payload),
      // };
      state.todolist = state.todolist.filter(({ id }) => id !== payload);
    },
    editor: (state, { payload: { editid, value } }) => {
      // return console.log(action.payload.editid);

      return {
        ...state,
        todolist: state.todolist.map((i) => {
          if (i.id === editid) {
            return { ...i, value };
          }
          return i;
        }),
      };
    },
  },
});

export const { add, deletes, editor } = todoSlice.actions;

export const selectTodo = (state) => state.todo.todolist;

export default todoSlice.reducer;
