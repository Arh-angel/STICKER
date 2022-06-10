import * as Boom from '@hapi/boom';
import {ApiError} from '../exceptions/api-error';
import tokenService from '../service/token-service';

export default (req, h) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if(!authorizationHeader) {
      return new Error('Пользователь не авторизован');
    }

    const accessToken = authorizationHeader.split(' ')[1];

    console.log(accessToken);

    if(!accessToken) {
      return new Error('Пользователь не авторизован');
    }

    const userData = tokenService.validateAccessToken(accessToken);

    console.log(userData);

    if(!userData) {
      return new Error('Пользователь не авторизован');
    }

    console.log(userData);

    return req.user = userData;
  } catch(e) {
    return Boom.unauthorized(e);
  }
}