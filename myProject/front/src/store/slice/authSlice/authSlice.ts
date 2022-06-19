import axios, { AxiosError } from 'axios';
import { AnyAction, createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { RejectedActionFromAsyncThunk } from '@reduxjs/toolkit/dist/matchers';
import { IUser } from '../../../models/IUser';
import AuthService from '../../../services/AuthService';
import { AuthResponse } from '../../../models/response/AuthResponse';
import { API_URL } from '../../../network';
import { RootState } from '../../store';

interface ValidationErrors {
  errorMessage: string
  field_errors: Record<string, string>
}

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
      const { enteredEmail, enteredPassword } = userData;
      const response = await AuthService.login(enteredEmail, enteredPassword);

      localStorage.setItem('token', response.data.accessToken);

      return response.data.user;
    } catch (err:any) {
      const error: AxiosError<ValidationErrors> = err;
      if (!error.response) {
        throw err;
      }

      return rejectWithValue(error.response.data);
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
      const response = await axios.get<AuthResponse>(`${API_URL}refresh`, { withCredentials: true });

      localStorage.setItem('token', response.data.accessToken);
      return response.data.user;
    } catch (e:any) {
      console.log(e.message);
    }
  }
);

export interface UserState {
  user: IUser,
  error: string
}

const initialState: UserState = {
  user: {
    id: '',
    email: '',
    isActivated: false
  },
  error: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUserId: (state, action: PayloadAction<string>) => {
      state.user.id = action.payload;
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
    builder.addCase(login.rejected, (state, action: { payload:any }) => {
      state.error = action.payload.message;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = {} as IUser;
    });
  },
});

export const { addUserId } = authSlice.actions;

export const selectUserId = (state: RootState) => state.auth.user.id;
export const selectUserEmail = (state: RootState) => state.auth.user.email;
export const selectUserIsActivated = (state: RootState) => state.auth.user.isActivated;
export const selectAuthError = (state: RootState) => state.auth.error;

export default authSlice.reducer;
