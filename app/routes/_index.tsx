import type { Route } from './+types/_index'
import { AppShell } from '@mantine/core'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New react-starter app' },
    { name: 'description', content: 'Welcome to react-starter!' },
  ]
}

export async function loader({}: Route.LoaderArgs) {
  const res = await fetch('http://localhost:5174/api/hello')
  return res.text()
}

export default function Index({ loaderData }: Route.ComponentProps) {
  return (
    <AppShell
      padding="md"
      withBorder
    >
      <AppShell.Main>
        {loaderData}
      </AppShell.Main>
    </AppShell>
  )
}
