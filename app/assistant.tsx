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
import { Bot } from "lucide-react";
import { useState } from "react";

export const Assistant = () => {
  const { user, isLoaded } = useUser();
  const [error, setError] = useState<string | null>(null);
  const runtime = useChatRuntime({
    api: "/api/chat",
    onError: (err: Error | unknown) => {
      const message = err instanceof Error ? err.message : "Failed to get response from DeepSeek.";
      setError(message);
    },
  });

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-background to-muted/20">
        <div className="flex flex-col items-center space-y-4 p-6 rounded-lg glass">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div className="text-center space-y-1">
            <h2 className="text-lg font-bold gradient-text">DeepSeek Assistant</h2>
            <p className="text-sm text-muted-foreground">Initializing AI conversation...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {error && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-red-100 text-red-700 px-4 py-2 rounded shadow-lg">
          {error}
        </div>
      )}
      <NoSSR>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="bg-gradient-to-br from-background to-muted/10">
            <header className="header-glass sticky top-0 z-50 flex h-12 shrink-0 items-center gap-3 px-4">
              <SidebarTrigger className="w-6 h-6" />
              <Separator orientation="vertical" className="h-4" />
              
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h1 className="text-sm font-bold gradient-text">DeepSeek</h1>
                  <p className="text-xs text-muted-foreground">AI Assistant</p>
                </div>
              </div>

              <div className="ml-auto flex items-center gap-3">
                {user && (
                  <div className="hidden sm:flex items-center gap-2 px-2 py-1 rounded-full glass">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-medium">
                      {user.firstName || user.emailAddresses[0]?.emailAddress?.split('@')[0]}
                    </span>
                  </div>
                )}
                <ThemeToggle />
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-6 h-6 ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-200"
                    }
                  }}
                />
              </div>
            </header>
            
            <div className="flex-1 relative overflow-hidden">
              <Thread />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </NoSSR>
    </AssistantRuntimeProvider>
  );
};
