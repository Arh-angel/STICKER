import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface UserState {
  firstName: string,
  lastName: string,
  age: string,
  email: string,
  password: string, // временно, нужно настроить валидацию формы
  agreement: boolean,
  userRegistered: boolean,
  userAuthorized: boolean,
  authorizationErrorStatus: boolean,
}

const initialState: UserState = {
  firstName: '',
  lastName: '',
  age: '',
  email: '',
  password: '',
  agreement: true,
  userRegistered: false,
  userAuthorized: false,
  authorizationErrorStatus: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    addLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    addAge: (state, action: PayloadAction<string>) => {
      state.age = action.payload;
    },
    addEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    addPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    addAgreementStatus: (state, action: PayloadAction<boolean>) => {
      state.agreement = action.payload;
    },
    userRegistered: (state, action: PayloadAction<boolean>) => {
      state.userRegistered = action.payload;
    },
    userAuthorized: (state, action: PayloadAction<boolean>) => {
      state.userAuthorized = action.payload;
    },
    authorizationErrorStatus: (state, action: PayloadAction<boolean>) => {
      state.authorizationErrorStatus = action.payload;
    },
  },
});

export const { addFirstName, addLastName, addAge, addEmail, addPassword, userRegistered, userAuthorized, authorizationErrorStatus, addAgreementStatus } = userSlice.actions;

export const selectUserFirstName = (state: RootState) => state.user.firstName;
export const selectUserLastName = (state: RootState) => state.user.lastName;
export const selectUserAge = (state: RootState) => state.user.age;
export const selectUserEmail = (state: RootState) => state.user.email;
export const selectUserPassword = (state: RootState) => state.user.password;
export const selectUserRegistered = (state: RootState) => state.user.userRegistered;
export const selectUserAuthorized = (state: RootState) => state.user.userAuthorized;
export const selectAuthorizationErrorStatus = (state: RootState) => state.user.authorizationErrorStatus;
export const selectAgreementStatus = (state: RootState) => state.user.agreement;

export default userSlice.reducer;
