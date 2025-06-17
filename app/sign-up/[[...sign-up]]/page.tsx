'use client';

import { SignUp } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { Bot, Sparkles, Zap, Shield, Brain, Users, MessageSquare, Star } from 'lucide-react';

export default function SignUpPage() {
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
              Join the AI Revolution
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
              Create your account and unlock the power of DeepSeek's advanced AI reasoning capabilities.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:max-w-none lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[
              { icon: Users, number: "10K+", label: "Active Users" },
              { icon: MessageSquare, number: "1M+", label: "Conversations" },
              { icon: Star, number: "4.9", label: "Rating" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center space-y-2 p-4 rounded-lg glass"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-10 h-10 mx-auto bg-primary/10 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 5 }}
                >
                  <stat.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <div className="font-bold text-lg text-primary">{stat.number}</div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <h3 className="font-semibold text-lg mb-4">Why choose DeepSeek?</h3>
            {[
              { icon: Brain, text: "Advanced reasoning and problem-solving capabilities" },
              { icon: Zap, text: "Lightning-fast responses with high accuracy" },
              { icon: Shield, text: "Enterprise-grade security and privacy" },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 text-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              >
                <benefit.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - Sign Up Form */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="glass p-8 rounded-2xl shadow-2xl w-full max-w-md"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
