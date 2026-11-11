import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen flex justify-between">
      <div className="flex-1"></div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}
