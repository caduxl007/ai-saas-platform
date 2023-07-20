import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full items-center justify-center bg-zinc-900">
      {children}
    </div>
  )
}
