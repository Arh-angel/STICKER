import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IAd } from '../../../models/IAd';
import AdsService from '../../../services/AdsService';

export const create = createAsyncThunk(
  'ads/create',
  // eslint-disable-next-line consistent-return
  async (userData: any, { rejectWithValue }) => {
    try {
      const { userId, nameAd, category, price, phoneNumber, description, foto, location, published } = userData;

      const response = await AdsService.createAd(userId, nameAd, category, price, phoneNumber, description, foto, location, published);

      return response.data.id;
    } catch (e:any) {
      rejectWithValue(e.response.data);
    }
  }
);

export const change = createAsyncThunk(
  'ads/change',
  // eslint-disable-next-line consistent-return
  async (userData: any, { rejectWithValue }) => {
    try {
      const { id, changeKey, changeValue } = userData;

      const response = await AdsService.changeAd(id, changeKey, changeValue);

      return response.data.id;
    } catch (e:any) {
      rejectWithValue(e.response.data);
    }
  }
);

export const getAds = createAsyncThunk(
  'ads/getAds',
  // eslint-disable-next-line consistent-return
  async () => {
    try {
      const response = await AdsService.getAds();

      return response.data;
    } catch (e:any) {
      return e.message;
    }
  }
);

export const getUserAds = createAsyncThunk(
  'ads/getUserAds',
  // eslint-disable-next-line consistent-return
  async (userData: any, { rejectWithValue }) => {
    try {
      const { userAds } = userData;

      const response = await AdsService.getUserAds(userAds);

      return response.data;
    } catch (e:any) {
      rejectWithValue(e.response.data);
    }
  }
);

export const searchAds = createAsyncThunk(
  'ads/searchAds',
  // eslint-disable-next-line consistent-return
  async (userData: any, { rejectWithValue }) => {
    try {
      const { serachValue } = userData;

      const response = await AdsService.searchAds(serachValue);

      return response.data;
    } catch (e:any) {
      rejectWithValue(e.response.data);
    }
  }
);

export const getCategoryAd = createAsyncThunk(
  'ads/getCategoryAd',
  // eslint-disable-next-line consistent-return
  async (userData: any, { rejectWithValue }) => {
    try {
      const category = userData;

      const response = await AdsService.getCategoryAd(category);

      return response.data;
    } catch (e:any) {
      rejectWithValue(e.response.data);
    }
  }
);

export const getAd = createAsyncThunk(
  'ads/getAd',
  // eslint-disable-next-line consistent-return
  async (userData: any, { rejectWithValue }) => {
    try {
      const { id } = userData;

      const response = await AdsService.getAd(id);

      return response.data;
    } catch (e:any) {
      rejectWithValue(e.response.data);
    }
  }
);

export const deleteAd = createAsyncThunk(
  'ads/deleteAd',
  // eslint-disable-next-line consistent-return
  async (userData: any, { rejectWithValue }) => {
    try {
      const { id } = userData;

      const response = await AdsService.deleteAd(id);

      return response.data.id;
    } catch (e:any) {
      rejectWithValue(e.response.data);
    }
  }
);
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
    description: '',
    date: '',
    foto: [],
    location: '',
    published: false,
    views: 0
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
    addDescriptionAd: (state, action: PayloadAction<string>) => {
      state.ad.description = action.payload;
    },
    addDateAd: (state, action: PayloadAction<string>) => {
      state.ad.date = action.payload;
    },
    // userFoto: (state, action: PayloadAction<File>) => {
    //   state.ad.foto = state.ad.foto?.push(action.payload);
    // },
    addLocationAd: (state, action: PayloadAction<string>) => {
      state.ad.location = action.payload;
    },
    addPublishedAd: (state, action: PayloadAction<boolean>) => {
      state.ad.published = action.payload;
    },
    addViewsAd: (state, action: PayloadAction<number>) => {
      state.ad.views = action.payload;
    },
    clearAdState: (state) => {
      state.ad = {} as IAd;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(create.fulfilled, (state, action) => {
    });
    builder.addCase(change.fulfilled, (state, action) => {
    });
    builder.addCase(getAds.fulfilled, (state, action) => {
      state.ads = {
        ...state.ads,
        ...action.payload
      };
    });
    builder.addCase(searchAds.fulfilled, (state, action) => {
      state.ads = {
        ...state.ads,
        ...action.payload
      };
    });
    builder.addCase(getCategoryAd.fulfilled, (state, action) => {
      state.ads = {
        ...state.ads,
        ...action.payload
      };
    });
    builder.addCase(getAd.fulfilled, (state, action) => {
      state.ad = {
        ...state.ad,
        ...action.payload
      };
    });
    builder.addCase(deleteAd.fulfilled, (state, action) => {
      state.ad = {} as IAd;
    });
  },
});

export const { addIdAd, addUserIdAd, addNameAd, addCategoryAd, addPriceAd, addPhoneNumberAd, addDescriptionAd, addDateAd, addLocationAd, addPublishedAd, addViewsAd, clearAdState } = adsSlice.actions;

export const selectAds = (state: RootState) => state.ads.ads;
export const selectAd = (state: RootState) => state.ads.ad;
export const selectIdAd = (state: RootState) => state.ads.ad.id;
export const selectUserIdAd = (state: RootState) => state.ads.ad.userId;
export const selectNameAd = (state: RootState) => state.ads.ad.nameAd;
export const selectCategoryAd = (state: RootState) => state.ads.ad.category;
export const selectPriceAd = (state: RootState) => state.ads.ad.price;
export const selectPhoneNumberAd = (state: RootState) => state.ads.ad.phoneNumber;
export const selectDescriptionAd = (state: RootState) => state.ads.ad.description;
export const selectDateAd = (state: RootState) => state.ads.ad.date;
export const selectFotoAd = (state: RootState) => state.ads.ad.foto;
export const selectLocationAd = (state: RootState) => state.ads.ad.location;
export const selectPublishedAd = (state: RootState) => state.ads.ad.published;
export const selectViewsAd = (state: RootState) => state.ads.ad.views;

export default adsSlice.reducer;
