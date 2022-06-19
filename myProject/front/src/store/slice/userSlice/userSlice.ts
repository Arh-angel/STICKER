import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { IAboutUser } from '../../../models/IAboutUser';
import UserService from '../../../services/UserService';
import { RootState } from '../../store';

export const getUser = createAsyncThunk(
  'user/getUser',
  // eslint-disable-next-line consistent-return
  async (userData: any, { rejectWithValue }) => {
    try {
      const userId = userData;

      const response = await UserService.getUser(userId);

      return response.data;
    } catch (e:any) {
      rejectWithValue(e.response.data);
    }
  }
);
export interface UserState {
  user: IAboutUser;
  password: string,
  agreement: boolean
  userRegistered: boolean;
  userAuthorized: boolean;
  authorizationErrorStatus: boolean
}

const initialState: UserState = {
  user: {
    name: '',
    lastName: '',
    email: '',
    role: ''
  },
  password: '',
  agreement: true,
  userRegistered: false,
  userAuthorized: false,
  authorizationErrorStatus: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addFirstName: (state, action: PayloadAction<string>) => {
      state.user.name = action.payload;
    },
    addLastName: (state, action: PayloadAction<string>) => {
      state.user.lastName = action.payload;
    },
    addEmail: (state, action: PayloadAction<string>) => {
      state.user.email = action.payload;
    },
    addPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    addAgreementStatus: (state, action: PayloadAction<boolean>) => {
      state.agreement = action.payload;
    },
    addRole: (state, action: PayloadAction<string>) => {
      state.user.role = action.payload;
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
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload
      };
    });
  },
});

export const { addFirstName, addLastName, addEmail, addPassword, userRegistered, userAuthorized, authorizationErrorStatus, addAgreementStatus } = userSlice.actions;

export const selectUserName = (state: RootState) => state.user.user.name;
export const selectUserLastName = (state: RootState) => state.user.user.lastName;
// export const selectUserAge = (state: RootState) => state.user.age;
export const selectUserEmail = (state: RootState) => state.user.user.email;
export const selectUserPassword = (state: RootState) => state.user.password;
export const selectUserRegistered = (state: RootState) => state.user.userRegistered;
export const selectUserAuthorized = (state: RootState) => state.user.userAuthorized;
export const selectAuthorizationErrorStatus = (state: RootState) => state.user.authorizationErrorStatus;
export const selectAgreementStatus = (state: RootState) => state.user.agreement;
export const selectRole = (state: RootState) => state.user.user.role;

export default userSlice.reducer;
