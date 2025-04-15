import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <h1 className="text-[20rem] font-medium text-black mb-8">404</h1>
      <p className="text-xl text-black/70 mb-8">Page not found</p>
      <Link 
        href="/"
        className="rounded-[6px] text-base font-normal flex items-center justify-center px-4 py-2 bg-white border border-black text-black hover:bg-black/5"
      >
        Return Home
      </Link>
    </main>
  )
} 