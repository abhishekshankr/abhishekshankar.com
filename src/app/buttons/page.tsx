import Button from '@/components/Button'

export default function ButtonsDemo() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 bg-white">
      <h1 className="text-3xl font-medium mb-8">Button Components</h1>
      
      <div className="flex flex-col gap-8 items-center">
        <div className="flex gap-4">
          <Button variant="filled">Button</Button>
          <Button variant="outlined">Button</Button>
        </div>
        
        <div className="text-sm text-gray-500">
          Hover over buttons to see state transitions
        </div>
      </div>
    </div>
  )
} 