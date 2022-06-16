import * as hapi from '@hapi/hapi';
import * as joi from 'joi';
import userController from '../controllers/user-controller';

export default [
  {
    method: 'POST',
    path: '/registration',
    options: {
      description: 'user registration',
      validate: {
        payload: joi.object({
          name: joi.string().required(),
          lastName: joi.string().required(),
          email: joi.string().required().email({tlds:{allow: false}}),
          password: joi.string().required().min(8),
        }),
      }
    },
    handler: (req:hapi.Request, h) => {
      return userController.registration(req.payload, h);
    }
  },
  {
    method: 'POST',
    path: '/login',
    handler: (req:hapi.Request, h) => {
      return userController.login(req.payload, h);
    }
  },
  {
    method: 'POST',
    path: '/logout',
    handler: (req:hapi.Request, h) => {
      return userController.logout(req, h);
    }
  },
  {
    method: 'GET',
    path: '/activate/{link}',
    handler: (req:hapi.Request, h) => {
      return userController.activate(req, h);
    }
  },
  {
    method: 'GET',
    path: '/refresh',
    handler: (req:hapi.Request, h) => {
      return userController.refresh(req, h);
    }
  },
  {
    method: 'GET',
    path: '/users/{userId}',
    options: {
      auth: {
        strategy: 'jwt-strategy'
      }
    },
    handler: (req: hapi.Request, h) => {
      return userController.getUser(req, h);
    }
  },







  // {
  //   method: 'POST',
  //   path: '/users',
  //   options: {
  //     description: 'create user',
  //     validate: {
  //        payload: joi.object({
  //          name: joi.string().required(),
  //          lastName: joi.string().required(),
  //          email: joi.string().required(),
  //          password: joi.string().required(),
  //          age: joi.number().min(18).max(100),
  //        }),
  //     }
  //   },
  //   handler: async (req: hapi.Request) => {
  //     const body = req.payload as any;
  //     const newUser = await new User({ name: body.name, lastName: body.lastName, email: body.email, password: body.password, age: body.age, role: 'user'});
  //     await newUser.save((err) => {
  //       if (err) throw err;
     
  //       console.log('User successfully saved.');
  //     });
  //     return 'ok';
  //   }
  // },
  // {
  //   method: 'GET',
  //   path: '/users',
  //   handler: () => {
  //     // return users.getUsers();
  //   }
  // },
  // {
  //   method: 'GET',
  //   path: '/users/{id}',
  //   handler: (req: hapi.Request) => {
  //     const user = User.findById(req.params.id, (err, user) => {
  //         if (err) {
  //           console.log(err.message)
  //         } 
  //         console.log(user)
  //         return user
  //       });

  //       return user
  //     }
  // },
  // {
  //   method: 'PATCH',
  //   path: '/users/{id}/change',
  //   options: {
  //     description: 'change user',
  //     validate: {
  //        payload: joi.object({
  //          name: joi.string(),
  //          lastName: joi.string(),
  //          email: joi.string(),
  //          password: joi.string(),
  //          age: joi.number().min(18).max(100),
  //        }),
  //     },
  //   },
  //   handler: (req: hapi.Request) => {
  //     // users.changeUser(req.params.id, req.payload);
  //     return 'ok';
  //   }
  // },
  // {
  //   method: 'DELETE',
  //   path: '/users/{id}',
  //   handler: (req: hapi.Request) => {
  //     // users.deleteUser(req.params.id);
  //     return 'ok'
  //   }
  // },

  // {
  //   method: 'PUT',
  //   path: '/ads',
  //   options: {
  //     description: 'create ad',
  //     validate: {
  //        payload: joi.object({
  //          name: joi.string().required(),
  //          category: joi.string().required(),
  //          price: joi.string().required(),
  //          date: joi.string().required(),
  //          phoneNumber: joi.string().required(),
  //          discription: joi.string().required(),
  //          foto: joi.string().required(),
  //          location: joi.string().required(),
  //          publication: joi.boolean().required(),
  //        }),
  //     }
  //   },
  //   handler: (req: hapi.Request) => {
  //     const body = req.payload as any;
  //     ads.createAd(body);
  //     return 'ok';
  //   }
  // },
  // {
  //   method: 'GET',
  //   path: '/ads',
  //   handler: () => {
  //     return ads.getAds();
  //   }
  // },
  // {
  //   method: 'GET',
  //   path: '/ads/{id}',
  //   handler: (req: hapi.Request) => {
  //     return ads.getAd(req.params.id);
  //   }
  // },
  // {
  //   method: 'PATCH',
  //   path: '/products/{id}/change',
  //   options: {
  //     description: 'change products',
  //     validate: {
  //       payload: joi.object({
  //         name: joi.string().required(),
  //         category: joi.string().required(),
  //         price: joi.string().required(),
  //         date: joi.string().required(),
  //         phoneNumber: joi.string().required(),
  //         discription: joi.string().required(),
  //         foto: joi.string().required(),
  //         location: joi.string().required(),
  //         publication: joi.boolean().required(),
  //       }),
  //     },
  //   },
  //   handler: (req: hapi.Request) => {
  //     ads.changeAd(req.params.id, req.payload);
  //     return 'ok';
  //   }
  // },
  // {
  //   method: 'DELETE',
  //   path: '/ads/{id}',
  //   handler: (req: hapi.Request) => {
  //     ads.deleteAd(req.params.id);
  //     return 'ok'
  //   }
  // },

  // {
  //   method: 'GET',
  //   path: '/static/{data*}',
  //   handler: {
  //     directory: {
  //       listing: true,
  //       path: './'
  //     }
  //   }
  // },
]
