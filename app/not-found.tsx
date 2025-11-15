import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold gradient-text">404</h1>
        <p className="text-xl text-muted-foreground">Page not found</p>
        <Link href="/" className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          Go back home
        </Link>
      </div>
    </div>
  );
}
