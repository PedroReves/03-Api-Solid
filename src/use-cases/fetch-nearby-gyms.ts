import { Gym } from '@prisma/client'
import { GymRepository } from '@/repositories/gyms-repository'

interface FetchGymsNearbyUseCaseParams {
  userlatitude: number
  userlongitude: number
}

interface FetchGymsNearbyUseCaseResponse {
  nearbyGyms: Gym[]
}

export class FetchGymsNearbyUseCase {
  constructor(private gymsRepository: GymRepository) {}

  async execute({
    userlatitude,
    userlongitude,
  }: FetchGymsNearbyUseCaseParams): Promise<FetchGymsNearbyUseCaseResponse> {
    const nearbyGyms = await this.gymsRepository.findManyGymsNearby({
      latitude: userlatitude,
      longitude: userlongitude,
    })

    return {
      nearbyGyms,
    }
  }
}
