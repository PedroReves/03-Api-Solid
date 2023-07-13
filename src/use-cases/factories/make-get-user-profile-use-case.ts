import { PrismaUserRepository } from '@/repositories/prisma/prisma-users-repo'
import { GetUserProfileUseCase } from '../getUserProfile'

export function makeGetUserProfileUseCase() {
  const UserRepository = new PrismaUserRepository()
  const UseCase = new GetUserProfileUseCase(UserRepository)

  return UseCase
}
