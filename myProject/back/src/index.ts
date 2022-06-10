import * as hapi from '@hapi/hapi';
import * as inert from '@hapi/inert';
import * as cookie from '@hapi/cookie';
import * as Jwt from '@hapi/jwt';
import * as Boom from '@hapi/boom';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import * as errorMiddleware from './middlewares/error-middleware';
import authMiddleware from './middlewares/auth-middleware';

import routes from './router/routes'; 
import tokenService from './service/token-service';

dotenv.config()

const srv = hapi.server({
  port: process.env.PORT || 4000,
  routes: {
    cors: {
      origin: ['*'],
      credentials: true
    },
    files: {
      relativeTo: './data'
    }
  }
});

const plugins: any[] = [
  inert,
  cookie,
  Jwt,
];

srv.register(plugins).then(() => {
//   srv.auth.strategy('jwtStrategy', 'jwt', {
//     keys: 'secret',
//         verify: {
//           aud: 'urn:audience:test',
//           iss: 'urn:issuer:test',
//           sub: false,
//           nbf: true,
//           exp: true,
//           maxAgeSec: 30 * 24 * 60 * 60 * 1000,
//           timeSkewSec: 15
//         },
//         validate: (artifacts, request, options) => {
//           try {
//             console.log(artifacts, request, options)
//             const authorizationHeader = artifacts.header;
//             console.log(authorizationHeader);
//             if(!authorizationHeader) {
//               return new Error('Пользователь не авторизован');
//             }
        
//             const accessToken = authorizationHeader.split(' ')[1]; 
//             console.log(accessToken);
//             if(!accessToken) {
//               return new Error('Пользователь не авторизован');
//             }

//             const validToken = tokenService.validateAccessToken(accessToken);
            
//             if(!validToken) {
//               return new Error('Пользователь не авторизован');
//             }

//             return { isValid: true };
//           }
//           catch (err) {
//             return {
//                 isValid: false,
//                 error: err.message
//             };
//           }
//         }
// });


  srv.route(routes);

  srv.start().then(async () => {
    try {
      await mongoose.connect(process.env.DB_URL, <any>{
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, () => {
        console.log('MongoDB connected')
      });

      console.log(`server started on PORT ${process.env.PORT}`);
    } catch (e) {
      console.log(e.message)
    }
  });
});
