import { CheckIn, Prisma } from '@prisma/client'
import { randomUUID } from 'node:crypto'
import { CheckInsRepository } from '../check-ins-repository'
import dayjs from 'dayjs'

export class InMemoryCheckInsRepository implements CheckInsRepository {
  public items: CheckIn[] = []

  async findbyUserIdOnDate(userId: string, date: Date) {
    const startOfTheDay = dayjs(date).startOf('date')
    const endOfTheDay = dayjs(date).endOf('date')
    const checkInOnTheSameDate = this.items.find((checkIn) => {
      const checkinDate = dayjs(checkIn.created_at)
      const isOnSameDate =
        checkinDate.isAfter(startOfTheDay) && checkinDate.isBefore(endOfTheDay)

      return checkIn.user_id === userId && isOnSameDate
    })

    if (!checkInOnTheSameDate) {
      return null
    }

    return checkInOnTheSameDate
  }

  async findManyByUserId(userId: string, page: number) {
    return this.items
      .filter((item) => item.user_id === userId)
      .slice((page - 1) * 20, page * 20)
  }

  async countUserById(userId: string) {
    return this.items.filter((item) => item.user_id === userId).length
  }

  async save(CheckIn: CheckIn) {
    const checkInIndex = this.items.findIndex((item) => item.id === CheckIn.id)

    if (checkInIndex >= 0) {
      this.items[checkInIndex] = CheckIn
    }

    return CheckIn
  }

  async findbyId(id: string) {
    const checkIn = this.items.find((item) => item.id === id)

    if (!checkIn) {
      return null
    }

    return checkIn
  }

  async create(data: Prisma.CheckInUncheckedCreateInput) {
    const checkIn = {
      id: randomUUID(),
      gym_id: data.gym_id,
      user_id: data.user_id,
      created_at: new Date(),
      validated_at: data.validated_at ? new Date(data.validated_at) : null,
    }

    this.items.push(checkIn)

    return checkIn
  }
}
