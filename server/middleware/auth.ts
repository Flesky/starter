import { createMiddleware } from 'hono/factory'
import { auth } from '../lib/auth'

export const authMiddleware = createMiddleware(
  async (c, next) => {
    const session = await auth.api.getSession({ headers: c.req.raw.headers })

    if (!session) {
      return c.text('401 Unauthorized', 401)
    }

    c.set('session', session.session)
    c.set('user', session.user)
    await next()
  },
)
