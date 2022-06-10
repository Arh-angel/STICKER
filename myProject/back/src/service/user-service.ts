import * as bcrypt from 'bcrypt';
import * as uuid from 'uuid';
import mailService from './mail-service';
import tokenService from './token-service';
import { UserModel } from '../models/user-model';
import UserDto from '../dtos/user-dto';
import {ApiError} from '../exceptions/api-error';

class UserService {
  async registration(name, lastName, email, password) {
    const condidate = await UserModel.findOne({email});

    if (condidate) {
      // throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
      throw new Error(`Пользователь с почтовым адресом ${email} уже существует`)
    }

    const hashPassword = await bcrypt.hash(password, 3);

    const activationLink = uuid.v4()

    const user = await UserModel.create({name, lastName, email, password: hashPassword, activationLink})

    await mailService.sendActivationMail(email, `${process.env.API_URL}/activate/${activationLink}`);

    const userDto = new UserDto(user);

    const tokens = tokenService.generateTokens({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto
    }
  }

  async activate(activationLink) {
    const user = await UserModel.findOne({activationLink});

    if(!user) {
      // throw ApiError.BadRequest('Некорректная ссылка активации');
      throw new Error(`Некорректная ссылка активации`)
    }

    user.isActivated = true;

    await user.save();
  }

  async login(email, password) {
    const user = await UserModel.findOne({email});

    if(!user) {
      // throw ApiError.BadRequest('Пользователь c таким email не был найден')
      throw new Error('Пользователь c таким email не был найден')
    }

    const isPasswordEquals = await bcrypt.compare(password, user.password);

    if(!isPasswordEquals) {
      // throw ApiError.BadRequest('Некорректный пароль')
      throw new Error('Некорректный пароль')
    }

    const userDto = new UserDto(user);

    const tokens = tokenService.generateTokens({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto
    }
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);

    return token;
  }

  async refresh(refreshToken) {
    if(!refreshToken) {
      // throw ApiError.UnauthorizedError()
      throw new Error('Пользователь не авторизован')
    }

    const userData = tokenService.validateRefreshToken(refreshToken);

    const tokenFromDb = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) {
      // throw ApiError.UnauthorizedError()
      throw new Error('Пользователь не авторизован')
    }

    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);

    const tokens = tokenService.generateTokens({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto
    }
  }

  async getUser(id) {
    const user = await UserModel.findById(id);

    if (!user) {
      // throw ApiError.UnauthorizedError()
      throw new Error('Пользователь не найден')
    }

    return user
  } 
}

export default new UserService();