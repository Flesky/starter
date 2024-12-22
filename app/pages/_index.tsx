import type { Route } from './+types/_index'
import { AppShell, Avatar, Button, Group, Stack, Text, Title } from '@mantine/core'

import { createAuthClient } from 'better-auth/react'

const { signIn, signOut, useSession } = createAuthClient({})

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New react-starter app' },
    { name: 'description', content: 'Welcome to react-starter!' },
  ]
}

export async function loader({}: Route.LoaderArgs) {
  const res = await fetch('http://localhost:3000/api/hello')
  return res.text()
}

export default function Index({ loaderData }: Route.ComponentProps) {
  const { data, isPending } = useSession()

  async function signInWithGoogle() {
    return signIn.social({ provider: 'google' })
  }

  return (
    <AppShell padding="md" withBorder>
      <AppShell.Main>
        <Stack>
          <Title order={1} size="h2">flesky/starter</Title>
          <Title order={2} size="h3">SSR content</Title>
          {loaderData}
          <Title order={2} size="h3">Auth</Title>
          {isPending
            ? 'Loading...'
            : (data
                ? (
                    <>
                      <Group>
                        <Avatar src={data.user.image} />
                        <Text>{data.user.name}</Text>
                      </Group>
                      <Button onClick={async () => signOut()}>Sign out</Button>
                    </>
                  )

                : <Button onClick={signInWithGoogle}>Sign in with Google</Button>)}
        </Stack>
      </AppShell.Main>
    </AppShell>
  )
}
