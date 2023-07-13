import { FetchGymsNearbyUseCase } from '../fetch-nearby-gyms'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'

export function makeFetchNearbyGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const UseCase = new FetchGymsNearbyUseCase(gymsRepository)

  return UseCase
}
