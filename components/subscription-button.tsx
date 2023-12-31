'use client'

import axios from 'axios'
import { useState } from 'react'
import { Zap } from 'lucide-react'
import { toast } from 'react-hot-toast'

import { Button } from '@/components/ui/button'

export function SubscriptionButton({ isPro = false }: { isPro: boolean }) {
  const [loading, setLoading] = useState(false)

  const onClick = async () => {
    try {
      setLoading(true)

      const response = await axios.get('/api/stripe')

      window.location.href = response.data.url
    } catch (error) {
      toast.error('Algo deu errado :(')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      variant={isPro ? 'default' : 'premium'}
      disabled={loading}
      onClick={onClick}
    >
      {isPro ? 'Gerenciar assinatura' : 'Atualizar'}
      {!isPro && <Zap className="ml-2 h-4 w-4 fill-white" />}
    </Button>
  )
}
