'use client'

import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from 'lucide-react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { FreeCounter } from './free-counter'

const montserrat = Montserrat({
  weight: '600',
  subsets: ['latin'],
})

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Conversação',
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-violet-500',
  },
  {
    label: 'Geração de Imagem',
    icon: ImageIcon,
    color: 'text-pink-700',
    href: '/image',
  },
  {
    label: 'Geração de Video',
    icon: VideoIcon,
    color: 'text-orange-700',
    href: '/video',
  },
  {
    label: 'Gerador de música',
    icon: Music,
    color: 'text-emerald-500',
    href: '/music',
  },
  {
    label: 'Geração de Código',
    icon: Code,
    color: 'text-green-700',
    href: '/code',
  },
  {
    label: 'Configurações',
    icon: Settings,
    href: '/settings',
  },
]

interface SidebarProps {
  apiLimitCount: number
  isPro: boolean
}

export function Sidebar({ apiLimitCount = 0, isPro = false }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col space-y-4 bg-[#111827] py-4 text-white">
      <div className="flex-1 px-3 py-2">
        <Link href="/dashboard" className="mb-14 flex items-center pl-3">
          <div className="relative mr-4 h-8 w-8">
            <Image fill alt="Logo" src="/logo.png" />
          </div>

          <h1 className={cn('text-2xl font-bold', montserrat.className)}>
            Genius
          </h1>
        </Link>

        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                'group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium hover:bg-white/10 hover:text-white',
                pathname === route.href
                  ? 'bg-white/10 text-white'
                  : 'text-zinc-400',
              )}
            >
              <div className="flex flex-1 items-center">
                <route.icon className={cn('mr-3 h-5 w-5', route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
    </div>
  )
}
