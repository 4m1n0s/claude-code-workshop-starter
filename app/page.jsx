import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-md space-y-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Ready to build.</h1>
        <p className="text-gray-500">Your dev server is running. Now:</p>
        <ol className="space-y-3 text-left text-sm">
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
              1
            </span>
            <span>
              Open{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs dark:bg-gray-950">
                PROJECT.md
              </code>{" "}
              and fill it in with your team
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
              2
            </span>
            <span>
              Open a new terminal and type{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs dark:bg-gray-950">
                claude
              </code>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
              3
            </span>
            <span>
              Tell it what to build. It already knows your project plan.
            </span>
          </li>
        </ol>
        <Button>Next.js + Tailwind CSS + Supabase</Button>
      </div>
    </main>
  )
}
