import userService from '../service/user-service';
import * as cookie from '@hapi/cookie';
import errorMiddleware from '../middlewares/error-middleware';
import * as ApiError from '../exceptions/api-error';
import * as Boom from '@hapi/boom';
import { Request, ResponseApplicationState } from '@hapi/hapi';
import authMiddleware from '../middlewares/auth-middleware';
const dotenv = require('dotenv');
dotenv.config();

class UserController {
  async registration(req, h) {
    try {
      const { name, lastName, email, password } = req;

      const userData = await userService.registration(name, lastName, email, password);

      h.state('refreshToken', userData.refreshToken, {
        ttl: 30 * 24 * 60 * 60 *1000,
        isHttpOnly: true
      });
      
      return h.response(userData);
    } catch(e) {
      console.log(e);
       return Boom.badRequest(e)
      //  return errorMiddleware(e, req, h);
    }
  }

  async login(req, h) {
    try {
      const { email, password } = req;

      const userData = await userService.login(email, password);

      h.state('refreshToken', userData.refreshToken, {
        ttl: 30 * 24 * 60 * 60 *1000,
        isHttpOnly: true
      });
      
      return h.response(userData);
    } catch(e) {
      return Boom.badRequest(e)
      // errorMiddleware(e, req, h);
    }
  }

  async logout(req, h) {
    try {
      const refreshToken = req.state.refreshToken;
      
      const token = await userService.logout(refreshToken);
      return h.response(token).unstate('refreshToken');
    } catch(e) {
      return Boom.badRequest(e)
      // errorMiddleware(e, req, h);
    }
  }

  async activate(req, h) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      
      return h.redirect(process.env.CLIENT_URL);
    } catch(e) {
      return Boom.badRequest(e)
      // errorMiddleware(e, req, h);
    }
  }

  async refresh(req, h) {
    try {
      const refreshToken = req.state.refreshToken;

      const userData = await userService.refresh(refreshToken);

      console.log('this point', userData)

      h.state('refreshToken', userData.refreshToken, {
        ttl: 30 * 24 * 60 * 60 *1000,
        isHttpOnly: true
      });
      
      return h.response(userData);
    } catch(e) {
      return Boom.unauthorized(e)
      // errorMiddleware(e, req, h);
    }
  }

  async getUser(req, h) {
    try {
      // const authUser = await authMiddleware(req, h);

      // if (!authUser) {
      //   throw new Error('Пользователь не авторизован');
      // }

      const id = req.params.userId;
      const user = await userService.getUser(id);

      return h.response(user)
    } catch(e) {
      return Boom.badRequest(e)
      // errorMiddleware(e, req, h);
    }
  }
}

export default new UserController();
