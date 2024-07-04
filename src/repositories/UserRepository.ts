import { Service } from 'typedi'
import UserModel, { User } from '../db/models/user'


@Service()
export class UserRepository {

  // tslint:disable-next-line:no-empty
  constructor() {}

  async save(partner: User): Promise<User> {
    const newUser = new UserModel(partner)
    return newUser.save()
  }

  async findByEmail(email: string): Promise<User | null> {
    return UserModel.findOne({ email })
  }
}
