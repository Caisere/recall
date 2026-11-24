'use client'

import * as React from 'react'
import { BookmarkIcon, Compass, GalleryVerticalEnd, Import } from 'lucide-react'

import { NavUser } from './nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'

import { Link, linkOptions } from '@tanstack/react-router'
import { NavLinks } from './nav-links'
import type { NavLinksProps } from '#/types'

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Recall',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
  ],
}

const routes: NavLinksProps['routes'] = linkOptions([
  {
    title: 'Items',
    to: '/dashboard/items',
    icon: BookmarkIcon,
    
  },
  {
    title: 'Import',
    to: '/dashboard/import',
    icon: Import,
  },
  {
    title: 'Discover',
    to: '/dashboard/discover',
    icon: Compass,
  },
])

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <Link to="/dashboard" className="flex gap-3 items-center">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <BookmarkIcon className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="font-medium">Recall</span>
                  <span className="text-xs">You AI Knowledge Base</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavLinks routes={routes} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
