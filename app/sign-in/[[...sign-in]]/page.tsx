'use client';

import { SignIn } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { Bot, Sparkles, Zap, Shield, Brain } from 'lucide-react';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Branding and Features */}
        <motion.div
          className="space-y-8 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo and Title */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <motion.div
                className="relative"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                </motion.div>
              </motion.div>
              <div>
                <h1 className="text-3xl font-bold gradient-text">DeepSeek</h1>
                <p className="text-sm text-muted-foreground">AI Assistant</p>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">
              Experience the Future of AI Conversation
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
              Powered by DeepSeek's cutting-edge reasoning models, get intelligent responses and meaningful conversations.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md mx-auto lg:max-w-none lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[
              { icon: Brain, title: "Advanced Reasoning", desc: "Complex problem solving" },
              { icon: Zap, title: "Lightning Fast", desc: "Instant responses" },
              { icon: Shield, title: "Secure & Private", desc: "Your data protected" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center space-y-2 p-4 rounded-lg glass hover-lift"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-10 h-10 mx-auto bg-primary/10 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="font-semibold text-sm">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating elements */}
          <div className="hidden lg:block absolute top-20 left-20 opacity-20">
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 text-primary" />
            </motion.div>
          </div>
          <div className="hidden lg:block absolute bottom-32 left-32 opacity-20">
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              <Zap className="w-8 h-8 text-purple-500" />
            </motion.div>
          </div>
        </motion.div>

        {/* Right side - Sign In Form */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="glass p-8 rounded-2xl shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
