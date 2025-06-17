'use client';

import * as React from "react"
import { Github, Bot } from "lucide-react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { ThreadList } from "./assistant-ui/thread-list"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="border-r border-border/50 bg-sidebar/95 backdrop-blur-sm">
      <SidebarHeader className="border-b border-border/50 p-4 bg-gradient-to-r from-sidebar to-sidebar/80">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="w-full">
              <SidebarMenuButton size="lg" asChild className="sidebar-nav-item p-2 w-full">
                <div className="flex items-center gap-3 w-full">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 shadow-md">
                    <Bot className="size-4 text-white drop-shadow-sm" />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="font-bold text-base bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      DeepSeek
                    </span>
                    <span className="text-xs text-muted-foreground truncate">AI Assistant</span>
                  </div>
                </div>
              </SidebarMenuButton>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      
      <div className="flex-1">
        <SidebarContent className="sidebar-nav">
          <div className="px-3 py-2">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Conversations
            </div>
            <ThreadList />
          </div>
        </SidebarContent>
      </div>
      
      <SidebarRail />
      
      <SidebarFooter className="border-t border-border/50 p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <div>
              <SidebarMenuButton size="lg" asChild className="sidebar-nav-item p-3">
                <Link href="https://github.com/deepseek-ai/DeepSeek-R1" target="_blank" className="group">
                  <div className="flex aspect-square size-10 items-center justify-center rounded-xl bg-gradient-to-br from-gray-800 to-black shadow-lg group-hover:from-gray-700 group-hover:to-gray-900 transition-all duration-200">
                    <Github className="size-5 text-white" />
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className="font-semibold">GitHub</span>
                    <span className="text-xs text-muted-foreground">View Source</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
