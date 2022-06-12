import axios, { AxiosResponse } from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../models/IUser';
import { RootState } from '../../store';
import AuthService from '../../../services/AuthService';
import { AuthResponse } from '../../../models/response/AuthResponse';
import apiAxios, { API_URL } from '../../../network';
import { useAppDispatch } from '../../../hooks/storeHooks';

const dispatch = useAppDispatch();

export const registration = createAsyncThunk(
  'user/registration',
  // eslint-disable-next-line consistent-return
  async (userData: any, { rejectWithValue }) => {
    try {
      const { userName, userLastName, userEmail, userPassword } = userData;

      const response = await AuthService.registration(userName, userLastName, userEmail, userPassword);

      localStorage.setItem('token', response.data.accessToken);
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
      const { userEmail, userPassword } = userData;
      const response = await AuthService.login(userEmail, userPassword);

      localStorage.setItem('token', response.data.accessToken);
      return response.data.user;
    } catch (e:any) {
      rejectWithValue(e.response.data);
    }
  }
);

export const logout = createAsyncThunk(
  'user/logout',
  // eslint-disable-next-line consistent-return
  async () => {
    try {
      await AuthService.logout();

      localStorage.removeItem('token');
    } catch (e:any) {
      console.log(e.message);
    }
  }
);
export const checkAuth = createAsyncThunk(
  'user/checkAuth',

  // eslint-disable-next-line consistent-return
  async () => {
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true });

      localStorage.setItem('token', response.data.accessToken);
      return response.data.user;
    } catch (e:any) {
      console.log(e.message);
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
      state.userAuthorized = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload
      };
      state.userAuthorized = false;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = {} as IUser;
      state.userAuthorized = false;
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
