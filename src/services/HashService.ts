import { Service } from 'typedi'
import bcrypt from 'bcrypt'

@Service()
export class HashService {
  //camilo
  // DB
  //1ffaabca23hjh34j34h
  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10
    return bcrypt.hash(password, saltRounds)
  }


  //camilo //1ffaabca23hjh34j34h
  async comparePasswords(plain: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(plain, hashed)
  }
}


