import { Service } from 'typedi'
import UserEntity, { User } from '../../db/Entities/User'


@Service()
export class UserRepository {

  // tslint:disable-next-line:no-empty
  constructor() {}

  async save(partner: User): Promise<User> {
    const newUser = new UserEntity(partner)
    return newUser.save()
  }

  async findByEmail(email: string): Promise<User | null> {
    return UserEntity.findOne({ email })
  }

  async findOneBy(searchCriteria:Partial<User>) {
    return UserEntity.findOne(searchCriteria)
  }
}
