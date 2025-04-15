export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'CustomFont' }}>
        Welcome to My Website
      </h1>
      <p className="text-xl text-gray-600">
        Built with Next.js and custom fonts
      </p>
    </div>
  );
}
