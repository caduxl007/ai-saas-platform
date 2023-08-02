import { LandingNavbar } from '@/components/landing-navbar'
import { LandingHero } from '@/components/landing-hero'

export default async function LandingPage() {
  return (
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
    </div>
  )
}
