import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from '#/components/ui/button'
import { toast } from '#/components/ui/toast'
import { signOut } from '#/lib/auth-client'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  return <div>Dashboard Route</div>
}
