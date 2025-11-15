# Deployment Guide

## Environment Variables for Vercel

To deploy this application to Vercel, you need to set the following environment variables in the Vercel dashboard:

### Required Environment Variables

1. **NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY**
   - Get this from: https://dashboard.clerk.com/last-active?path=api-keys
   - This is your Clerk publishable key (starts with `pk_`)

2. **CLERK_SECRET_KEY**
   - Get this from: https://dashboard.clerk.com/last-active?path=api-keys
   - This is your Clerk secret key (starts with `sk_`)

3. **OPENAI_API_KEY**
   - Get this from: https://openrouter.ai/keys
   - This is your OpenRouter API key (starts with `sk-or-v1-`)

### Optional Environment Variables

- **SITE_URL** - Your production domain (e.g., https://yourdomain.com)
- **SITE_NAME** - Your application name (e.g., "DeepSeek Assistant")

## Setup Steps

1. Push your code to GitHub
2. Go to https://vercel.com and import your repository
3. In the "Environment Variables" section, add each of the required variables:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `OPENAI_API_KEY`
4. Click Deploy

## Local Development

For local development, create a `.env.local` file in the root directory with all the environment variables:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx
OPENAI_API_KEY=sk-or-v1-xxxxx
SITE_URL=http://localhost:3000
SITE_NAME=DeepSeek Assistant
```

Then run:
```bash
npm install
npm run dev
```

The application will be available at http://localhost:3000
