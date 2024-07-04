import { Service } from 'typedi'
import { TokenService } from '../services/TokenService'
import { HashService } from '../services/HashService'
import { UserRepository } from '../repositories/UserRepository'
import { User } from '../db/models/user'


@Service()
export class AuthenticationGateway {
  constructor(
    private tokenService: TokenService,
    private hashService: HashService,
    private partnerRepository: UserRepository
  ) {
  }

  async register(username: string, email: string, password: string): Promise<string> {
    const hashedPassword = await this.hashService.hashPassword(password)
    await this.partnerRepository.save({ username, email, password: hashedPassword } as User)
    return this.tokenService.generateToken({ email })
  }

  async login(email: string, password: string): Promise<string | null> {
    const partner = await this.partnerRepository.findByEmail(email)
    if (partner && await this.hashService.comparePasswords(password, partner.password)) {
      return this.tokenService.generateToken({ email })
    }
    return null
  }
}