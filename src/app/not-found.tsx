import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 grid-bg">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative text-center max-w-md">
        <p className="text-8xl font-bold gradient-text mb-4">404</p>
        <h1 className="text-xl font-semibold mb-2">Page not found</h1>
        <p className="text-sm text-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-accent hover:bg-accent-light text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-accent/20"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
