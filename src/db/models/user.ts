// models/user.ts

import mongoose, { Document, Schema } from 'mongoose'

export type User = {
  name: string;
  username: string;
  email: string;
  password: string;
}

// Let's extend Document using our User type
export interface IUser extends Document, User {
}

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: false,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

const UserModel = mongoose.model<IUser>('User', userSchema)
export default UserModel
