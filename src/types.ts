import type { LucideIcon } from "lucide-react"

export interface NavLinksProps {
  routes: {
    title: string
    to: string
    icon: LucideIcon
  }[]
}
