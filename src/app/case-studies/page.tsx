import Link from 'next/link'

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-medium mb-12 text-black">Case Studies</h1>
        <div className="grid gap-8">
          <Link 
            href="/case-studies/example-project"
            className="block p-8 border border-black/10 rounded-lg hover:border-black/20 transition-colors"
          >
            <h2 className="text-2xl font-medium mb-4 text-black">Design System</h2>
            <p className="text-black/70">
              A comprehensive design system built for scale and consistency across multiple platforms.
            </p>
          </Link>
          {/* Add more case study links here */}
        </div>
      </div>
    </div>
  )
} 