import { AxiosResponse } from 'axios';
import { IUser } from '../models/IUser';
import apiAxios from '../network';

export default class UserService {
  static async getUser(userId:string): Promise<AxiosResponse<IUser>> {
    return apiAxios.get<IUser>(`/users/${userId}`);
  }
}
