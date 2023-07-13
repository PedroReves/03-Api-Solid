import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryUsersRepositories } from '@/repositories/in-memory/in-memory-users'
import { hash } from 'bcryptjs'
import { GetUserProfileUseCase } from './getUserProfile'
import { ResourceNotFoundError } from './errors/resourceNotFound'

let usersRepository: InMemoryUsersRepositories
let sut: GetUserProfileUseCase

describe('Get Profile Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepositories()
    sut = new GetUserProfileUseCase(usersRepository)
  })

  it('should be able to get user profile', async () => {
    const createdUser = await usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({
      userId: createdUser.id,
    })

    expect(user.id).toEqual(expect.any(String))
  })
  it('should not be able to get user Profile  with wrong id', async () => {
    await expect(() =>
      sut.execute({
        userId: 'non-existing-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
