export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <article className="max-w-4xl mx-auto px-8 py-32">
      <div className="prose prose-lg prose-headings:font-medium prose-headings:font-sans prose-p:font-sans prose-li:font-sans">
        {children}
      </div>
    </article>
  )
} 