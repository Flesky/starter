import { env } from 'node:process'
import { drizzle } from 'drizzle-orm/libsql'

export const db = drizzle({ connection: {
  url: env.DATABASE_URL!,
  authToken: env.DATABASE_AUTH_TOKEN!,
} })
