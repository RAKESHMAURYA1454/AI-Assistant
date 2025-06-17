'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, Zap, Shield, Brain, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="p-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">DeepSeek</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </div>
        </nav>        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  The Future of{' '}
                  <span className="gradient-text">AI Conversation</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                  Experience DeepSeek's cutting-edge reasoning capabilities. Get intelligent responses, 
                  solve complex problems, and explore the possibilities of advanced AI.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="/sign-up" className="flex items-center gap-2">
                    Start Chatting
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>            {/* Right Visual */}
            <div className="relative">
              <div className="glass p-6 rounded-2xl max-w-md mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">DeepSeek Assistant</div>
                    <div className="text-xs text-muted-foreground">Online</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-muted/50 p-3 rounded-lg text-sm">
                    Hello! I'm DeepSeek. How can I help you today?
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg text-sm ml-8">
                    Can you help me solve a complex problem?
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg text-sm">
                    Absolutely! I excel at reasoning through complex problems. What would you like to work on?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        {/* Features Section */}
        <section id="features" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Why Choose <span className="gradient-text">DeepSeek</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience the next generation of AI with advanced reasoning capabilities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Advanced Reasoning",
                  description: "Complex problem-solving with step-by-step logical thinking."
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Get instant responses without compromising on quality."
                },
                {
                  icon: Shield,
                  title: "Secure & Private",
                  description: "Your conversations are protected with enterprise-grade security."
                }
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="text-center p-6 rounded-2xl glass"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass p-12 rounded-3xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of users who are already leveraging DeepSeek's advanced AI capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/sign-up" className="flex items-center gap-2">
                    Get Started Free
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/sign-in">Sign In</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
