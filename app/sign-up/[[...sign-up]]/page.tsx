'use client';

import { SignUp } from '@clerk/nextjs';
import { Bot, Sparkles, Zap, Shield, Brain, Users, MessageSquare, Star } from 'lucide-react';

export default function SignUpPage() {
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
          </div>          {/* Description */}
          <div className="space-y-4">
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">
              Join the AI Revolution
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
              Create your account and unlock the power of DeepSeek&apos;s advanced AI reasoning capabilities.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:max-w-none lg:mx-0">
            {[
              { icon: Users, number: "10K+", label: "Active Users" },
              { icon: MessageSquare, number: "1M+", label: "Conversations" },
              { icon: Star, number: "4.9", label: "Rating" },            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center space-y-2 p-4 rounded-lg glass"
              >
                <div className="w-10 h-10 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="font-bold text-lg text-primary">{stat.number}</div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg mb-4">Why choose DeepSeek?</h3>
            {[
              { icon: Brain, text: "Advanced reasoning and problem-solving capabilities" },
              { icon: Zap, text: "Lightning-fast responses with high accuracy" },
              { icon: Shield, text: "Enterprise-grade security and privacy" },
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-sm"
              >
                <benefit.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Sign Up Form */}
        <div className="flex justify-center">
          <div className="glass p-8 rounded-2xl shadow-2xl w-full max-w-md">
            <SignUp
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
