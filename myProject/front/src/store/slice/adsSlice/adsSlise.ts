import axios, { AxiosResponse } from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../models/IUser';
import { RootState } from '../../store';
import AuthService from '../../../services/AuthService';
import { AuthResponse } from '../../../models/response/AuthResponse';
import apiAxios, { API_URL } from '../../../network';
import { useAppDispatch } from '../../../hooks/storeHooks';
import { IAds } from '../../../models/IAds';
import { IAd } from '../../../models/IAd';

export interface AdsState {
  ads: IAd[];
  ad: IAd;
}

const initialState: AdsState = {
  ads: [],
  ad: {
    id: '',
    userId: '',
    nameAd: '',
    category: '',
    price: '',
    phoneNumber: '',
    discripsion: '',
    foto: [],
    location: '',
    published: false
  }
};

export const adsSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {
    addIdAd: (state, action: PayloadAction<string>) => {
      state.ad.id = action.payload;
    },
    addUserIdAd: (state, action: PayloadAction<string>) => {
      state.ad.userId = action.payload;
    },
    addNameAd: (state, action: PayloadAction<string>) => {
      state.ad.nameAd = action.payload;
    },
    addCategoryAd: (state, action: PayloadAction<string>) => {
      state.ad.category = action.payload;
    },
    addPriceAd: (state, action: PayloadAction<string>) => {
      state.ad.price = action.payload;
    },
    addPhoneNumberAd: (state, action: PayloadAction<string>) => {
      state.ad.phoneNumber = action.payload;
    },
    addDiscripsionAd: (state, action: PayloadAction<string>) => {
      state.ad.discripsion = action.payload;
    },
    // userFoto: (state, action: PayloadAction<File>) => {
    //   state.ad.foto = state.ad.foto?.push(action.payload);
    // },
    addLocationAd: (state, action: PayloadAction<string>) => {
      state.ad.location = action.payload;
    },
    addPublishedAdd: (state, action: PayloadAction<boolean>) => {
      state.ad.published = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(registration.fulfilled, (state, action) => {
    //   state.user = {
    //     ...state.user,
    //     ...action.payload
    //   };
    //   state.userAuthorized = false;
    // });
  },
});

export const { addIdAd, addUserIdAd, addNameAd, addCategoryAd, addPriceAd, addPhoneNumberAd, addDiscripsionAd, addLocationAd, addPublishedAdd } = adsSlice.actions;

export const selectIdAd = (state: RootState) => state.ads.ad.id;
export const selectUserIdAd = (state: RootState) => state.ads.ad.userId;
export const selectNameAd = (state: RootState) => state.ads.ad.nameAd;
export const selectCategoryAd = (state: RootState) => state.ads.ad.category;
export const selectPriceAd = (state: RootState) => state.ads.ad.price;
export const selectPhoneNumberAd = (state: RootState) => state.ads.ad.phoneNumber;
export const selectDiscripsionAd = (state: RootState) => state.ads.ad.discripsion;
export const selectFotoAd = (state: RootState) => state.ads.ad.foto;
export const selectLocationAd = (state: RootState) => state.ads.ad.location;
export const selectPublishedAd = (state: RootState) => state.ads.ad.published;

export default adsSlice.reducer;
