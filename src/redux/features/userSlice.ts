import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {IUser} from '../../types/user';

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
};

export const getUser = createAsyncThunk('user/getUser', async () => {
  try {
    const response = await axios.get('http://10.0.2.2/users');
    return response.data;
  } catch (error) {
    console.log('Error while fetching data => ', error);
  }
});

export const useSlice = createSlice({
  initialState,
  name: 'userList',
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUser.pending, (state, action) => {
        console.log('Fetching data => ', action);
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        console.log('Error while fetching data => ', action);
      });
  },
});

//Selectors
export const selectUser = (state: any) => state.userList.user;

export default useSlice.reducer;
export const {logout, setUser} = useSlice.actions;
