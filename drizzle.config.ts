import { env } from 'node:process'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'sqlite',
  schema: './server/db/schema.ts',
  out: './server/db/migrations',
  dbCredentials: {
    url: env.DATABASE_URL as string,
    token: env.DATABASE_AUTH_TOKEN as string,
  },
})
