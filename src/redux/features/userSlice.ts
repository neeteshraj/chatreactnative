import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../../types/user';

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
};

export const useSlice = createSlice({
  initialState,
  name: 'userList',
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

//Selectors
export const selectUser = (state: any) => state.userList.user;

export default useSlice.reducer;
export const {logout, setUser} = useSlice.actions;
