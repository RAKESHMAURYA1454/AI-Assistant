"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { Thread } from "@/components/assistant-ui/thread";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { NoSSR } from "@/components/no-ssr";
import { UserButton, useUser } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";

export const Assistant = () => {
  const { user, isLoaded } = useUser();
  const runtime = useChatRuntime({
    api: "/api/chat",
  });

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-background to-muted/20">
        <motion.div
          className="flex flex-col items-center space-y-4 p-6 rounded-lg glass card-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <motion.div
              className="absolute -top-1 -right-1"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </motion.div>
          </motion.div>
          <motion.div
            className="text-center space-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-lg font-bold gradient-text">DeepSeek Assistant</h2>
            <p className="text-sm text-muted-foreground">Initializing AI conversation...</p>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <NoSSR>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="bg-gradient-to-br from-background to-muted/10">
            <motion.header
              className="header-glass sticky top-0 z-50 flex h-12 shrink-0 items-center gap-3 px-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <SidebarTrigger className="btn-hover focus-ring w-6 h-6" />
              <Separator orientation="vertical" className="h-4" />
              
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
                <div>
                  <h1 className="text-sm font-bold gradient-text">DeepSeek</h1>
                  <p className="text-xs text-muted-foreground">AI Assistant</p>
                </div>
              </div>

              <div className="ml-auto flex items-center gap-3">
                {user && (
                  <motion.div
                    className="hidden sm:flex items-center gap-2 px-2 py-1 rounded-full glass"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-medium">
                      {user.firstName || user.emailAddresses[0]?.emailAddress?.split('@')[0]}
                    </span>
                  </motion.div>
                )}
                <ThemeToggle />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hover-lift"
                >
                  <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "w-6 h-6 ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-200"
                      }
                    }}
                  />
                </motion.div>
              </div>
            </motion.header>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1 relative overflow-hidden"
            >
              <Thread />
            </motion.div>
          </SidebarInset>
        </SidebarProvider>
      </NoSSR>
    </AssistantRuntimeProvider>
  );
};
