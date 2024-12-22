# Welcome to flesky/starter!
[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

A modern, production-ready template for building full-stack applications with React, Hono, and TypeScript.

## Features

- React Router 7 with file-based routing
- Mantine and Tailwind CSS
- libSQL (SQLite) with Drizzle ORM
- Better Auth

## How to run

1. Clone the repository.
1. Create a copy of `.env.example` named `.env` and configure your environment variables. For Google SSO, refer to the following: https://www.better-auth.com/docs/authentication/google
1. Run the following commands:
   ```bash
   npm install
   npm run db:migrate
   npm run dev
   ```

### Convert to React only

1. Delete `server` folder and `drizzle.config.ts`.
1. Delete `react-router-hono-server` from vite.config.ts.
1. Run `npm uninstall hono react-router-hono-server better-auth drizzle-orm drizzle-kit @libsql/client`.
1. Create react-router.config.ts:
    ```ts
    import type { Config } from '@react-router/dev/config'

    export default {
      ssr: false,
      prerender: true,
    } satisfies Config
    ```
