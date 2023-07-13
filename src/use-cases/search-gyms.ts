import { Gym } from '@prisma/client'
import { GymRepository } from '@/repositories/gyms-repository'

interface SearchGymsUseCaseParams {
  query: string
  page: number
}

interface SearchGymsUseCaseResponse {
  gyms: Gym[]
}

export class SearchGymsUseCase {
  constructor(private gymsRepository: GymRepository) {}

  async execute({
    query,
    page,
  }: SearchGymsUseCaseParams): Promise<SearchGymsUseCaseResponse> {
    const gyms = await this.gymsRepository.searchManyGyms(query, page)

    return {
      gyms,
    }
  }
}
