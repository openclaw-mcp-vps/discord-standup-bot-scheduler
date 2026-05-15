import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Discord Standup Bot — Automate Async Standups',
  description: 'Schedule recurring standup prompts in Discord, collect team responses, and generate summary reports for engineering managers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8e7a25ae-dfeb-481d-8a90-bcc6c3f4c609"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
