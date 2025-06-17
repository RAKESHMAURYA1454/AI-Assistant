'use client';

import { SignIn } from '@clerk/nextjs';
import { Bot, Sparkles, Zap, Shield, Brain } from 'lucide-react';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Branding and Features */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Logo and Title */}
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold gradient-text">DeepSeek</h1>
                <p className="text-sm text-muted-foreground">AI Assistant</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">
              Experience the Future of AI Conversation
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
              Powered by DeepSeek&apos;s cutting-edge reasoning models, get intelligent responses and meaningful conversations.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md mx-auto lg:max-w-none lg:mx-0">
            {[
              { icon: Brain, title: "Advanced Reasoning", desc: "Complex problem solving" },
              { icon: Zap, title: "Lightning Fast", desc: "Instant responses" },
              { icon: Shield, title: "Secure & Private", desc: "Your data protected" },            ].map((feature) => (
              <div
                key={feature.title}
                className="text-center space-y-2 p-4 rounded-lg glass hover-lift"
              >
                <div className="w-10 h-10 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Floating elements */}
          <div className="hidden lg:block absolute top-20 left-20 opacity-20">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <div className="hidden lg:block absolute bottom-32 left-32 opacity-20">
            <Zap className="w-8 h-8 text-purple-500" />
          </div>
        </div>

        {/* Right side - Sign In Form */}
        <div className="flex justify-center">
          <div className="glass p-8 rounded-2xl shadow-2xl">
            <SignIn
              appearance={{
                elements: {
                  rootBox: "mx-auto",
                  card: "bg-transparent shadow-none",
                  headerTitle: "text-foreground",
                  headerSubtitle: "text-muted-foreground",
                  socialButtonsBlockButton: "btn-hover",
                  formButtonPrimary: "btn-hover bg-primary hover:bg-primary/90",
                  footerActionLink: "text-primary hover:text-primary/80"
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
