import { AxiosResponse } from 'axios';
import { IAboutUser } from '../models/IAboutUser';
import apiAxios from '../network';

export default class UserService {
  static async getUser(userId:string): Promise<AxiosResponse<IAboutUser>> {
    return apiAxios.get<IAboutUser>(`/users/${userId}`);
  }
}
