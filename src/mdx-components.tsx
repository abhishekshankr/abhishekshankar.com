import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-5xl font-medium mb-12 font-sans text-black">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-medium mb-8 mt-12 font-sans text-black">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium mb-6 mt-10 font-sans text-black">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-6 leading-relaxed font-sans text-black">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-black">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 font-sans text-black">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="mb-2 font-sans text-black">
        {children}
      </li>
    ),
    code: ({ children }) => (
      <code className="bg-black/5 rounded px-2 py-1 font-sans text-black">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-black/5 p-6 rounded-lg mb-8 overflow-x-auto font-sans text-sm text-black">
        {children}
      </pre>
    ),
    ...components,
  }
} 