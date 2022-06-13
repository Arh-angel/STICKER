import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice/userSlice';
import adsReducer from './slice/adsSlice/adsSlise';

const rootReducer = combineReducers({
  user: userReducer,
  ads: adsReducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
