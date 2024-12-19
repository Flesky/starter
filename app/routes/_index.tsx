import type { Route } from './+types/_index'
import { AppShell } from '@mantine/core'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New react-starter app' },
    { name: 'description', content: 'Welcome to react-starter!' },
  ]
}

export default function Index() {
  return (
    <AppShell
      padding="md"
      withBorder
    >
      <AppShell.Main>
        Hello!
      </AppShell.Main>
    </AppShell>
  )
}
