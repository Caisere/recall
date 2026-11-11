import { Button } from '#/components/ui/button'
import { toast } from '#/components/ui/toast'
import { signOut } from '#/lib/auth-client'
import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  return (
    <div>
      Hello "/dashboard/"!
      <Button
        onClick={async () => {
          await signOut({
            callbackURL: '/login',
            fetchOptions: {
              onSuccess: () => {
                navigate({ to: '/login' })
                toast.add({
                  type: 'info',
                  description: 'SignOut Successful',
                })
              },
            },
          })
        }}
      >
        SignOut
      </Button>
    </div>
  )
}
