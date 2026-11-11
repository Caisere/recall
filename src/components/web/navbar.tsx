import { Link } from '@tanstack/react-router'
import { ToggleButton } from './toggle-button'
import { buttonVariants } from '../ui/button'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop:blur supports-backdrop-filter:bg-background/60 p-4">
      <div className="flex h-16 justify-between items-center w-full mx-auto max-w-6xl ">
        <div className="flex items-center gap-2">
          <img
            src="https://tanstack.com/images/logos/logo-color-banner-600.png"
            alt="TanStack Start Logo"
            className="size-8"
          />
          <h1 className="text-lg font-semibold">Recall</h1>
        </div>
        <div className="flex items-center gap-2">
          <ToggleButton />
          <Link
            to="/login"
            className={buttonVariants({ variant: 'secondary' })}
          >
            Login
          </Link>
          <Link to="/signup" className={buttonVariants()}>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
}
