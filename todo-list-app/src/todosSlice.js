import { createSlice } from '@reduxjs/toolkit';
import { loadingCompleted } from "./loadingSlice";

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [],
  },
  reducers: {
    todosUpdated: (state, action) => {
      const updatedTodos = action.payload;
      state.value = updatedTodos;

    }
  },
  extraReducers: (buiilder) => {
    buiilder.addCase(loadingCompleted, (state, action) => {
      state.value = action.payload;
    })
  }
});

export const { todosUpdated } = todosSlice.actions;