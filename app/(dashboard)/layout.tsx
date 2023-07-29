import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { getApiLimitCount } from '@/lib/api-limit'
import { ReactNode } from 'react'

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  const apiLimitCount = await getApiLimitCount()

  return (
    <div className="relative h-full">
      <div className="z-[80] h-full bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
        <Sidebar apiLimitCount={apiLimitCount} />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  )
}
