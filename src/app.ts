import fastify from 'fastify'
import { ZodError } from 'zod'
import { env } from './env'
import fastifyJwt from '@fastify/jwt'
import { UserRoutes } from './http/controller/users/routes'
import { GymsRoutes } from './http/controller/gyms/routes'
import { CheckInsRoutes } from './http/controller/check-ins/routes'
import fastifyCookie from '@fastify/cookie'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '10m',
  },
})

app.register(fastifyCookie)

app.register(UserRoutes)
app.register(GymsRoutes)
app.register(CheckInsRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Zod Validation Error ', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: log the error to a external tool like Datadog/sentry and newRelic
  }

  return reply.status(500).send({ messsage: 'Internal Server Error' })
})
