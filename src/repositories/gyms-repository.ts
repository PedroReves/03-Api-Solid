import { Gym, Prisma } from '@prisma/client'

export interface findManyGymsNearbyParams {
  latitude: number
  longitude: number
}

export interface GymRepository {
  findById(id: string): Promise<Gym | null>
  searchManyGyms(query: string, page: number): Promise<Gym[]>
  findManyGymsNearby(params: findManyGymsNearbyParams): Promise<Gym[]>
  create(data: Prisma.GymCreateInput): Promise<Gym>
}
