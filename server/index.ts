import { Hono } from 'hono'
import { showRoutes } from 'hono/dev'
import { createHonoServer } from 'react-router-hono-server/node'
import { auth } from './lib/auth'

const app = new Hono()

app.basePath('/api')
  .on(['POST', 'GET'], 'auth/**', async c => auth.handler(c.req.raw))
  .get('/hello', (c) => {
    return c.text('Hello Hono!')
  })

showRoutes(app)

// eslint-disable-next-line antfu/no-top-level-await
export default await createHonoServer({ app })
