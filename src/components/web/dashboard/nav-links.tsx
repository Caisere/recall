'use client'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { Link } from '@tanstack/react-router'
import type { NavLinksProps } from '#/types'

export function NavLinks({ routes }: NavLinksProps) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupContent>
        <SidebarMenu>
          {routes.map((route) => (
            <SidebarMenuItem key={route.to}>
              <SidebarMenuButton size="sm">
                <Link
                  activeProps={{
                    // 'data-active': true,
                    className: `font-bold text-stone-500`,
                  }}
                  to={route.to}
                  activeOptions={route.activeOptions}
                  className="flex gap-2 items-center"
                >
                  <route.icon />
                  <span>{route.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
