import { AxiosResponse } from 'axios';
import { IAd } from '../models/IAd';
import { IAds } from '../models/IAds';
import apiAxios from '../network';

export default class AdsService {
  static async createAd(id: string, userId: string, nameAd: string, category: string, price: string, phoneNumber: string, discripsion: string, foto: [], location: string, published: boolean): Promise<AxiosResponse<IAd>> {
    return apiAxios.post<IAd>('/addAd', { id, userId, nameAd, category, price, phoneNumber, discripsion, foto, location, published });
  }

  static async changeAd(id: string, changeKey: string, changeValue: string): Promise<AxiosResponse<IAd>> {
    return apiAxios.post<IAd>('/changeAd', { id, changeKey, changeValue });
  }

  static async getAds(): Promise<AxiosResponse<IAds>> {
    return apiAxios.get('/ads');
  }

  static async getCategoryAd(category: string): Promise<AxiosResponse<IAds>> {
    return apiAxios.get(`/ads/${category}`);
  }

  static async getAd(id: string): Promise<AxiosResponse<IAds>> {
    return apiAxios.get(`/ads/${id}`);
  }

  static async deleteAd(id: string): Promise<AxiosResponse<IAd>> {
    return apiAxios.post(`/deleteAd/${id}`);
  }
}
