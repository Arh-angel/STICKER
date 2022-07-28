import * as hapi from '@hapi/hapi';
import * as inert from '@hapi/inert';
import * as cookie from '@hapi/cookie';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import dataSource from './ormconfig';
const Jwt = require('@hapi/jwt');
const HapiNowAuth = require('@now-ims/hapi-now-auth');

import routes from './src/router/routes'; 
import tokenService from './src/service/token-service';

dotenv.config()

const srv = hapi.server({
  port: process.env.PORT || 4000,
  routes: {
    cors: {
      origin: ['*'],
      credentials: true,
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
  HapiNowAuth
];

srv.register(plugins).then(() => {
  srv.auth.strategy('jwt-strategy', 'hapi-now-auth', {
    verifyJWT: true,
    keychain: [process.env.JWT_ACCESS_SECRET],
    validate: (request, token, h) => {
      const credentials = token.decodedJWT;
      const dataUser = tokenService.validateAccessToken(token.token);

        if (!dataUser) {
          return { 
            isValid: false,
            credentials: {...credentials}
          };
        };

        return { 
          isValid: true,
          credentials: {...credentials} 
        };
    },
  });


  srv.route(routes);

  srv.start().then(async () => {
    try {
      // await mongoose.connect(process.env.DB_URL, <any>{
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true
      // }, () => {
      //   console.log('MongoDB connected')
      // });

      // await dataSource.initialize();
      // await dataSource.runMigrations();

      console.log(`server started on PORT ${process.env.PORT}`);
    } catch (e) {
      console.log(e.message)
    }
  });
});
