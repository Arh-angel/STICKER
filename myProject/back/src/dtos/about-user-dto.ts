import { model } from 'mongoose';
class AboutUserDto {
  name;
  lastName;
  email;
  role;

  constructor(model) {
    this.name = model.name,
    this.lastName = model.lastName,
    this.email = model.email,
    this.role = model.role
  }
}

export default AboutUserDto;
