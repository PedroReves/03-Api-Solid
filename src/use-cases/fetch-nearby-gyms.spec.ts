import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { FetchGymsNearbyUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchGymsNearbyUseCase

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchGymsNearbyUseCase(gymsRepository)
  })

  it('should be able to fetch for nearby gyms', async () => {
    await gymsRepository.create({
      title: 'Near Gym',
      description: null,
      phone: null,
      latitude: -23.453956,
      longitude: -46.3355037,
    })

    await gymsRepository.create({
      title: 'Far Gym',
      description: null,
      phone: null,
      latitude: -27.0610928,
      longitude: -49.5229501,
    })

    const { nearbyGyms } = await sut.execute({
      userlatitude: -23.453956,
      userlongitude: -46.3355037,
    })

    expect(nearbyGyms).toHaveLength(1)
    expect(nearbyGyms).toEqual([expect.objectContaining({ title: 'Near Gym' })])
  })
})
