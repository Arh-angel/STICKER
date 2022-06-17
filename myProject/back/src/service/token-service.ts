import { TokenModel } from '../models/token-model';
const Jwt = require('@hapi/jwt');

const verifyToken = (artifact, secret, options = {}) => {
  try {
      Jwt.token.verify(artifact, secret, options);
      return { isValid: true };
  }
  catch (err) {
      return {
          isValid: false,
          error: err.message
      };
  }
};
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
      const decodedToken = Jwt.token.decode(token);

      const userData = verifyToken(decodedToken, process.env.JWT_ACCESS_SECRET);

      if (!userData.isValid) {
        throw new Error(userData.error);
      }

      return decodedToken.decoded.payload;
    } catch(e) {
      console.log(e.message)
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const decodedToken = Jwt.token.decode(token);
      const userData = verifyToken(decodedToken, process.env.JWT_REFRESH_SECRET);

      if (!userData.isValid) {
        throw new Error(userData.error);
      }

      return decodedToken.decoded.payload;
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
