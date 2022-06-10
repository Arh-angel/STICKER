import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {type:String, required: true},
  lastName: {type:String, required: true},
  email: {type:String, required: true, unique: true},
  password: {type:String, required: true},
  isActivated: {type:Boolean, default: false},
  activationLink: {type:String},
  age: {type:String}
});

export const UserModel = mongoose.model('User', userSchema);
