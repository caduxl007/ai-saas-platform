import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Landing() {
  return (
    <div>
      Landing Page
      <div>
        <Link href="/sign-in">
          <Button>login</Button>
        </Link>

        <Link href="/sign-up">
          <Button>cadastrar</Button>
        </Link>
      </div>
    </div>
  )
}
