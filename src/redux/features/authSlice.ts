import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IUserState {
  token: string | null;
}

const initialState: IUserState = {
  token: null,
};

export const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    logout: () => initialState,
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

//Selectors
export const authToken = (state: any) => state.auth.token;

export default authSlice.reducer;
export const {logout, setToken} = authSlice.actions;
