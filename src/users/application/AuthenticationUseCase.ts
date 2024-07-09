import { Service } from 'typedi'
import { TokenService } from '../externalServices/TokenService'
import { HashService } from '../externalServices/HashService'
import { UserRepository } from '../repositories/UserRepository'
import { User } from '../../db/Entities/User'


@Service()
export class AuthenticationUseCase {
  constructor(
    private tokenService: TokenService,
    private hashService: HashService,
    private userRepository: UserRepository
  ) {
  }

  async register(username: string, email: string, password: string): Promise<string> {
    const hashedPassword = await this.hashService.hashPassword(password)
    await this.userRepository.save({ username, email, password: hashedPassword } as User)
    return this.tokenService.generateToken({ email })
  }

  async login(email: string, username: string, password: string): Promise<string | null> {
    const searchCriteria = email ? {email} : {username}
    const user = await this.userRepository.findOneBy(searchCriteria)
    console.log('🚀user >> ', user)
    if (user && await this.hashService.comparePasswords(password, user.password)) {
      return this.tokenService.generateToken({ email })
    }
    return null
  }

}
