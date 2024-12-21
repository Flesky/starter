# Welcome to react-starter!
[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

A modern, production-ready template for building full-stack applications with React, Hono, and TypeScript.

## Features

- React Router 7 with file-based routing
- Mantine and Tailwind CSS

### Convert to React only

1. Delete server folder.
1. Delete `react-router-hono-server` from vite.config.ts.
1. Run `npm uninstall hono react-router-hono-server`.
1. Create react-router.config.ts:
    ```ts
    import type { Config } from '@react-router/dev/config'

    export default {
      ssr: false,
      prerender: true,
    } satisfies Config
    ```
