import { model } from 'mongoose';
class UserDto {
  id;
  email;
  role;

  constructor(model) {
    this.id = model._id,
    this.email = model.email,
    this.role = model.role
  }
}

export default UserDto;
