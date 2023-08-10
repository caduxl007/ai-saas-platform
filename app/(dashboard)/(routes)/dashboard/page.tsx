'use client'

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
} from 'lucide-react'
import { useRouter } from 'next/navigation'

export const tools = [
  {
    label: 'Conversação',
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
  },
  {
    label: 'Gerador de música',
    icon: Music,
    href: '/music',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
  {
    label: 'Geração de Imagem',
    icon: ImageIcon,
    color: 'text-pink-700',
    bgColor: 'bg-pink-700/10',
    href: '/image',
  },
  {
    label: 'Geração de Video',
    icon: VideoIcon,
    color: 'text-orange-700',
    bgColor: 'bg-orange-700/10',
    href: '/video',
  },
  {
    label: 'Geração de Código',
    icon: Code,
    color: 'text-green-700',
    bgColor: 'bg-green-700/10',
    href: '/code',
  },
]

export default function DashboardPage() {
  const router = useRouter()

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-center text-2xl font-bold md:text-4xl">
          Explore o poder da IA
        </h2>

        <p className="text-center text-sm font-light text-muted-foreground md:text-lg">
          Converse com a IA mais inteligente - Experimente o poder da IA
        </p>
      </div>

      <div className="space-y-4 px-4 md:px-20 lg:px-32">
        {tools.map((tool) => (
          <Card
            key={tool.href}
            onClick={() => router.push(tool.href)}
            className="flex cursor-pointer items-center justify-between border-black/5 p-4 transition hover:shadow-md"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn('w-fit rounded-md p-2', tool.bgColor)}>
                <tool.icon className={cn('h-8 w-8', tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>

            <ArrowRight className="h-5 w-5" />
          </Card>
        ))}
      </div>
    </div>
  )
}
