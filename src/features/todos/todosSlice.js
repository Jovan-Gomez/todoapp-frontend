import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URI = "https://g0car-todoapp.herokuapp.com/api/v1";

// Action creators
export const todoAdd = createAction("todo/add");
export const todoEdit = createAction("todo/edit");
export const todoDelete = createAction("todo/delete");
export const todoDone = createAction("todo/done");
export const myTodos = createAction("todo/myTodos");

//Functions Thunk
export const todos = createAsyncThunk(
  myTodos,
  async (token, { dispatch, getState }) => {
    try {
      const response = await axios.get(`${BASE_URI}/tasks`, {
        headers: {'Authorization' : token},
      });
      const { data } = response;
      if (data.errors) {
        return data.errors[0]["msg"];
      }
      return data['tasks'];
    } catch (error) {
      console.log(token);
      console.error(error);
    }
  }
);
export const createTask = createAsyncThunk(
  todoAdd,
  async (newtTask, { dispatch, getState }) => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post(`${BASE_URI}/tasks`, newtTask, {
        headers: {'Authorization' : token},
      });
      const { data } = response;
      if (data.errors) {
        return data.errors[0]["msg"];
      }
      return data.newTask;
    } catch (error) {
      console.error(error);
    }
  }
);
export const updateTask = createAsyncThunk(
  todoEdit,
  async (task, { dispatch, getState }) => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.put(`${BASE_URI}/tasks/${task.id}`, task, {
        headers: {'Authorization' : token},
      });
      const { data } = response;
      if (data.errors) {
        return data.errors[0]["msg"];
      }
      return data.task;
    } catch (error) {
      console.error(error);
    }
  }
);
export const deleteTask = createAsyncThunk(
  todoDelete,
  async (id, { dispatch, getState }) => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.delete(`${BASE_URI}/tasks/${id}`, {
        headers: {'Authorization' : token},
      });
      const { data } = response;
      if (data.errors) {
        return data.errors[0]["msg"];
      }
      return data.task;
    } catch (error) {
      console.error(error);
    }
  }
);
export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    myTodos: [],
  },
  reducers: {
    todos: (state, payload) => {
      state.myTodos = payload;
    },
    createTask: (state, payload) => {
      state.myTodos.push(payload);
    }
  },
  extraReducers:{
    [todos.fulfilled]: (state, action) =>{
      state.myTodos = action.payload;
    }
  }
});

export default todosSlice.reducer;
