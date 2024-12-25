import { createMiddleware } from 'hono/factory'
import { auth } from '../lib/auth'

export const authMiddleware = createMiddleware<{
  Variables: {
    session: typeof auth.$Infer.Session.session | null
    user: typeof auth.$Infer.Session.user | null
  }
}>(
  async (c, next) => {
    const session = await auth.api.getSession({ headers: c.req.raw.headers })

    if (!session) {
      c.set('user', null)
      c.set('session', null)
      return next()
    }

    c.set('user', session.user)
    c.set('session', session.session)
    return next()
  },
)
