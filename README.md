# DeepSeek AI Assistant

A modern AI assistant powered by DeepSeek and built with Next.js, featuring real-time chat with streaming responses.

## Features

- Ì∫Ä Real-time chat with streaming responses
- Ì¥ê Secure authentication with Clerk
- Ì≤æ Chat history persistence
- Ìæ® Beautiful UI with Tailwind CSS
- Ì≥± Fully responsive design
- Ìºô Dark mode support

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development Setup

1. **Clone the repository:**
```bash
git clone https://github.com/RAKESHMAURYA1454/AI-Assistant.git
cd AI-Assistant
```

2. **Create `.env.local` file** with the following environment variables:

```
# OpenRouter API Key - Get from https://openrouter.ai/keys
OPENAI_API_KEY=sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Clerk Authentication - Get from https://dashboard.clerk.com/last-active?path=api-keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Optional: Site information for OpenRouter
SITE_URL=http://localhost:3000
SITE_NAME=DeepSeek Assistant
```

3. **Install dependencies:**
```bash
npm install
```

4. **Run the development server:**
```bash
npm run dev
```

5. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment to Vercel

### Step-by-step Guide

1. **Push your code to GitHub** (if not already done)

2. **Go to [vercel.com](https://vercel.com)** and sign in

3. **Import your repository:**
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

4. **Add Environment Variables:**
   - In the "Environment Variables" section, add:
     - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (from Clerk dashboard)
     - `CLERK_SECRET_KEY` (from Clerk dashboard)
     - `OPENAI_API_KEY` (from OpenRouter)
   - Optionally add `SITE_URL` and `SITE_NAME`

5. **Click Deploy**

Your application will be built and deployed automatically!

## Configuration

### OpenRouter API Setup

1. Go to https://openrouter.ai/keys
2. Create a new API key
3. Copy the key and paste it in your `.env.local` as `OPENAI_API_KEY`

### Clerk Authentication Setup

1. Go to https://clerk.com
2. Create a new application
3. Get your API keys from https://dashboard.clerk.com/last-active?path=api-keys
4. Add them to `.env.local`:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`

## Troubleshooting

### Build Fails with "Missing publishableKey"

**Solution:** Make sure all Clerk environment variables are set in Vercel dashboard:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### API Returns 401 Unauthorized

**Solution:** Ensure you're signed in and Clerk is properly configured.

### Chat Not Responding

**Solution:** 
1. Check your OpenRouter API key is valid
2. Verify `OPENAI_API_KEY` is correctly set
3. Check the browser console for errors
4. Check Vercel logs for server-side errors

## Project Structure

```
‚îú‚îÄ‚îÄ app/
‚îÇ   ‚îú‚îÄ‚îÄ api/chat/          # Chat API endpoint
‚îÇ   ‚îú‚îÄ‚îÄ assistant.tsx      # Main assistant component
‚îÇ   ‚îú‚îÄ‚îÄ layout.tsx         # Root layout with providers
‚îÇ   ‚îî‚îÄ‚îÄ page.tsx           # Home page
‚îú‚îÄ‚îÄ components/            # React components
‚îú‚îÄ‚îÄ middleware.ts          # Clerk authentication middleware
‚îî‚îÄ‚îÄ package.json          # Dependencies
```

## Built With

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Clerk** - Authentication
- **OpenRouter** - LLM API
- **AI SDK** - Streaming responses

## Support

For issues or questions:
1. Check the [DEPLOYMENT.md](./DEPLOYMENT.md) guide
2. Review environment variable setup
3. Check logs in Vercel dashboard for deployment issues

## License

MIT License
