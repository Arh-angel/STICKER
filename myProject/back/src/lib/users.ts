import * as hapi from '@hapi/hapi';
import * as joi from 'joi';
import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: String,
  lastName: String,
  email: String,
  password: String,
  age: String
});

export const User = mongoose.model('User', userSchema);

// export const usersRouts = [
//   {
//     method: 'POST',
//     path: '/users',
//     options: {
//       description: 'create user',
//       validate: {
//          payload: joi.object({
//            name: joi.string().required(),
//            lastName: joi.string().required(),
//            email: joi.string().required(),
//            password: joi.string().required(),
//            age: joi.number().min(18).max(100),
//          }),
//       }
//     },
//     handler: async (req: hapi.Request) => {
//       const body = req.payload as any;
//       const frodo = new Users({ name: 'Frodo', inventory: { ringOfPower: 1 }});
//       await frodo.save();
      
//       return 'ok';
//     }
//   },
//   {
//     method: 'GET',
//     path: '/users',
//     handler: () => {
//       return users.getUsers();
//     }
//   },
//   {
//     method: 'GET',
//     path: '/users/{id}',
//     handler: (req: hapi.Request) => {
//       return users.getUser(req.params.id);
//     }
//   },
//   {
//     method: 'PATCH',
//     path: '/users/{id}/change',
//     options: {
//       description: 'change user',
//       validate: {
//          payload: joi.object({
//            name: joi.string(),
//            lastName: joi.string(),
//            email: joi.string(),
//            password: joi.string(),
//            age: joi.number().min(18).max(100),
//          }),
//       },
//     },
//     handler: (req: hapi.Request) => {
//       users.changeUser(req.params.id, req.payload);
//       return 'ok';
//     }
//   },
//   {
//     method: 'DELETE',
//     path: '/users/{id}',
//     handler: (req: hapi.Request) => {
//       users.deleteUser(req.params.id);
//       return 'ok'
//     }
//   }
// ]

// const users = [];

// export function createUser(newUser) {
//   users.push(newUser);
// };

// export function getUsers() {
//   return users;
// };

// export function getUser(id) {
//   return users[id];
// };

// export function changeUser(id:number, userValue) {
//   users[id] = {
//     ...users[id],
//     ...userValue
//   };
// };

// export function deleteUser(id) {
//   users.splice(id, 1);
// };