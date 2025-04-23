"use client"

import { uncutSans } from '@/styles/fonts'

const codeExamples = [
  {
    title: 'TypeScript (400)',
    code: `interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com'
};`,
    weight: 400
  },
  {
    title: 'JavaScript (500)',
    code: `function calculateTotal(items) {
  return items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
}

const cart = [
  { price: 10, quantity: 2 },
  { price: 20, quantity: 1 }
];`,
    weight: 500
  },
  {
    title: 'CSS (600)',
    code: `.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`,
    weight: 600
  }
]

export default function TestFonts() {
  return (
    <main className={`${uncutSans.variable} min-h-screen bg-white pt-24 pb-16`}>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">Font Test Page</h1>
        
        {/* Uncut Sans Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Uncut Sans Variable Font</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Weights */}
            <div>
              <h3 className="text-xl font-medium mb-4">Weights</h3>
              <div className="space-y-4">
                {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight) => (
                  <p key={weight} style={{ fontWeight: weight }}>
                    Weight {weight}: The quick brown fox jumps over the lazy dog
                  </p>
                ))}
              </div>
            </div>
            
            {/* Italic */}
            <div>
              <h3 className="text-xl font-medium mb-4">Italic</h3>
              <div className="space-y-4">
                {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight) => (
                  <p key={weight} style={{ fontWeight: weight }} className="italic">
                    Weight {weight} Italic: The quick brown fox jumps over the lazy dog
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mono Font Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Mono Font with Code Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {codeExamples.map((example, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-medium">{example.title}</h3>
                <pre 
                  className="font-mono p-4 bg-gray-50 rounded-lg overflow-x-auto"
                  style={{ fontWeight: example.weight }}
                >
                  {example.code}
                </pre>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
} 