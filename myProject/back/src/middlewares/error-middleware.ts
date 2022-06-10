import {ApiError} from '../exceptions/api-error';

export default (err, req, h) => {
  console.log(err);

  if(err instanceof ApiError) {
    return h.response({message: err.message, errors: err.errors}).code(err.status)
  }
  
  return h.response({message: 'Непредвиденная ошибка'}).code(500)
}