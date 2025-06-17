'use client';

import * as React from "react"
import { Github, Bot, Sparkles, Zap } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
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
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <SidebarMenuButton size="lg" asChild className="sidebar-nav-item hover-lift p-2 w-full">
                <div className="flex items-center gap-3 w-full">
                  <div className="relative">
                    <motion.div 
                      className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 shadow-md relative"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Bot className="size-4 text-white drop-shadow-sm" />
                      <motion.div
                        className="absolute -top-0.5 -right-0.5"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Sparkles className="size-2 text-yellow-300" />
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="font-bold text-base bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      DeepSeek
                    </span>
                    <span className="text-xs text-muted-foreground truncate">AI Assistant</span>
                  </div>
                </div>
              </SidebarMenuButton>
            </motion.div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1"
      >
        <SidebarContent className="sidebar-nav">
          <div className="px-3 py-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3"
            >
              Conversations
            </motion.div>
            <ThreadList />
          </div>
        </SidebarContent>
      </motion.div>
      
      <SidebarRail />
      
      <SidebarFooter className="border-t border-border/50 p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <SidebarMenuButton size="lg" asChild className="sidebar-nav-item hover-lift p-3">
                <Link href="https://github.com/deepseek-ai/DeepSeek-R1" target="_blank" className="group">
                  <motion.div 
                    className="flex aspect-square size-10 items-center justify-center rounded-xl bg-gradient-to-br from-gray-800 to-black shadow-lg group-hover:from-gray-700 group-hover:to-gray-900 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Github className="size-5 text-white" />
                  </motion.div>
                  <div className="flex flex-col flex-1">
                    <span className="font-semibold">GitHub</span>
                    <span className="text-xs text-muted-foreground">View Source</span>
                  </div>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    whileHover={{ x: 2 }}
                  >
                    <Zap className="size-4 text-yellow-500" />
                  </motion.div>
                </Link>
              </SidebarMenuButton>
            </motion.div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
