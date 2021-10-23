import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import axios from 'axios';
const BASE_URI = 'https://g0car-todoapp.herokuapp.com/api/v1';

// Action creators n
export const userLogin = createAction('user/login');
export const userRegister = createAction('user/register');

//Functions Thunk
export const login = createAsyncThunk(userLogin,
    async (values, {dispatch, getState}) =>{
     try {
      const response = await axios.post(`${BASE_URI}/auth/login`,values);
      const {data} = response;
      if(data.errors){
        return data.errors[0]['msg'];
      }
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      return data;
     } catch (error) {
        console.log(error.message);
     }
    }
  )
export const register = createAsyncThunk(userRegister,
    async (values, {dispatch, getState}) =>{
     try {
      const response = await axios.post(`${BASE_URI}/users`,values);
      const {data} = response;
      if(data.errors){
        return data.errors[0]['msg'];
      }
      return data.user;
     } catch (error) {
       console.error(error)
     }
    }
  )

  export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    status: null,
  },
  extraReducers:{
    [login.fulfilled]: (state, action) =>{
      state.status = 'success';
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    [register.fulfilled]: (state, action) =>{
      state.status = 'success';
      state.user = action.payload;
    },
  }
})




export default userSlice.reducer