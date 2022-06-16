import { TokenModel } from '../models/token-model';
const Jwt = require('@hapi/jwt');

class TokenService {
  generateTokens(payload) {
    
    const accessToken = Jwt.token.generate(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: "30m"})
    const refreshToken = Jwt.token.generate(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: "30d"})

    return {
      accessToken,
      refreshToken
    }
  }

  validateAccessToken(token) {
    try {
      console.log('this token', token)

      const userData = Jwt.token.verify(token, process.env.JWT_ACCESS_SECRET);

      console.log(userData);
      return userData;
    } catch(e) {
      console.log(e.message)
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = Jwt.token.verify(token, process.env.JWT_REFRESH_SECRET);
      return userData;
    } catch(e) {
      return null;
    }
  }

  async saveToken(userId, refreshToken) {
    const tokenData:any = await TokenModel.findOne({user: userId})

    if(tokenData) {
      tokenData.refreshToken = refreshToken;

      return await tokenData.save();
    }

    const token = await TokenModel.create({user: userId, refreshToken})

    return token;
  }

  async removeToken(refreshToken) {
    const tokenData = await TokenModel.deleteOne({refreshToken});

    return tokenData;
  }

  async findToken(refreshToken) {
    const tokenData = await TokenModel.findOne({refreshToken});

    return tokenData;
  }
}

export default new TokenService();
