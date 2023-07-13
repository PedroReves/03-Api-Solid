import { FetchUserCheckInHistoryUseCase } from '../fetch-users-checkins-history'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-checkin-repository'

export function makeFetchUsersCheckInHistoryUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const UseCase = new FetchUserCheckInHistoryUseCase(checkInsRepository)

  return UseCase
}
