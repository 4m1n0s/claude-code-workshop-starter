export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-md text-center space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">Ready to build.</h1>
        <p className="text-gray-500">
          Your dev server is running. Now:
        </p>
        <ol className="text-left text-sm space-y-3">
          <li className="flex gap-3">
            <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">1</span>
            <span>Open <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">PROJECT.md</code> and fill it in with your team</span>
          </li>
          <li className="flex gap-3">
            <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">2</span>
            <span>Open a new terminal and type <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">claude</code></span>
          </li>
          <li className="flex gap-3">
            <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">3</span>
            <span>Tell it what to build. It already knows your project plan.</span>
          </li>
        </ol>
        <p className="text-xs text-gray-400">
          Next.js + Tailwind CSS + Supabase
        </p>
      </div>
    </main>
  );
}
