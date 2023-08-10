import { Settings } from 'lucide-react'

import { Heading } from '@/components/heading'
import { SubscriptionButton } from '@/components/subscription-button'
import { checkSubscription } from '@/lib/subscription'

export default async function SettingsPage() {
  const isPro = await checkSubscription()

  return (
    <div>
      <Heading
        title="Configurações"
        description="Gerencie as configurações da conta."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="space-y-4 px-4 lg:px-8">
        <div className="text-sm text-muted-foreground">
          {isPro
            ? 'Você está atualmente em um plano Pro.'
            : 'YVocê está atualmente em um plano gratuito.'}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  )
}
