import { PrismaUserRepository } from '@/repositories/prisma/prisma-users-repo'
import { AuthenticateUseCase } from '../authenticate'

export function makeAuthenticateUseCase() {
  const UserRepository = new PrismaUserRepository()
  const authenticateUseCase = new AuthenticateUseCase(UserRepository)

  return authenticateUseCase
}
