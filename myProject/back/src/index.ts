import * as hapi from '@hapi/hapi';

import * as inert from '@hapi/inert';

import routes from './routes';

const srv = hapi.server({
  port: 2000,
  routes: {
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
    console.log('server started');
  });
});
