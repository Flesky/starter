import { Hono } from 'hono'
import { createHonoServer } from 'react-router-hono-server/node'

declare module 'react-router' {
  interface AppLoadContext {
    readonly appVersion: string
  }
}

const app = new Hono()

app.get('/api/hello', (c) => {
  return c.text('Hello Hono!')
})

export default createHonoServer({ app })
