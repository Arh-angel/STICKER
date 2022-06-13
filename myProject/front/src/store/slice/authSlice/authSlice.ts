import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../../models/IUser';
import AuthService from '../../../services/AuthService';
import { AuthResponse } from '../../../models/response/AuthResponse';
import { API_URL } from '../../../network';
import { useAppDispatch } from '../../../hooks/storeHooks';
import { userAuthorized } from '../userSlice/userSlice';

export const registration = createAsyncThunk(
  'user/registration',
  // eslint-disable-next-line consistent-return
  async (userData: any, { rejectWithValue }) => {
    const dispatch = useAppDispatch();
    try {
      const { userName, userLastName, userEmail, userPassword } = userData;

      const response = await AuthService.registration(userName, userLastName, userEmail, userPassword);

      localStorage.setItem('token', response.data.accessToken);

      dispatch(userAuthorized(true));

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
    const dispatch = useAppDispatch();
    try {
      const { enteredEmail, enteredPassword } = userData;
      const response = await AuthService.login(enteredEmail, enteredPassword);

      localStorage.setItem('token', response.data.accessToken);

      dispatch(userAuthorized(true));

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
    const dispatch = useAppDispatch();
    try {
      await AuthService.logout();

      localStorage.removeItem('token');

      dispatch(userAuthorized(false));
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
  user: IUser
}

const initialState: UserState = {
  user: {
    id: '',
    email: '',
    isActivated: false
  }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
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
    builder.addCase(logout.fulfilled, (state) => {
      state.user = {} as IUser;
    });
  },
});

export default authSlice.reducer;
