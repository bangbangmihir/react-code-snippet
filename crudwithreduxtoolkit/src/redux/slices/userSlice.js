import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');

  return response.data;
});

export const createUser = createAsyncThunk('users/createUser', async (userData) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/users', userData);
  return response.data;
});

export const updateUser = createAsyncThunk('users/updateUser', async (userData) => {
  const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${userData.id}`, userData);
  return response.data;
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (userId) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return userId;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(user => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(user => user.id !== action.payload);
      });
  }
});

export default usersSlice.reducer;
