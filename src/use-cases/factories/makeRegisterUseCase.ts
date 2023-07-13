import { PrismaUserRepository } from '@/repositories/prisma/prisma-users-repo'
import { RegisterUseCase } from '../register'

export function makeRegisterUseCase() {
  const UserRepository = new PrismaUserRepository()
  const registerUseCase = new RegisterUseCase(UserRepository)

  return registerUseCase
}
