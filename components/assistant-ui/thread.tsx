import {
  ActionBarPrimitive,
  BranchPickerPrimitive,
  ComposerPrimitive,
  MessagePrimitive,
  ThreadPrimitive,
} from "@assistant-ui/react";
import type { FC } from "react";
import {
  ArrowDownIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CopyIcon,
  PencilIcon,
  RefreshCwIcon,
  SendHorizontalIcon,
  Bot,
  Sparkles,
  Square,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { MarkdownText } from "@/components/assistant-ui/markdown-text";
import { TooltipIconButton } from "@/components/assistant-ui/tooltip-icon-button";
import { ToolFallback } from "./tool-fallback";

export const Thread: FC = () => {
  return (
    <ThreadPrimitive.Root className="h-full flex flex-col">
      <ThreadPrimitive.Viewport className="flex-1 overflow-y-auto">
        {/* Content Container */}
        <div className="min-h-full flex flex-col">
          {/* Welcome/Empty State */}
          <ThreadPrimitive.Empty>
            <div className="flex-1 flex items-center justify-center p-8">
              <ThreadWelcome />
            </div>
          </ThreadPrimitive.Empty>

          {/* Messages Container */}
          <ThreadPrimitive.If empty={false}>
            <div className="flex-1 px-4 py-6">
              <div className="max-w-4xl mx-auto space-y-4">
                <ThreadPrimitive.Messages
                  components={{
                    UserMessage: UserMessage,
                    EditComposer: EditComposer,
                    AssistantMessage: AssistantMessage,
                  }}
                />
              </div>
            </div>
          </ThreadPrimitive.If>
        </div>
      </ThreadPrimitive.Viewport>

      {/* Fixed Bottom Input */}
      <div className="border-t border-border/50 bg-background/95 backdrop-blur-md">
        <div className="max-w-4xl mx-auto p-4">
          <Composer />
          <ThreadScrollToBottom />
        </div>
      </div>
    </ThreadPrimitive.Root>
  );
};

const ThreadScrollToBottom: FC = () => {
  return (
    <ThreadPrimitive.ScrollToBottom asChild>
      <motion.div
        className="absolute bottom-20 right-4 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <TooltipIconButton
          tooltip="Scroll to bottom"
          variant="outline"
          className="rounded-full shadow-lg bg-background/90 backdrop-blur-sm border-border/50 hover:bg-accent disabled:invisible w-10 h-10"
        >
          <ArrowDownIcon className="w-4 h-4" />
        </TooltipIconButton>
      </motion.div>
    </ThreadPrimitive.ScrollToBottom>
  );
};

const ThreadWelcome: FC = () => {
  return (
    <motion.div 
      className="w-full max-w-5xl mx-auto text-center space-y-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <div className="space-y-8">
        <motion.div
          className="flex flex-col items-center space-y-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Logo */}
          <div className="relative">
            <motion.div
              className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-3xl flex items-center justify-center shadow-2xl"
              animate={{ 
                rotate: [0, 3, -3, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Bot className="w-12 h-12 text-white" />
            </motion.div>
            <motion.div
              className="absolute -top-3 -right-3"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 15, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 text-yellow-400 drop-shadow-lg" />
            </motion.div>
          </div>
          
          {/* Title and Description */}
          <div className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold gradient-text leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Welcome to DeepSeek
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Your intelligent AI assistant powered by advanced reasoning capabilities. 
              Ask questions, solve problems, or get creative assistance.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Suggestions Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-foreground/90">
          How can I help you today?
        </h2>
        <ThreadWelcomeSuggestions />
      </motion.div>
    </motion.div>
  );
};

const ThreadWelcomeSuggestions: FC = () => {
  const suggestions = [
    {
      icon: "🧠",
      title: "Solve Complex Problems",
      description: "Mathematical, logical, or analytical challenges",
      prompt: "Help me solve a complex mathematical or logical problem step by step."
    },
    {
      icon: "💡", 
      title: "Creative Brainstorming",
      description: "Generate innovative ideas and solutions",
      prompt: "I need creative ideas for a project. Can you help me brainstorm?"
    },
    {
      icon: "📊",
      title: "Data Analysis",
      description: "Analyze and interpret information",
      prompt: "Can you help me analyze and understand this data or document?"
    },
    {
      icon: "🔍",
      title: "Research & Explain",
      description: "Deep dive into topics with clear explanations",
      prompt: "I need help researching a topic and explaining it in simple terms."
    },
    {
      icon: "⚡",
      title: "Quick Answers",
      description: "Fast, accurate responses to urgent questions",
      prompt: "I have some quick questions that need clear, concise answers."
    },
    {
      icon: "🎯",
      title: "Strategic Planning",
      description: "Create plans and strategies for your goals",
      prompt: "Help me create a plan or strategy for achieving my goals."
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {suggestions.map((suggestion, index) => (
          <motion.div
            key={suggestion.title}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: 0.1 * index, 
              duration: 0.5,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.03, 
              y: -4,
              transition: { duration: 0.2 }
            }}
            className="h-full"
          >
            <ThreadPrimitive.Suggestion
              className="group h-full block"
              prompt={suggestion.prompt}
              method="replace"
              autoSend
            >
              <div className="h-full p-6 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300 cursor-pointer">
                <div className="flex flex-col h-full space-y-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="text-4xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {suggestion.icon}
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {suggestion.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {suggestion.description}
                    </p>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="text-xs text-primary font-medium flex items-center gap-1">
                      Try this →
                    </div>
                  </div>
                </div>
              </div>
            </ThreadPrimitive.Suggestion>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Composer: FC = () => {
  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ComposerPrimitive.Root className="relative group">
        <div className="flex items-end gap-3 p-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 focus-within:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl">
          {/* Input Area */}
          <div className="flex-1 min-h-[24px]">
            <ComposerPrimitive.Input
              rows={1}
              autoFocus
              placeholder="Type your message here... Press Enter to send"
              className="w-full resize-none border-none bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 text-base leading-6 max-h-[120px] overflow-y-auto"
            />
          </div>
          
          {/* Send Button */}
          <div className="flex-shrink-0">
            <ComposerAction />
          </div>
        </div>
        
        {/* Helper Text */}
        <div className="mt-2 px-4">
          <p className="text-xs text-muted-foreground">
            Press <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Enter</kbd> to send, 
            <kbd className="px-1 py-0.5 bg-muted rounded text-xs ml-1">Shift + Enter</kbd> for new line
          </p>
        </div>
      </ComposerPrimitive.Root>
    </motion.div>
  );
};

const ComposerAction: FC = () => {
  return (
    <>
      <ThreadPrimitive.If running={false}>
        <ComposerPrimitive.Send asChild>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-10 h-10 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <SendHorizontalIcon className="w-5 h-5" />
          </motion.button>
        </ComposerPrimitive.Send>
      </ThreadPrimitive.If>
      <ThreadPrimitive.If running>
        <ComposerPrimitive.Cancel asChild>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-10 h-10 bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-destructive/50 focus:ring-offset-2"
          >
            <Square className="w-5 h-5" />
          </motion.button>
        </ComposerPrimitive.Cancel>
      </ThreadPrimitive.If>
    </>
  );
};

const UserMessage: FC = () => {
  return (
    <MessagePrimitive.Root className="group relative flex flex-col space-y-2 mb-6">
      <div className="flex justify-end">
        <div className="max-w-[80%] flex flex-col space-y-2">
          <div className="bg-primary text-primary-foreground rounded-xl rounded-tr-md px-4 py-3 shadow-md">
            <div className="text-sm leading-relaxed">
              <MessagePrimitive.Content />
            </div>
          </div>
          <UserActionBar />
        </div>
      </div>
      <BranchPicker className="flex justify-end" />
    </MessagePrimitive.Root>
  );
};

const UserActionBar: FC = () => {
  return (
    <ActionBarPrimitive.Root
      hideWhenRunning
      autohide="not-last"
      className="flex flex-col items-end col-start-1 row-start-2 mr-3 mt-2.5"
    >
      <ActionBarPrimitive.Edit asChild>
        <TooltipIconButton tooltip="Edit" className="w-8 h-8">
          <PencilIcon className="w-4 h-4" />
        </TooltipIconButton>
      </ActionBarPrimitive.Edit>
    </ActionBarPrimitive.Root>
  );
};

const EditComposer: FC = () => {
  return (
    <ComposerPrimitive.Root className="bg-muted my-4 flex w-full max-w-[var(--thread-max-width)] flex-col gap-2 rounded-xl">
      <ComposerPrimitive.Input className="text-foreground flex h-8 w-full resize-none bg-transparent p-4 pb-0 outline-none" />

      <div className="mx-3 mb-3 flex items-center justify-center gap-2 self-end">
        <ComposerPrimitive.Cancel asChild>
          <Button variant="ghost">Cancel</Button>
        </ComposerPrimitive.Cancel>
        <ComposerPrimitive.Send asChild>
          <Button>Send</Button>
        </ComposerPrimitive.Send>
      </div>
    </ComposerPrimitive.Root>
  );
};

const AssistantMessage: FC = () => {
  return (
    <MessagePrimitive.Root className="group relative flex flex-col space-y-2 mb-6">
      <div className="flex justify-start">
        <div className="max-w-[85%] flex flex-col space-y-2">
          {/* Avatar and Content */}
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 bg-card border border-border/40 rounded-xl rounded-tl-md px-4 py-3 shadow-sm">
              <div className="text-sm leading-relaxed text-foreground">
                <MessagePrimitive.Content
                  components={{ Text: MarkdownText, tools: { Fallback: ToolFallback } }}
                />
              </div>
            </div>
          </div>
          
          {/* Action Bar */}
          <div className="ml-11">
            <AssistantActionBar />
          </div>
        </div>
      </div>
      
      {/* Branch Picker */}
      <div className="ml-11">
        <BranchPicker />
      </div>
    </MessagePrimitive.Root>
  );
};

const AssistantActionBar: FC = () => {
  return (
    <ActionBarPrimitive.Root
      hideWhenRunning
      autohide="not-last"
      autohideFloat="single-branch"
      className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    >
      <ActionBarPrimitive.Copy asChild>
        <TooltipIconButton tooltip="Copy" variant="ghost" size="sm" className="w-6 h-6">
          <MessagePrimitive.If copied>
            <CheckIcon className="w-3 h-3" />
          </MessagePrimitive.If>
          <MessagePrimitive.If copied={false}>
            <CopyIcon className="w-3 h-3" />
          </MessagePrimitive.If>
        </TooltipIconButton>
      </ActionBarPrimitive.Copy>
      <ActionBarPrimitive.Reload asChild>
        <TooltipIconButton tooltip="Refresh" variant="ghost" size="sm" className="w-6 h-6">
          <RefreshCwIcon className="w-3 h-3" />
        </TooltipIconButton>
      </ActionBarPrimitive.Reload>
    </ActionBarPrimitive.Root>
  );
};

const BranchPicker: FC<BranchPickerPrimitive.Root.Props> = ({
  className,
  ...rest
}) => {
  return (
    <BranchPickerPrimitive.Root
      hideWhenSingleBranch
      className={cn(
        "text-muted-foreground inline-flex items-center text-sm",
        className
      )}
      {...rest}
    >
      <BranchPickerPrimitive.Previous asChild>
        <TooltipIconButton tooltip="Previous" className="w-8 h-8">
          <ChevronLeftIcon className="w-4 h-4" />
        </TooltipIconButton>
      </BranchPickerPrimitive.Previous>
      <span className="font-medium px-2">
        <BranchPickerPrimitive.Number /> / <BranchPickerPrimitive.Count />
      </span>
      <BranchPickerPrimitive.Next asChild>
        <TooltipIconButton tooltip="Next" className="w-6 h-6">
          <ChevronRightIcon className="w-3 h-3" />
        </TooltipIconButton>
      </BranchPickerPrimitive.Next>
    </BranchPickerPrimitive.Root>
  );
};

const CircleStopIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      width="16"
      height="16"
    >
      <rect width="10" height="10" x="3" y="3" rx="2" />
    </svg>
  );
};
