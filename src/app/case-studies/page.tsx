export default function CaseStudies() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Case Studies</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <a
          href="/case-studies/design-system"
          className="rounded-lg border border-gray-200 p-6 transition-all hover:border-gray-300 hover:shadow-md"
        >
          <h2 className="mb-2 text-xl font-semibold">Design System</h2>
          <p className="text-gray-600">
            A design system built for scale and consistency across multiple
            products.
          </p>
        </a>
        {/* Add more case study links here */}
      </div>
    </div>
  );
} 