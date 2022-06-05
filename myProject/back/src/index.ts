import * as hapi from '@hapi/hapi';

import * as inert from '@hapi/inert';

import mongoose from 'mongoose';

import routes from './routes';

mongoose.connect('mongodb://localhost:27017/STICKER').then(() => {
  console.log('MongoDB connection...')
}).catch((err) => {
  console.log(err)
});

const srv = hapi.server({
  port: 3001,
  routes: {
    cors: {
      origin: ['*']
    },
    files: {
      relativeTo: './data'
    }
  }
});

const plugins: any[] = [
  inert
];

srv.register(plugins).then(() => {
  srv.route(routes);

  srv.start().then(() => {
    console.log(`server started`);
  });
});
