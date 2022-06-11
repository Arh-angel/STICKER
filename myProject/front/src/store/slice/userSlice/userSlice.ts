import { AxiosResponse } from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../models/IUser';
import { RootState } from '../../store';
import AuthService from '../../../services/AuthService';
import { AuthResponse } from '../../../models/response/AuthResponse';
import apiAxios from '../../../network';

export const registration = createAsyncThunk(
  'user/registration',
  // eslint-disable-next-line consistent-return
  async (userData: any, { rejectWithValue }) => {
    try {
      console.log(userData);

      const { userName, userLastName, userEmail, userPassword } = userData;

      console.log(userName, userLastName, userEmail, userPassword);
      const response = await AuthService.registration(userName, userLastName, userEmail, userPassword);

      console.log(response.data);

      localStorage.setItem('accessToken', response.data.accessToken);
      return response.data.user;
    } catch (e:any) {
      rejectWithValue(e.response.data);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  // eslint-disable-next-line consistent-return
  async (userData: any, { rejectWithValue }) => {
    try {
      const { email, password } = userData;
      const response = await AuthService.login(email, password);
      return response.data.user;
    } catch (e:any) {
      rejectWithValue(e.response.data);
    }
  }
);
export interface UserState {
  user: IUser,
  status: string | null;
  error: string | null;
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  password: string; // временно, нужно настроить валидацию формы
  agreement: boolean;
  userRole: string;
  userRegistered: boolean;
  userAuthorized: boolean;
  authorizationErrorStatus: boolean
}

const initialState: UserState = {
  user: {
    id: '',
    email: '',
    isActivated: false
  },
  status: null,
  error: null,
  firstName: '',
  lastName: '',
  age: '',
  email: '',
  password: '',
  agreement: true,
  userRole: '',
  userRegistered: false,
  userAuthorized: false,
  authorizationErrorStatus: false
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
    addUserRole: (state, action: PayloadAction<string>) => {
      state.userRole = action.payload;
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
    builder.addCase(registration.fulfilled, (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload
      };
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload
      };
    });
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
export const selectUserRole = (state: RootState) => state.user.userRole;

export default userSlice.reducer;
